<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class FileController extends Controller
{
    public function uploadimg (Request $request) {
        $file = $request->file('files');
        if($file->isValid()) {
            $clientName = $file ->getClientOriginalName();
            $tmpName = $file->getFileName();
            $realPath = $file -> getRealPath();
            $extension = $file -> getClientOriginalExtension();
            $mimeTye = $file -> getMimeType();
            $newName = md5(date('ymdhis').$clientName).".".$extension;
            $path = $file -> move(app_path().'/storage/uploads',$newName);
            return $newName;
        }
    }
}
