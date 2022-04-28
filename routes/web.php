<?php

use Illuminate\Support\Facades\Route;
use \Illuminate\Support\Facades\DB;
use App\Models\User;
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

    echo DB::getQueryLog()[0]["query"];
    var_dump($result);
});

Route::get("/test", function() {
    //return User::query()->where("id", "=", 2)->first()->carts;
    return User::query()->where("id", "=", 1)->get()->first()->carts()->attach(1)->get();
});

Route::view("/", "index");
Route::view("/{page}", "index");



