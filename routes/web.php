<?php

use Illuminate\Support\Facades\Route;

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

//Route::view("{page}", "index");
//Route::get("/{page}", function(){
//    return view("index");
//});

Route::get("/create-pizza-info-item", "CreatePizzaInfoItem");

Route::fallback(function () {
    return view("index");
});
