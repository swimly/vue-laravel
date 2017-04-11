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
}
