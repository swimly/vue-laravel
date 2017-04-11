<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/projects', 'projectController@list');
Route::get('/project', 'projectController@info');
Route::get('/projects/groups', 'projectController@groups');
Route::get('/articles', 'articleController@list');
Route::get('/article', 'articleController@info');
Route::get('/articles/groups', 'articleController@groups');
Route::get('/users', 'userController@list');
Route::get('/signUp', 'userController@signUp');
Route::get('/signIn', 'userController@signIn');
