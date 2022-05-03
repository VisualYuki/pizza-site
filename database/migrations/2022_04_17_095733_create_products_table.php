<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use \Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use App\Models\Product;

class CreateProductsTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('products', function (Blueprint $table) {
            $table->id()->autoIncrement();
            $table->string("name")->default("pizza-name-");
            $table->string("desc")->default("pizza-desc-");
            $table->unsignedSmallInteger("price");
            $table->string("image")->nullable();
            $table->softDeletes();
            $table->timestamps();
            //$table->boolean("in_cart")->default(0);
        });

        $imgPath = "storage/pizza-img.jpg";
        Product::create([
            "name" => "Сливочный лосось",
            "desc" => "Сыр 'Моцарелла', нежный лосось, сочные томаты, сливочный соус и итальянские травы",
            "price" => 480,
            "image" => $imgPath
        ]);
        Product::create([
            "name" => "4 хита",
            "desc" => 'Сыр "Моцарелла", ароматная ветчина, пикантные пепперони, желтый полутвердый сыр "Тильзитер", сыр "Пармезан"',
            "price" => 620,
            "image" => $imgPath
        ]);
        Product::create([
            "name" => "Чикен блю чиз",
            "desc" => 'Свежие шампиньоны, сыр с голубой плесенью, нежное куриное филе, сочные томаты, сливочный соус и итальянские травы" ',
            "price" => 550,
            "image" => $imgPath
        ]);
        Product::create([
            "name" => "Гранд",
            "desc" => 'Сыр «Моцарелла», ароматная ветчина и свинина, свежие шампиньоны, сочные томаты и фирменный соус',
            "price" => 395,
            "image" => $imgPath
        ]);
        Product::create([
            "name" => "Дьябло",
            "desc" => 'Сыр «Моцарелла», пикантные пепперони, нежное куриное филе, болгарский перец, перец халапеньо и фирменный соус',
            "price" => 440,
            "image" => $imgPath
        ]);
        Product::create([
            "name" => "Греческая",
            "desc" => 'Сыр "Моцарелла", свежие шампиньоны, болгарский перец, сочные томаты, маслины и фирменный соус',
            "price" => 395,
            "image" => $imgPath
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::dropIfExists('product');
    }
}
