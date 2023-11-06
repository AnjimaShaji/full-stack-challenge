<?php

use Illuminate\Http\Request;
use App\Http\Controllers\Auth\LoginController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('signup','Auth\LoginController@signup');

Route::post('login', 'Auth\LoginController@login');

Route::post('create-company', 'Admin\CompanyController@create');

Route::get('view-companies', 'Admin\CompanyController@view');

Route::get('company-details/{id}', 'Admin\CompanyController@details');

Route::post('update-company', 'Admin\CompanyController@edit');

Route::post('delete-company', 'Admin\CompanyController@delete');

Route::post('create-job', 'Admin\JobController@create');

Route::get('view-job', 'Admin\JobController@view');

Route::get('view-single-job/{id}', 'Admin\JobController@details');

Route::post('update-job', 'Admin\JobController@edit');

Route::post('delete-job', 'Admin\JobController@delete');

Route::get('search-job', 'Admin\JobController@search');

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

   
});
