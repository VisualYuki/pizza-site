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

    echo DB::getQueryLog()[0]["query"];
    var_dump($result);
});

Route::get("/test", function () {
    //dd(\App\Models\Order::query()->find(1)->first()->products()->first()->pivot);
    //return User::query()->find(1)->carts();
});

Route::group(["prefix" => "administrator"], function () {
    $products = DB::table("products")->get();

    Route::view('/', "admin.pages.index")->name("administrator");
    Route::view('/products', "admin.pages.products", compact("products"))->name("administrator-products");
    Route::get("/products/edit/{id}", function ($id) {
        $product = DB::table("products")->find($id);
        $action = "update";
        return view("admin.pages.product-edit", compact("id", "product", "action"));
    })->name("administrator-product-edit");

    Route::get("/products/create", function () {
        $action = "create";
        return view("admin.pages.product-edit", compact("action"));
    })->name("administrator-product-create");

    Route::post("/products/update", "ProductController@update")->name("administrator-product-update");
    Route::post("/products/create/save", "ProductController@create")->name("administrator-product-create-save");
    //Route::view('/products/update', "admin.pages.products", compact("products"))->name("administrator-products");
});
//Route::prefix("administrator")->group(function() {
//    Route::view('/', "admin.pages.index");
//    Route::view('/products', "admin.pages.products");
//});

//Route::view("/administration", "admin.pages.index");
Route::view("/", "index");
Route::view("/{page}", "index");



