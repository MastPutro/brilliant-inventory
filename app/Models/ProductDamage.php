<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductDamage extends Model
{
    protected $fillable = [
        'product_id', 'quantity', 'entry_date', 'reason', 'date',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
