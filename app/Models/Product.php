<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model {
    use HasFactory;
    use SoftDeletes;

    protected $guarded = false;

    public static function custom_all() {
        $products = self::all();

        foreach ($products as $product) {
            $labels = $product->labels->first();
            if (is_null($labels)) {
                $product->hit = 0;
                $product->new = 0;
                $product->recommend = 0;
            } else {
                $product->hit = $labels->hit;
                $product->new = $labels->new;
                $product->recommend = $labels->recommend;
            }
        }

        return $products;
    }

    public function labels() {
        return $this->hasMany(ProductLabel::class);
    }


}
