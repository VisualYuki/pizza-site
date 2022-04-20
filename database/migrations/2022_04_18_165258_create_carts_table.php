<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCartsTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('carts', function (Blueprint $table) {
            $table->id();
            $table->foreignId("pizzas_id")->default(1)->constrained();
            $table->timestamps();
        });

//        \App\Models\Cart::create([
//            "pizzas_id" => "1"
//        ]);
//
//        \App\Models\Cart::create([
//            "pizzas_id" => "2"
//        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::dropIfExists('carts');
    }
}
