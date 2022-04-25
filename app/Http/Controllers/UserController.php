<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller {
    public function setUserIdCookie(Request $request) {
        $userId = $request->userId;

        if (is_null($userId)) {
            $userId = DB::table("users")->insertGetId(["user_id" => null]);
        }

        return response($userId)->cookie("userId", $userId);
    }
}
