<?php

namespace App\Http\Controllers;

use App\Http\Model\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class articleController extends Controller
{
    public function list(Request $request) {
        $jsonp = $request->callback;
        $projects = Article::all();
        return $jsonp.'('.$projects.')';
    }
    public function info(Request $request) {
        $jsonp = $request->callback;
        $id = $request->id;
        $projects = Article::find($id);
        return $jsonp.'('.$projects.')';
    }
    public function groups(Request $request) {
        $jsonp = $request->callback;
        $result = Article::all()->groupBy('router');
        return $jsonp.'('.$result.')';
    }
}
