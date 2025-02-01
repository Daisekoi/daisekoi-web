<?php

namespace App\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;
use App\Http\Middleware\VerifyCsrfToken;
class Kernel extends HttpKernel
{
// app/Http/Kernel.php

protected $middlewareGroups = [
    'web' => [
        // Middleware lainnya untuk web
        \App\Http\Middleware\CorsMiddleware::class,  // Daftarkan middleware CORS di sini
        \Illuminate\Routing\Middleware\SubstituteBindings::class,
        'throttle:api',
        \App\Http\Middleware\VerifyCsrfToken::class
        
    ],

    'user' => [
        \App\Http\Middleware\CorsMiddleware::class,  // Daftarkan middleware CORS di sini
        \Illuminate\Routing\Middleware\SubstituteBindings::class,
        'throttle:api',
        \App\Http\Middleware\VerifyCsrfToken::class
    ],
];
protected $routeMiddleware = [
    // ...
    'permission' => \App\Http\Middleware\PermissionMiddleware::class,
];
    
}
