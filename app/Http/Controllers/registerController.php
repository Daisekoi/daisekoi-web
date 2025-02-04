<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log; 
use Illuminate\Support\Facades\File;
class registerMemberController extends Controller {
       // Lokasi file CSV
       protected $filePath = 'app/private/dataDaftar.csv';

       /**
        * Membaca data dari CSV
        */
       private function readUsersFromCsv()
       {
           $path = storage_path($this->filePath);
   
           if (!File::exists($path)) {
               return [];
           }
   
           $registerMember = [];
           if (($handle = fopen($path, 'r')) !== false) {
               $header = fgetcsv($handle); // Baca header
               while (($row = fgetcsv($handle)) !== false) {
                   $registerMember[] = array_combine($header, $row); // Menggabungkan header dengan data
               }
               fclose($handle);
           }
   
           return $registerMember;
       }
   
       /**
        * Fungsi untuk menampilkan semua pengguna (member) dalam CSV
        */
       public function getregisterMember()
       {
           try {
               $registerMember = $this->readUsersFromCsv(); // Baca data dari CSV
               return view('member', ['users' => $registerMember]); // Kirim ke view member.blade.php
           } catch (\Exception $e) {
               Log::error('Error membaca data pengguna: ' . $e->getMessage());
               return response()->json(['error' => 'Error membaca data pengguna'], 500);
           }
       }
    
    public function deleteMember($nim)
{
    $csvPath = storage_path('app/private/dataDaftar.csv');
    
    if (!file_exists($csvPath)) {
        return response()->json(['message' => 'File CSV tidak ditemukan'], 404);
    }

    $data = $this->readCSV($csvPath);
    $data = array_filter($data, fn($member) => $member['nim'] !== $nim);

    // Simpan kembali data yang sudah dihapus
    $this->writeCSV($csvPath, $data);

    return response()->json(['message' => 'Member berhasil dihapus']);
}

private function writeCSV($filePath, $data)
{
    $file = fopen($filePath, 'w');
    foreach ($data as $member) {
        fputcsv($file, [$member['nim'], $member['nama'], $member['jurusan'], $member['timestamp']]);
    }
    fclose($file);
}
}