<?php

namespace App\Http\Controllers;

use App\Models\Pizzas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CreatePizzaItem extends Controller {
    public function __invoke() {
        $textId = time();

        //DB::table("users")->get();

        return Pizzas::create([
            "name" => "pizza-name-$textId",
            "desc" => "pizza-desc-$textId",
        ]);

        //return "PizzaItem has created successfully";
    }
}
