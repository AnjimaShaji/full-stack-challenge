<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    public $timestamps = true;
    protected $table = 'job';

    protected $fillable = [
    	'job', 'role', 'type', 'company_id', 'experience', 'salary', 'description'
    ];
}
