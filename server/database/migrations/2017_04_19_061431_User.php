<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class User extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::defaultStringLength(191);
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('userId',8)->nullable();
            $table->string('name',16)->nullable();
            $table->string('sex',4)->nullable();
            $table->string('face',40)->nullable();
            $table->string('email',20)->unique();
            $table->string('phone',20)->nullable();
            $table->string('QQ',20)->nullable();
            $table->string('place',20)->nullable();
            $table->string('wechat',20)->nullable();
            $table->string('ip',20)->nullable();
            $table->string('password',50);
            $table->string('homeplace')->nullable();
            $table->string('residence')->nullable();
            $table->string('info')->nullable();
            $table->string('position')->nullable();
            $table->dateTime('birth')->nullable();
            $table->string('department')->nullable();
            $table->string('activation')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
