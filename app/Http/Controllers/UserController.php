<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log; 
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str; // Add this import
class UserController extends Controller {

private $filePathUsers = 'app/private/awokwa.json';
private $filePathRoles = 'app/private/r0l3.json';

    // Fungsi untuk membaca pengguna dari file JSON
    private function readUsersFromFile()
    {
        $path = storage_path($this->filePathUsers);
        if (!File::exists($path)) {
            return [];
        }

        $data = File::get($path);
        return json_decode($data, true);
    }

    // Fungsi untuk Membaca pengguna ke file Users JSON
    private function writeUsersToFile($users)
    {
        $path = storage_path($this->filePathUsers);
        try {
            File::put($path, json_encode($users, JSON_PRETTY_PRINT));
        } catch (\Exception $e) {
            Log::error('Error writing to file: ' . $e->getMessage());
            throw new \Exception('Failed to write users to file.');
        }
    }
    // Fungsi untuk membaca pengguna ke file Roles JSON
    private function readRolesFromFile()
    {
        $path = storage_path($this->filePathRoles);
        if (!File::exists($path)) {
            return [];
        }

        $data = File::get($path);
        return json_decode($data, true);
    }
    private function writeRolesToFile($roles)
    {
        $path = storage_path($this->filePathRoles);
        try {
            File::put($path, json_encode($roles, JSON_PRETTY_PRINT));
        } catch (\Exception $e) {
            Log::error('Error writing to file: ' . $e->getMessage());
            throw new \Exception('Failed to write users to file.');
        }
    }
    // Mengambil semua pengguna
    public function getUsers()
    {
        $users = $this->readUsersFromFile();
        $roles = $this->readRolesFromFile();
    
        // Iterasi setiap pengguna dan tambahkan permissions berdasarkan level
        foreach ($users as &$user) {
            $userLevel = $user['level'];
            $roleData = collect($roles)->firstWhere('level', $userLevel);
            $user['permissions'] = $roleData['permissions'] ?? [];
        }
    
        return response()->json($users);
    }
    
    
    public function getRoles()
{
    $roles = $this->readRolesFromFile();
    return response()->json($roles);
}
    // Endpoint untuk login
    public function checkUsername(Request $request)  
{  
    // Validasi input
    $validatedData = $request->validate([  
        'username' => 'required|string',  
    ]);  
    
    // Baca pengguna dari file JSON  
    $users = $this->readUsersFromFile();  
    $user = collect($users)->firstWhere('username', $validatedData['username']);  
    
    // Jika pengguna tidak ditemukan  
    if (!$user) {  
        return response()->json([  
            'success' => false,  
            'message' => 'Username not found.',  
            'setPassword' => false  ,  
        ], 404);  
    }  

    // Jika pengguna ditemukan tapi password belum disetel  
    if (empty($user['password'])) {  
        return response()->json([  
            'success' => false,  
            'message' => 'Password not set. Please create a new password.',  
            'setPassword' => true,  
            'uuid' => $user['UUID'],  
        ], 200);  
    }  

    // Jika username ditemukan dan password sudah ada  
    return response()->json([  
        'success' => true,  
        'message' => 'Username found. Please proceed to login.',  
        'checkUsername' => true,  
    ], 200);  
}




public function login(Request $request)  
{  
  
    // Validasi input  
    $validatedData = $request->validate([  
        'username' => 'required|string',  
        'password' => 'required|string',  
    ]);  

    // Baca pengguna dari file JSON  
    $users = $this->readUsersFromFile();  
    $user = collect($users)->firstWhere('username', $validatedData['username']);  

    // Jika pengguna tidak ditemukan  
    if (!$user) {  
        return response()->json([  
            'success' => false,  
            'message' => 'Invalid username or password.',  
        ], 401);  
    }  

    // Verifikasi password  
    if (!Hash::check($validatedData['password'], $user['password'])) {  
        return response()->json([  
            'success' => false,  
            'message' => 'Invalid username or password.',  
        ], 401);  
    }  

    // Baca role dari file JSON  
    $roles = $this->readRolesFromFile();
    $userLevel = $user['level'];  
    $roleData = collect($roles)->firstWhere('level', $userLevel);  
    $permissions = $roleData['permissions'] ?? [];  

    // Jika username ditemukan dan password valid  
    return response()->json([  
        'success' => true,  
        'message' => 'Login successful.',
        'username' => $user['username'],
        'name' => $user['name'],   
        'uuid' => $user['UUID'],   
        'permissions' => $permissions,  
        'Level' => $userLevel // Sertakan role di respons  
    ], 200);  
}

