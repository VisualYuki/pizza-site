<?php

namespace App\Http\Controllers;

use App\Models\Pizzas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PizzasController extends Controller {
    public function __invoke() {

        return Pizzas::all();
        //return  DB::table("pizzas")->leftJoin("carts", "pizzas.id", "=", "carts.pizzas_id")->get();
        //("select *, in_cart from pizzas, carts  where carts.pizzas_id = pizzas.id");
    }
}
