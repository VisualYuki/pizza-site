<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller {

    public function index() {
        $userId = UserController::getUserId();
        $userOrders = DB::table("orders")->where("user_id", $userId)->get();

        foreach ($userOrders as $userOrder) {
            //$orderProducts = Order::query()->find($userOrder->id)->first()->products;
            $orderProducts = DB::table("product_order")->where("order_id", $userOrder->id)->leftJoin("products", "product_order.product_id", "=", "products.id")->get();

//            foreach ($orderProducts as $orderProduct) {
//                $orderProduct->count = $orderProduct->getOriginal()["pivot_count"];
//            }

            $userOrder->products = $orderProducts;
        }

        return $userOrders;
    }
}
