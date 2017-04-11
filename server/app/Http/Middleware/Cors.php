<?php

namespace App\Http\Middleware;

use Closure;

class Cors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $domain = ['http://localhost:8080','http://192.168.4.220']; // 这便是你需要跨域请求的地址！
        if(isset($request->server()['HTTP_ORIGIN'])){
            $origin = $request->server()['HTTP_ORIGIN'];
            if(in_array($origin, $domain)){
                header('Access-Control-Allow-Origin:' . $origin);
                header('Access-Control-Allow-Headers: Origin, Content-Type, Authorization');
            }
        }
        return $next($request);
    }
}
