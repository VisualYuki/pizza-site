<?php

namespace App\Http\Controllers;

use App\Models\PizzaInfos;
use Illuminate\Http\Request;

class CreatePizzaInfoItem extends Controller {
    public function __invoke() {
        $textId = time();

        return PizzaInfos::create([
            "name"=> "pizza-name-$textId",
            "desc" => "pizza-desc-$textId",
        ]);
    }
}