<?php

namespace App\Http\Controllers;

use App\Models\PizzaInfos;
use Illuminate\Http\Request;

class PizzaInfosController extends Controller {
    public function __invoke() {
        return PizzaInfos::all();
    }
}
