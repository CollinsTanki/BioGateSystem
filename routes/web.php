<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use App\Http\Controllers\StudentsController;
use App\Http\Controllers\LaptopsController;


Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    Route:: get('students', [StudentsController::class, 'Index'])->name('students.index');
    Route:: get('students/Create', [StudentsController::class, 'Create'])->name('students.create');
    Route:: get('laptops', [LaptopsController::class, 'Index'])->name('laptops.index');
});

require __DIR__.'/settings.php';
