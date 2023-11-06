<?php

namespace App\Http\Controllers\Admin;

use App\Company;
use App\Job;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;

class CompanyController extends Controller
{
	public function create(Request $request)
    {

        $validator = $this->validate($request, [
            'name' => 'required',
            'email' => 'required|email|unique:company',
            'location' => 'required',
            'industry' => 'required'
        ]);

        $companyData = Company::create($request->all());
        return response()->json(['message'=>'Company Created','companyData'=>$companyData],200);
	}

	public function view()
    {
        $companyData = Company::select('company.id','name','email','location','industry', DB::raw('COUNT(job.company_id) as job_count'))
                       ->leftJoin('job', 'job.company_id', '=', 'company.id')
                       ->whereNull('company.deleted_at')
                        ->groupBy('company.id', 'company.name', 'company.email', 'company.location', 'company.industry')
                       ->get();
        return response()->json($companyData,200);
	}

	public function details($id)
    {
        $companyDetails = Company::select('id','name','email','location','industry')
        				->where('id', $id)
                        ->get()->toArray();
        return response()->json(['message'=>'Company Details','companyDetails'=>$companyDetails],200);
	}

	public function edit(Request $request)
    {
        $update = [
            'name' => $request['name'],
            'email' => $request['email'],
            'location' => $request['location'],
            'industry' => $request['industry']
        ];
        Company::where('id', $request['id'])->update($update);
        return response()->json(['message'=>'Company Updated'],200);
	}

	public function delete($id)
    {
    	Company::where('id', $id)->update(['deleted_at'=> date('Y-m-d H:i:s')]);
        Job::where('company_id', $id)->update(['deleted_at'=> date('Y-m-d H:i:s')]);
    	return response()->json(['message'=>'Company Deleted'],200);
    }
}
