<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateJobTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('job', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            $table->integer('company_id');
            $table->string('job');
            $table->string('role');
            $table->integer('experience');
            $table->integer('salary');
            $table->text('description');
            $table->enum('type',['Office','Hybrid','Remote'])->default('Office');
            $table->softDeletes();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('job');
    }
}
