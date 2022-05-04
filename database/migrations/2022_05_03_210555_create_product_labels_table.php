<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateProductLabelsTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('product_labels', function (Blueprint $table) {
            $table->id();
            $table->foreignId("product_id")->constrained();
            $table->unsignedTinyInteger("new")->default(0);
            $table->unsignedTinyInteger("hit")->default(0);
            $table->unsignedTinyInteger("recommend")->default(0);
            $table->timestamps();
        });

        DB::table("product_labels")->insert(
            ["product_id" => 1, "new" => 1, "hit" => 1, "recommend" => 1]
        );

        DB::table("product_labels")->insert(
            ["product_id" => 3, "new" => 1]
        );

        DB::table("product_labels")->insert(
            ["product_id" => 6, "new" => 1, "recommend" => 1]
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::dropIfExists('product_labels');
    }
}
