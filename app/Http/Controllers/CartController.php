<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Product;
use http\Cookie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CartController extends Controller
{
    public function index()
    {
        return $this->getItems()->get();
    }

    public function add(Request $request)
    {
        $userId = $_COOKIE["userId"];

        DB::table("carts")->updateOrInsert([
            "user_id" => $userId,
            "pizza_id" => $request->id
        ]);
    }

    public function remove(Request $request)
    {
        DB::table("carts")->where("product_id", "=", $request->id)->delete();
        DB::table("products")->where("id", $request->id)->update(["in_cart" => 0]);
    }

    public function count(Request $request)
    {
        return $this->getItems()->count();
    }

    public function totalPrice()
    {
        return $this->getItems()->sum("price");
    }

    public function getItems()
    {
        $userId = $_COOKIE["userId"];

        return DB::table("carts")->where("user_id", "=", $userId)->leftJoin("products", "carts.pizza_id", "=", "products.id");
    }

    public function buy(Request $request)
    {
        $request->validate([
            "name" => "required",
            "phone" => "required|digits:11",
            "street" => "required|min:5"
        ]);

        $userId = $_COOKIE["userId"];
        $totalPrice = $this->totalPrice();

        $orderId = DB::table("orders")->insertGetId([
            "order_id" => null,
            "user_id" => $userId,
            "total_price" => $totalPrice,
            "registration_date" => date("d.m.y H:i"),
            "phone" => $request->phone,
            "name" => $request->name,
            "street" => $request->street,

        ]);

        $productItems = $this->getItems()->get();

        foreach ($productItems as $productItem) {
            DB::table("product-orders")->insert([
                "order_id" => $orderId,
                "product_id" => $productItem->pizza_id
            ]);
        }

        DB::table("carts")->where("user_id", "=", $userId)->delete();
    }
}
