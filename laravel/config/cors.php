<?php

return [
    'paths' => ['api/*', 'sanctum/csrf-cookie'], // Sesuaikan path API Anda
    'allowed_methods' => ['*'], // Mengizinkan semua metode (GET, POST, PUT, DELETE)
    'allowed_origins' => ['*'], // Mengizinkan semua origins (frontend Anda)
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'], // Mengizinkan semua headers
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => true,
];

