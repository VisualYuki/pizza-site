<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * Model
 *
 * @mixin Eloquent
 */
class Cart extends Model
{
    use HasFactory;
    protected $guarded = false;

//    public function pizzass() {
//        return $this->hasMany(Pizzas::class, "pizzas_id", "id");
//    }
}
