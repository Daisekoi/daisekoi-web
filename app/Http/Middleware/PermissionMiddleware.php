<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class PermissionMiddleware
{
    public function handle($request, Closure $next, $permission)
    {
        $user = Auth::user();
        
        if (!$user) {
            return redirect()->route('login');
        }
        
        $rolePermissions = $this->getRolePermissions($user->level);
        
        if (!in_array($permission, $rolePermissions)) {
            abort(403, 'Unauthorized');
        }
        
        return $next($request);
    }
    
    private function getRolePermissions($level)
    {
        $filePathRoles = 'app/private/r0l3.json';
        $r0l3Data = file_get_contents(base_path($filePathRoles));
        $r0l3 = json_decode($r0l3Data, true);
        
        foreach ($r0l3 as $role) {
            if ($role['level'] == $level) {
                return $role['permissions'];
            }
        }
        
        return [];
    }
}