<?php

namespace App\Http\Model;

use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id', 'catory', 'title',"author","cover","github","preview","view","content","time","tag"
    ];
    protected $table = 'projects';
    public $timestamps = false;
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    // protected $hidden = [
    //     'password', 'remember_token',
    // ];
}
