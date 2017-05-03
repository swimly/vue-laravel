<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Project extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::defaultStringLength(191);
        Schema::create('projects', function (Blueprint $table) {
            $table->increments('id');
            $table->string('catory', 20)->nullable();
            $table->string('title', 40)->nullable();
            $table->string('author', 20)->nullable();
            $table->string('platform', 20)->nullable();
            $table->string('join')->nullable();
            $table->string('cover', 150)->nullable();
            $table->string('banner', 150)->nullable();
            $table->string('github', 100)->nullable();
            $table->string('preview', 100)->nullable();
            $table->string('file', 100)->nullable();
            $table->integer('views')->nullable();
            $table->longText('content')->nullable();
            $table->dateTime('time')->nullable();
            $table->string('tag')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('projects');
    }
}
