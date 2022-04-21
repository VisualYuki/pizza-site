<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Pizzas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CartController extends Controller {
    public function index() {
        return DB::select("select * from cart, pizzas where cart.pizzas_id = pizzas.id");
    }

    public function add(Request $request) {
        DB::table("cart")->insert([
            "pizzas_id" => $request->id
        ]);

        DB::table("pizzas")->where("id", $request->id)->update(["in_cart" => 1]);
    }

    public function remove(Request $request) {
        DB::table("cart")->where("pizzas_id", "=", $request->id)->delete();
        DB::table("pizzas")->where("id", $request->id)->update(["in_cart" => 0]);
    }

    public function count(Request $request) {
        return DB::table("cart")->count();
    }

    public function totalPrice(Request $request) {
        return DB::table("pizzas")->where("in_cart", "=", "1")->sum("price");
    }
}
