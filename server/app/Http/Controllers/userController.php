<?php

namespace App\Http\Controllers;

use App\Http\Model\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class userController extends Controller
{
    public function list(Request $request) {
        $jsonp = $request->callback;
        $projects = User::all();
        return $jsonp.'('.$projects.')';
    }
    public function info(Request $request, $name) {
        $jsonp = $request->callback;
        $user = User::where('name', $name)->first();
        return $jsonp.'('.$user.')';
    }
    public function signUp(Request $request) {
        $jsonp = $request->callback;
        $username = $request->username;
        $password = $request->password;
        $user = User::where('name',$username)->where('password',$password)->first();
        return $jsonp.'('.$user.')';
    }
    public function signIn(Request $request) {
        $jsonp = $request->callback;
        $user = new User;
        $user->name = $request->username;
        $user->password = $request->password;
        $user->email=$request->email;
        $user->save();
        return $jsonp.'('.$user.')';
    }
}
