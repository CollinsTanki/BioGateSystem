<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LaptopsController extends Controller
{
    public function Index(){
        return Inertia::render('Laptops/Index', []);

        
    }
    //
}
