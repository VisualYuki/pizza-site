<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PizzaInfos extends Model
{
    use HasFactory;
    protected $table = "pizza_infos";
    protected $guarded = false;
}
