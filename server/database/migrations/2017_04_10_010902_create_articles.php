<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateArticles extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::defaultStringLength(191);
        Schema::create('articles', function (Blueprint $table) {
            $table->increments('id');
            $table->string('catory');
            $table->string('title');
            $table->string('author');
            $table->string('content');
            $table->integer('views');
            $table->dateTime('time');
            $table->string('tag');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::dropIfExists('articles');
    }

}
