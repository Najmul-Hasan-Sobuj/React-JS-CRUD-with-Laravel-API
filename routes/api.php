<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CustomerController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// GET|HEAD        api/customers ........................................... customers.index › CustomerController@index
// POST            api/customers ........................................... customers.store › CustomerController@store
// GET|HEAD        api/customers/{customer} .................................. customers.show › CustomerController@show
// PUT|PATCH       api/customers/{customer} .............................. customers.update › CustomerController@update
// DELETE          api/customers/{customer} ............................ customers.destroy › CustomerController@destroy
Route::apiResource('customers', CustomerController::class);
