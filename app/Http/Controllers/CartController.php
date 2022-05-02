<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CartController extends Controller {
    public function index() {
        return $this->getItems()->get();
    }

    public function getItems() {
        $userId = UserController::getUserId();
        $result = User::query()->find($userId)->carts()->leftJoin("products", "carts.product_id", "=", "products.id");

        return $result;
    }

    public function countHelper($productId, $action = "increment") {
        $userId = UserController::getUserId();
        $dbRow = DB::table("carts")->where("user_id", "=", $userId, "and")->where("product_id", $productId);
        $count = $dbRow->value("count");

        if ($action === "increment") {
            $count++;
        } elseif ($action === "decrement") {
            $count--;
        }

        $dbRow->update([
            "count" => $count
        ]);
    }

    public function incrementCount(Request $request) {
        $this->countHelper($request->id, "increment");
    }

    public function decrementCount(Request $request) {
        $this->countHelper($request->id, "decrement");
    }

    public function add(Request $request) {
        $userId = UserController::getUserId();

        DB::table("carts")->updateOrInsert([
            "user_id" => $userId,
            "product_id" => $request->id,
            "count" => 1
        ]);
    }

    public function remove(Request $request) {
        $userId = UserController::getUserId();

        User::query()->find($userId)->carts()->where("product_id", "=", $request->id)->delete();
    }

    public function totalPrice() {
        $result = 0;

        foreach ($this->getItems()->get() as $item) {
            $result += $item->count * $item->price;
        }

        return $result;
    }

    public function buy(Request $request) {
        $request->validate([
            "name" => "required",
            "phone" => "required|digits:11",
            "street" => "required|min:5"
        ]);

        $userId = UserController::getUserId();
        $totalPrice = $this->totalPrice();
        $orderId = DB::table("orders")->insertGetId([
            "id" => null,
            "user_id" => $userId,
            "total_price" => $totalPrice,
            "registration_date" => date("d.m.y H:i"),
            "phone" => $request->phone,
            "name" => $request->name,
            "street" => $request->street,
        ]);

        $productItems = $this->getItems()->get();

        foreach ($productItems as $productItem) {
            DB::table("product_order")->insert([
                "order_id" => $orderId,
                "product_id" => $productItem->product_id,
                "count" => $productItem->count
            ]);
        }

        User::query()->find($userId)->carts()->delete();
    }
}
