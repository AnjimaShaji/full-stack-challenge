<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    public $timestamps = true;
    protected $table = 'company';

    protected $fillable = [
        'name', 'email', 'location', 'industry'
    ];

    public function company()
    {
        return $this->hasMany('App\Company');
    }
}
