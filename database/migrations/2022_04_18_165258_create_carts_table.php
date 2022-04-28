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
            $table->foreignId("user_id")->constrained("users");
            $table->unsignedBigInteger("product_id");
            $table->unsignedTinyInteger("count")->default(0);
        });

        DB::table("carts")->insert([
            ["id" => null, "user_id" => 1, "product_id" => 1, "count" => 2],
            ["id" => null, "user_id" => 1, "product_id" => 2, "count" => 1],
            ["id" => null, "user_id" => 1, "product_id" => 5, "count" => 1]
        ]);
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
