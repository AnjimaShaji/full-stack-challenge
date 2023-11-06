<?php

namespace App\Http\Controllers\Admin;

use App\Job;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class JobController extends Controller
{
    public function create(Request $request)
    {
        $request['company_id'] = (int)$request['company_id'];
        $request['experience'] = (int)$request['experience'];
        $validator = $this->validate($request, [
            'company_id' => 'required',
            'job' => 'required',
            'role' => 'required',
            'experience' => 'required'
        ]);

        $companyData = Job::create($request->all());
        return response()->json(['message'=>'Job Created','companyData'=>$companyData],200);
	}

    public function view()
    {
        $jobData = Job::select('job.id','company_id','company.name as company','location','job','role','experience','description','type','salary')
                       ->leftJoin('company', 'job.company_id', '=', 'company.id')
                       ->whereNull('job.deleted_at')
                       ->get();
        return response()->json($jobData,200);
    }

    public function details($id)
    {
        $jobDetails = Job::select('job.id','job.company_id','company.name as company','job.job','job.role','job.experience','job.description','job.type','job.salary')
                        ->leftJoin('company', 'job.company_id', '=', 'company.id')
                        ->where('job.id', $id)
                        ->get()->toArray();
        return response()->json(['message'=>'Job Details','jobDetails'=>$jobDetails],200);
    }

    public function edit(Request $request)
    {
        $update = [
            'company_id' => $request['company_id'],
            'job' => $request['job'],
            'role' => $request['role'],
            'experience' => $request['experience'],
            'location' => $request['location'],
            'description' => $request['description'],
        ];
        Job::where('id', $request['id'])->update($update);
        return response()->json(['message'=>'Job Updated'],200);
    }

    public function delete($id)
    {
        Job::where('id', $id)->update(['deleted_at'=> date('Y-m-d H:i:s')]);
        return response()->json(['message'=>'Job Deleted'],200);
    }

    public function search(Request $request)
    {
       
        $query = Job::select('job.id','company_id','company.name as company','job','role','experience','description','type','salary','location')
                ->leftJoin('company', 'job.company_id', '=', 'company.id');
                       
        if ($request->has('type')) {
            $query = $query->where('type', $request->input('type'));
        }

        if ($request->has('salary')) {
            $query->where('salary', '>=', $request->input('salary'));
        }

        if ((int)$request['company']) {
            $query->where('company_id', $request->input('company'));
        }

        if ($request->has('location')) {
            $query->where('location', 'like', '%' . $request->input('location') . '%');
        }

        $query = $query->whereNull('job.deleted_at')
                       ->get();

        return response()->json($query);
    }
}
