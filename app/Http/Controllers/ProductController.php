<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller {
    public function index(Request $request) {
        $userId = UserController::getUserId();
        $allProducts = DB::table("products")->get();
        $cartProducts = DB::table("carts")->where("user_id",  $userId)->get();

        foreach ($allProducts as $product) {
            $product->in_cart = 0;

            if ($cartProducts->contains("product_id", "=", $product->id)) {
                $product->in_cart = 1;
            }
        }

        return $allProducts;
    }
}
