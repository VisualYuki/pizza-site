<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use stdClass;

class OrderController extends Controller {

    public function index() {
        $result = [];
        $userId = UserController::getUserId();

        $userOrders = DB::table("orders")->where("user_id", $userId)->get();

        foreach($userOrders as $userOrder) {
            $orderProducts = DB::table("product_orders")->where("order_id",$userOrder->id)->leftJoin("products", "product_orders.product_id", "=", "products.id")->get();
            $userOrder->products = $orderProducts;
        }

        return $userOrders;
    }
}
