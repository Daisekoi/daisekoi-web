<?php



use Illuminate\Support\Facades\Route;
use Illuminate\Http\Response;  
use App\Http\Controllers\UserController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\registerMemberController;
use Illuminate\Support\Facades\Storage;

// Route::get('/', function () {

//     return response()->file(public_path('index.html'));

// });





Route::get('/', function () {

    return view('homepage');

});

Route::get('/daftar', function () {

    return view('comingSoon');

});

Route::get('/gallery', function () {

    return view('comingSoon');

});

Route::get('/portfolio', function () {

    return view('comingSoon');

});

Route::get('/dai-shop', function () {

    return view('comingSoon');

});

// Route::post('/api/usersLogin', [UserController::class, 'login']);



// Route::get('/api/getUsersFile', [UserController::class, 'getUsers']); 

// Route::delete('/api/deleteUser', [UserController::class, 'deleteUser']);



Route::get('/json/gallery-dokumentasi', function () {

    return response()->json(json_decode(Storage::get('storage/app/private/gallery-dokumentasi.json')));

});



Route::get('/storage/gallery-karya', function () {

    return response()->json(json_decode(Storage::get('app/private/gallery-karya.json')));

});

Route::get('/sanctum/csrf-cookie', function () {

    return response()->json(['message' => 'CSRF cookie set']);

});



Route::get('/login', function () {

    return view('login');

});
Route::get('/test', function () {

    return view('test');

});





Route::get('/dashboard/{UUID}', [UserController::class, 'showDashboard']);


Route::get('/play-alert', function () {  
    $path = storage_path('app/private/notifAra.mp3');  
    
       // Pastikan file ada  
       if (!file_exists($path)) {  
        return response()->json(['error' => 'File not found'], 404);  
    }  

    // Pastikan file bisa dibaca  
    if (!is_readable($path)) {  
        return response()->json(['error' => 'File not readable'], 403);  
    }  
    return response()->file($path, [  
        'Content-Type' => 'audio/mpeg'  
    ]);  
});  


Route::get('/api/getMemberList', [registerMemberController::class, 'getregisterMember'])->name('member.index');


Route::put('/api/updateUser', [UserController::class, 'updateUser']);
Route::post('/api/setPassword', [UserController::class, 'setPassword']);
Route::delete('/api/usersDelete', [UserController::class, 'deleteUser']);
Route::post('/api/add-user', [UserController::class, 'addUser']);
Route::get('/api/getUsersRoles', [UserController::class, 'getRoles']);
    Route::post('/api/usersLogin', [UserController::class, 'login']);
    Route::post('/api/checkUsername', [UserController::class, 'checkUsername']);

Route::middleware(['web'])->group(function () {

    

    Route::get('/api/getUsersFile', [UserController::class, 'getUsers']);


});
Route::get('/api/getUserPermissions/{uuid}', [UserController::class, 'getUserPermissions']);
Route::middleware(['auth'])->group(function () {
    // Route::get('/users', 'UserController@index')->middleware('permission:viewUsers');
    // Route::get('/events', 'UserController@index')->middleware('permission:viewEvents');
    // Route::get('/blogs', 'UserController@index')->middleware('permission:viewBlog');
    Route::get('/blog', 'UserController@index')->name('blog.index')->middleware('permission:viewBlog');
    
    // Rute lainnya...
});
// Events Controller //

// Rute untuk mengambil data event
Route::get('/api/getEventsFile', [EventController::class, 'getEvents']);

// Rute untuk menyimpan event
Route::put('/api/updateEvent/{idEvent}', [EventController::class, 'updateEvent']);

// Rute untuk menghapus event
Route::delete('/api/deleteEvent/{id}', [EventController::class, 'deleteEvent']);
Route::post('/api/addEvent', [EventController::class, 'saveEvent']);
