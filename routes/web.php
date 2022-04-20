<?php

use Illuminate\Support\Facades\Route;
use \Illuminate\Support\Facades\DB;

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

Route::get("/view-sql", function (Request $request) {
    DB::enableQueryLog();

    $result = DB::table("carts")->where("id", 1)->update(["created_at" => "1212"]);
    //$result = DB::table("pizzas")->union(DB::table("carts"))->get();

    echo DB::getQueryLog()[0]["query"];
    var_dump($result);
});

Route::view("/", "index");
Route::view("/{page}", "index");



