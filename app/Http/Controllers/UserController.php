<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public static function setUserIdCookie(Request $request)
    {
        $userId = $request->userId;

        if (is_null($userId)) {
            DB::table("users")->insertGetId(["id" => null]);
        }

        $userId = DB::table("users")->get()->first()->id;

        return response($userId)->cookie("userId", $userId);
    }

    public static function getUserId()
    {
        $userId = $_COOKIE["userId"];

        return $userId;
    }
}
