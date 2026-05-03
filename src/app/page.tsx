'use client';

import React from 'react';
import { useRouter } from '@router/customized';
import Image from 'next/image';
import ButtonComponent from "@/components/button/ButtonComponent";
import JobPortal from "@/components/job-portal/JobPortal";
import CategoryComponent from "@/components/category/CategoryComponent";

const HomePage: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <header className="flex items-center justify-between gap-8 min-h-200 px-20 my-12 mx-auto">
        <div className="max-w-280">
          <h1 className="text-[#73d016] font-el-messiri font-black text-[6.5rem] leading-40 capitalize">
            <span className="block animate-fade-slide-in-from-left">Your Halal Career </span>
            <span className="block animate-fade-slide-in-from-right">Journey Starts Here</span>
          </h1>
          <p className="text-[#5e6d55] font-semibold text-[2rem] leading-16 mt-6 max-w-200 animate-fadein">
            Get you dream job with Islamic culture in your work environment.
            Settle your <span className="text-[#73d016]">Din</span> and <span className="text-[#73d016]">Duniya</span>.
          </p>
          <ButtonComponent 
            className="shadow-md mt-12 animate-fadein-delayed px-18 py-[1.2rem]"
            onClick={() => router.push("/jobs")}
          >
            Explore Jobs
          </ButtonComponent>
        </div>
        <img
          className="max-w-4xl animate-fadein-img"
          src="/assets/images/meating.svg"
          alt="Person svg"
        />
      </header>
      <main>
        <CategoryComponent />

        <section className="flex justify-center items-center py-40 gap-40">
          <img src="/assets/images/experts.png" alt="experts" className="max-w-220" />
          <div>
            <h3 className="text-[#73d016] font-el-messiri font-semibold text-[6rem] leading-[1.3] max-w-200">
              Get over 50.000+ talented experts in jobi.
            </h3>
            <p className="text-[#52614f] text-[2rem] font-light leading-[1.8] my-10 max-w-200">
              A full hybrid workforce management tools are yours to use, as well
              as access to our top 1% of talent.
            </p>
            <ul className="pl-8 space-y-10">
              <li className="text-[#73d016] text-[2.1rem] font-medium list-image-[url('/assets/images/noun-check.svg.svg')]">Seamless searching</li>
              <li className="text-[#73d016] text-[2.1rem] font-medium list-image-[url('/assets/images/noun-check.svg.svg')]">Get top 3% experts for your project</li>
              <li className="text-[#73d016] text-[2.1rem] font-medium list-image-[url('/assets/images/noun-check.svg.svg')]">Protected payments system</li>
            </ul>
            <ButtonComponent className="w-1/2 my-20">Post A Job</ButtonComponent>
          </div>
        </section>

        <section className="bg-[#001e00] py-40 pb-60">
          <h3 className="text-[#f2f7f2] font-el-messiri text-[6rem] font-semibold text-center">How it’s work?</h3>
          <div className="flex justify-center items-center gap-20 mt-24">
            <div className="flex items-center justify-center flex-col text-center max-w-140">
              <div className="bg-[#e4ebe4] rounded-full flex items-center justify-center w-28 aspect-square mx-auto">
                <img
                  src="https://jobi-nextjs.vercel.app/_next/static/media/icon_08.48144b82.svg"
                  alt=""
                />
              </div>
              <h4 className="text-[2.5rem] font-semibold text-[#e4ebe4] my-10 mb-8">Create Account</h4>
              <p className="text-[#87997d] leading-[2.1]">It’s very easy to open an account and start your journey.</p>
            </div>
            <div className="flex items-center justify-center flex-col text-center max-w-140">
              <div className="bg-[#e4ebe4] rounded-full flex items-center justify-center w-28 aspect-square mx-auto">
                <img
                  src="https://jobi-nextjs.vercel.app/_next/static/media/icon_09.cc1ca8a6.svg"
                  alt=""
                />
              </div>
              <h4 className="text-[2.5rem] font-semibold text-[#e4ebe4] my-10 mb-8">Complete your profile</h4>
              <p className="text-[#87997d] leading-[2.1]">
                Complete your profile with all the info to get attention of
                client.
              </p>
            </div>
            <div className="flex items-center justify-center flex-col text-center max-w-140">
              <div className="bg-[#e4ebe4] rounded-full flex items-center justify-center w-28 aspect-square mx-auto">
                <img
                  src="https://jobi-nextjs.vercel.app/_next/static/media/icon_10.0ccd7f8b.svg"
                  alt=""
                />
              </div>
              <h4 className="text-[2.5rem] font-semibold text-[#e4ebe4] my-10 mb-8">Apply job or hire</h4>
              <p className="text-[#87997d] leading-[2.1]">
                Apply & get your preferable jobs with all the requirements and
                get it.
              </p>
            </div>
          </div>
        </section>
      </main>
      <JobPortal className="my-60" />
    </>
  );
};

export default HomePage;
