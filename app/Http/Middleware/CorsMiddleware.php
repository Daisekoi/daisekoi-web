<?php

namespace App\Http\Middleware;

use Closure;
use Fruitcake\Cors\CorsService;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CorsMiddleware
{
    protected $cors;

    public function __construct(CorsService $cors)
    {
        $this->cors = $cors;
    }

    public function handle(Request $request, Closure $next): Response
    {
        // CORS preflight request handling (OPTIONS request)
        if ($request->getMethod() == 'OPTIONS') {
            return response('', 200)
                ->header('Access-Control-Allow-Origin', '*')
                ->header('Access-Control-Allow-Methods', '*')
                ->header('Access-Control-Allow-Headers', '*')
                ->header('Access-Control-Allow-Credentials', 'true');
        }

        // Melanjutkan request biasa
        $response = $next($request);

        // Menambahkan header CORS untuk request selain OPTIONS
        $response->headers->set('Access-Control-Allow-Origin', $request->header('Origin'));
        $response->headers->set('Access-Control-Allow-Methods', '*');
        $response->headers->set('Access-Control-Allow-Headers', '*');
        $response->headers->set('Access-Control-Allow-Credentials', 'true');

        return $response;
    }
}
