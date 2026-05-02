'use client';

import React from 'react';
import JobCardComponent from "@/components/job-card/JobCardComponent";
import JobPortal from "@/components/job-portal/JobPortal";

const JobsPage: React.FC = () => {
  return (
    <main>
      <section className="bg-[url('/assets/images/shape.svg')] bg-no-repeat bg-position-[-45rem_-30rem] bg-size-[80rem] flex items-center justify-between w-full min-h-200 animate-[animateBgi_1.5s_ease] overflow-x-hidden">
        <div className="-mt-20">
          <h2 className="text-up-black-dark text-[8rem] font-el-messiri ml-24 mb-8">Job Listing</h2>
          <p className="text-gray-10 text-[3rem] ml-24">Find the job that suits your niche </p>
        </div>
        <img src="/assets/images/jobs.svg" alt="Jobs svg" className="max-w-200 -scale-x-100 -translate-x-4" />
      </section>
      
      <hr className="border-none border-t border-solid border-gray-80 max-w-384 my-20 mx-auto mt-0" />
      
      <section id="jobs-section" className="flex flex-col justify-center items-center gap-12">
        <h4 className="text-[3rem] font-normal text-gray-45">All jobs</h4>
        <JobCardComponent />
        <JobCardComponent />
        <JobCardComponent />
        <JobCardComponent />
      </section>
      
      <hr className="border-none border-t border-solid border-gray-80 max-w-384 my-20 mx-auto" />
      
      <JobPortal />
    </main>
  );
};

export default JobsPage;
