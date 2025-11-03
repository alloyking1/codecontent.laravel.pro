<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;

class PagesController extends Controller
{
    public function index()
    {
        return inertia('Home');
    }
    // public function index()
    // {
    //     return inertia('Pages/index');
    // }
}
