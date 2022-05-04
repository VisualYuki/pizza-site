<?php

use App\Models\User;
use Illuminate\Support\Facades\Route;
use \Illuminate\Support\Facades\DB;

use App\Models\Product;
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

Route::get("/test", function () {
    //dd(\App\Models\Order::query()->find(1)->first()->products()->first()->pivot);
    //return User::query()->find(1)->carts;
    //Storage::disk('public')->put('images/pizza-img.jpg', 'Contents');
    //return asset("storage/pizza-img.jpg");

    //return  date("d.m.y H:i");
    //dd(Product::custom_all());
    //dd(Product::where("id", 1)->first());

});

Route::group(["prefix" => "administrator", "namespace" => "Admin"], function () {
    Route::view('/', "admin.pages.index")->name("administrator");
    Route::resource("products", "ProductController");
});

Route::view("/", "index");
Route::view("/{page}", "index");



