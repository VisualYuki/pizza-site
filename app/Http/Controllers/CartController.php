<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Pizzas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CartController extends Controller {
    public function index() {
        // костыль, но пока только так.
        return DB::select("select * from carts, pizzas where carts.pizzas_id = pizzas.id");
    }

    public function add(Request $request) {
        Cart::create([
            "pizzas_id" => $request->id
        ]);

        Pizzas::query()->find($request->id)->update(["in_cart" => 1]);
    }

    public function remove(Request $request) {
        DB::table("carts")->where("pizzas_id", "=", $request->id)->delete();
        Pizzas::query()->find($request->id)->update(["in_cart" => 0]);
    }

    public function count(Request $request) {
        return DB::table("carts")->count();
    }

    public function totalPrice(Request $request) {

        return DB::table("pizzas")->where("in_cart", "=", "1")->sum("price");
    }
}
