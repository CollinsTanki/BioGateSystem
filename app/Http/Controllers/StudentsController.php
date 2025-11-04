<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class StudentsController extends Controller
{
    public function Index(){
        return Inertia::render('Students/Index', []);

        
    }
    //
}
