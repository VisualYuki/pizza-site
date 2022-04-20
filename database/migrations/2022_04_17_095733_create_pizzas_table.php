<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;


class CreatePizzasTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('pizzas', function (Blueprint $table) {
            $table->id()->autoIncrement();
            $table->string("name")->default("pizza-name-");
            $table->string("desc")->default("pizza-desc-");
            $table->smallInteger("price")->default("999");
            $table->boolean("in_cart")->default(0);
//            $table->unsignedBigInteger("cart_id");
//            $table->foreign("cart_id")->references("id")->on("carts")->onDelete("cascade");

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::dropIfExists('pizzas');
    }
}
