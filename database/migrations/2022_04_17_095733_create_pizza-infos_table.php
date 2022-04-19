<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\PizzaInfos;

class CreatePizzaInfosTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('pizza_infos', function (Blueprint $table) {
            $table->id()->autoIncrement();
            $table->string("name")->default("pizza-name-");
            $table->string("desc")->default("pizza-desc-");
            $table->smallInteger("price")->default("999");
            //$table->boolean("isDiscount")->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::dropIfExists('pizza_infos');
    }
}
