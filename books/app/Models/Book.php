<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    protected $guarded = [];

    // protected $attributes = [
    //     'reviews' => '[]'
    // ];

    // public function getReviewsAttribute($value)
    // {
    //     return json_decode($value);
    // }

    // public function setReviewsAttribute($value)
    // {
    //     $this->attributes['reviews'] = json_encode($value);
    // }
}
