<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use stdClass;

class OrderController extends Controller
{

    public function index()
    {
        $result = [];
        $userId = $_COOKIE["userId"];

        $userOrders = DB::table("orders")->where("user_id", $userId)->get();

        return $userOrders;
    }
}
