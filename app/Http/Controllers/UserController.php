<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller {
    public static function setUserIdCookie(Request $request) {
        $userId = $request->userId;

        if (is_null($userId)) {
            $userId = DB::table("users")->insertGetId(["id" => null]);
        }

        return response($userId)->cookie("userId", $userId);
    }

    public static function getUserId() {
        $userId = $_COOKIE["userId"];

        return $userId;
    }
}