          // Fungsi untuk mengatur password baru
          public function setPassword(Request $request)
          {
              // Validasi input
              $request->validate([
                'uuid' => 'required|string',
                'password' => 'required|string|min:6|confirmed', // Pastikan password dan konfirmasi password cocok
            ], [
                'uuid.required' => 'UUID harus diisi.',
                'password.required' => 'Password harus diisi.',
                'password.string' => 'Password harus berupa string.',
                'password.min' => 'Password harus memiliki minimal 6 karakter.',
                'password.confirmed' => 'Konfirmasi password tidak cocok.',
            ]);
      
   
              $uuid = $request->input('uuid');
              $password = $request->input('password');
          
              // Hash password
              $hashedPassword = Hash::make($password);
          
              // Baca pengguna dari file JSON
              $users = $this->readUsersFromFile();
              
      
              // Cek apakah pengguna sudah ada
              $userIndex = array_search($uuid, array_column($users, 'UUID')); // Pastikan menggunakan 'UUID' sesuai dengan struktur JSON Anda
      
            if ($userIndex !== false) {
        // Update password pengguna yang ada
        $users[$userIndex]['password'] = $hashedPassword; // Isi password yang kosong
    } else {
        // Jika UUID tidak ditemukan, kembalikan respons error
        return response()->json(['success' => false, 'message' => 'Pengguna tidak ditemukan.'], 404);
    }

    // Simpan kembali ke file JSON
    $this->writeUsersToFile($users);

    return response()->json(['success' => true, 'message' => 'Password berhasil disimpan.']);
}
        
        
    // Endpoint untuk menghapus pengguna
    public function deleteUser(Request $request)
    {
        $request->validate([
            'UUID' => 'required|string',
        ]);

        $users = $this->readUsersFromFile();

        $filteredUsers = array_filter($users, function ($user) use ($request) {
            return $user['UUID'] !== $request->UUID;
        });

        if (count($users) === count($filteredUsers)) {
            return response()->json(['message' => 'User not found'], 404);
        }
        

        $this->writeUsersToFile(array_values($filteredUsers));
        return response()->json(['message' => 'User deleted successfully']);

    }
       
          // Endpoint untuk memperbarui pengguna
    public function updateUser(Request $request)
    {
        try {
            $uuid = $request->input('UUID');
            $users = $this->readUsersFromFile();

            // Cari pengguna berdasarkan UUID
            $userIndex = array_search($uuid, array_column($users, 'UUID'));

            if ($userIndex === false) {
                return response()->json(['message' => 'User not found'], 404);
            }

            // Perbarui data pengguna
            $users[$userIndex]['username'] = $request->input('username', $users[$userIndex]['username']);
            $users[$userIndex]['name'] = $request->input('name', $users[$userIndex]['name']);
            $users[$userIndex]['email'] = $request->input('email', $users[$userIndex]['email']);
            $users[$userIndex]['role'] = $request->input('role', $users[$userIndex]['role']);
            $users[$userIndex]['level'] = $request->input('level', $users[$userIndex]['level']);

            $this->writeUsersToFile($users);

            return response()->json(['message' => $users[$userIndex]['username'] .' updated successfully']);
        } catch (\Exception $e) {
            Log::error('Error updating user: ' . $e->getMessage());
            return response()->json(['message' => 'Error processing request'], 500);
        }
    }
    //Fungsi permission check
    public function getUserPermissions($uuid)
{
    $users = $this->readUsersFromFile();
    $roles = $this->readRolesFromFile();

    $user = collect($users)->firstWhere('UUID', $uuid);
    if (!$user) {
        return response()->json(['message' => 'User not found'], 404);
    }

    $userLevel = $user['level'];
    $roleData = collect($roles)->firstWhere('level', $userLevel);
    $permissions = $roleData['permissions'] ?? [];

    return response()->json(['permissions' => $permissions]);
}
    
    // Show dashboard with the specific UUID
    public function showDashboard($UUID)
    {
        // Log UUID yang diterima untuk debugging
        // Log::info('UUID received for dashboard: ' . $UUID);
    
        // Membaca data pengguna dari file JSON
        $users = $this->readUsersFromFile();
    
        // Mencari pengguna berdasarkan UUID yang diberikan di URL
        $userData = collect($users)->firstWhere('UUID', $UUID);
    
        if (!$userData) {
            // Jika pengguna tidak ditemukan, beri respon error
            return response()->json([
                'message' => 'User not found'
            ], 404);
        }
    
        
       
           // Pass data ke view
           return view('dashboard', compact('UUID', 'userData'));
       }
    
    public function addUser(Request $request)
    {
        // Validasi data yang diterima
        $validatedData = $request->validate([
            'username' => 'required|string|max:255|unique:users,username',
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:users,email',
            'role' => 'required|string|max:50',
            'level' => 'required|string|max:50',
        ]);

        try {
            // Buat pengguna baru
            $users = $this->readUsersFromFile();
             // Buat data pengguna baru
             $newUser = [
                'UUID' => Str::uuid(),
                'username' => $validatedData['username'],
                'name' => $validatedData['name'],
                'email' => $validatedData['email'],
                'password' => '', // Set password default
                'role' => $validatedData['role'],
                'level' => $validatedData['level'],
            ];

            // Tambahkan pengguna baru ke daftar
            $users[] = $newUser;

        

            // Tulis kembali ke file
            $this->writeUsersToFile($users);

            return response()->json([
                'success' => true,
                'message' => 'User added successfully!',
                'user' => $newUser
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to add user: ' . $e->getMessage(),
            ], 500);
        }
    }
    

}