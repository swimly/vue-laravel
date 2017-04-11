<?php

namespace App\Http\Controllers;

use App\Http\Model\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class projectController extends Controller
{
    public function list(Request $request) {
        $jsonp = $request->callback;
        $projects = Project::all();
        return $jsonp.'('.$projects.')';
    }
}
