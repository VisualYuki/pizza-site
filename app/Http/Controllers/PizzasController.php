<?php

namespace App\Http\Controllers;

use App\Models\Pizzas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PizzasController extends Controller {
    public function __invoke() {
        return Pizzas::all();
    }
}
