<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::get("/pizzas", "PizzasController");
Route::get("/cart", "CartController@index");
Route::post("/cart/add", "CartController@add");
Route::post("/cart/remove", "CartController@remove");
Route::get("/cart/count", "CartController@count");
Route::get("/cart/total-price", "CartController@totalPrice");


