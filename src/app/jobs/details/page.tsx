'use client';

import React from 'react';
import JobDetailCardComponent from "@/components/job-detail-card/JobDetailCardComponent";
import JobPortal from "@/components/job-portal/JobPortal";

const responsibilities = [
  "Collaborate daily with a multidisciplinary team of Software Engineers, Researchers, Strategists, and Project Managers.",
  "Co-lead ideation sessions, workshops, demos, and presentations with clients on-site.",
  "Push for and create inclusive, accessible design for all.",
  "Maintain the quality of the design process and ensure that when designs are translated into code, they accurately reflect the design specifications.",
  "Sketch, wireframe, build IA, motion design, and run usability tests.",
  "Design pixel-perfect responsive UI’s and understand that adopting common interface patterns is better for UX than reinventing the wheel.",
  "Ensure content strategy and design are perfectly in-sync.",
  "Give and receive design critique to help constantly refine and push our work.",
];

const requiredSkills = [
  "You’ve been designing digital products for 2+ years.",
  "A portfolio that exemplifies strong visual design and a focus on defining the user experience.",
  "You’ve proudly shipped and launched several products.",
  "You have some past experience working in an agile environment – Think two-week sprints.",
  "Experience effectively presenting and communicating your design decisions to clients and team members.",
  "Up-to-date knowledge of design software like Figma, Sketch, etc.",
];

const benefits = [
  "We are a remote-first company.",
  "100% company-paid health insurance premiums for you & your dependents.",
  "Vacation stipend.",
  "Unlimited paid vacation and paid company holidays.",
  "Monthly wellness/gym stipend.",
];

const JobDetailsPage: React.FC = () => {
  return (
    <main className="bg-[#e5fb95]">
      <section className="flex flex-col items-center justify-center text-center leading-[1.8] min-h-208 bg-[url('/assets/images/flower.png'),url('/assets/images/rotated-flower.png')] bg-no-repeat bg-position-[-6rem_10rem,97rem_-18rem] bg-size-[48rem_auto] animate-[animateBgiToTop_1.7s_ease]">
        <h3 className="text-[#73d016] text-[6.5rem] font-el-messiri">Job Details</h3>
        <h5 className="text-[#73d016] text-[2.4rem] font-normal italic max-w-240">
          &ldquo; Embark on a Journey with Us. Explore Our Job Opportunities &
          Requirements! &ldquo;
        </h5>
      </section>

      <section className="bg-white shadow-lg rounded-t-[50px] flex justify-center gap-32 py-48 pb-20 min-h-200 [counter-reset:requirement-counter]">
        <div className="max-w-312">
          <div>
            <p className="text-[1.8rem] font-light text-[#2a3b2c]">
              13 October 2024 by <span className="font-medium text-[#73d016]">Deloitte</span>
            </p>
            <h4 className="text-[3.5rem] font-semibold text-[#73d016] mt-2 mb-8">
              Learning and Development Manager
            </h4>
            <div className="my-12 mb-20">
              <a href="#" className="inline-block px-[3.3rem] py-2 bg-[#e5fb95] text-[1.5rem] font-semibold text-[#73d016] rounded-[5px] mr-4 transition-colors duration-500 hover:bg-[#c9ee59]">Facebook</a>
              <a href="#" className="inline-block px-[3.3rem] py-2 bg-[#e5fb95] text-[1.5rem] font-semibold text-[#73d016] rounded-[5px] mr-4 transition-colors duration-500 hover:bg-[#c9ee59]">Twitter</a>
              <a href="#" className="inline-block px-[3.3rem] py-2 bg-[#e5fb95] text-[1.5rem] font-semibold text-[#73d016] rounded-[5px] mr-4 transition-colors duration-500 hover:bg-[#c9ee59]">Copy</a>
            </div>
          </div>

          <div className="rounded-[20px] outline-solid outline-1 outline-[#73d016] p-18 mb-16">
            <h5 className="text-[2.7rem] font-semibold text-[#73d016] flex items-center mb-8 before:[counter-increment:requirement-counter] before:content-[counter(requirement-counter)] before:text-white before:bg-[#73d016] before:rounded-full before:text-[1.5rem] before:inline-flex before:items-center before:justify-center before:mr-[0.8rem] before:w-[2.8rem] before:aspect-square">
              Overview
            </h5>
            <p className="text-[1.9rem] font-light leading-[1.7] text-[#1c2d1c]">
              When team members told us they needed more flexibility around
              where and how they worked, we acted, creating two options to
              accommodate two different styles of work. One non-negotiable
              principle along the way? We had to retain our deep culture of
              collaboration, both among ourselves and with our clients.
              Introducing Work From Near and Work From Anywhere at WillowTree.
              Please indicate which location(s) you're interested.
            </p>
          </div>

          <div className="rounded-[20px] outline-solid outline-1 outline-[#73d016] p-18 mb-16">
            <h5 className="text-[2.7rem] font-semibold text-[#73d016] flex items-center mb-8 before:[counter-increment:requirement-counter] before:content-[counter(requirement-counter)] before:text-white before:bg-[#73d016] before:rounded-full before:text-[1.5rem] before:inline-flex before:items-center before:justify-center before:mr-[0.8rem] before:w-[2.8rem] before:aspect-square">
              Job Description
            </h5>
            <p className="text-[1.9rem] font-light leading-[1.7] text-[#1c2d1c]">
              As a Product Designer at WillowTree, you’ll give form to ideas by
              being the voice and owner of product decisions. You’ll drive the
              design direction, and then make it happen!
            </p>
            <p className="text-[1.9rem] font-light leading-[1.7] text-[#1c2d1c] mt-8">
              We understand our responsibility to create a diverse, equitable,
              and inclusive place within the tech industry, while pushing to
              make our industry more representative.
            </p>
          </div>

          <div className="rounded-[20px] outline-solid outline-1 outline-[#73d016] p-18 mb-16">
            <h5 className="text-[2.7rem] font-semibold text-[#73d016] flex items-center mb-8 before:[counter-increment:requirement-counter] before:content-[counter(requirement-counter)] before:text-white before:bg-[#73d016] before:rounded-full before:text-[1.5rem] before:inline-flex before:items-center before:justify-center before:mr-[0.8rem] before:w-[2.8rem] before:aspect-square">
              Responsibilities
            </h5>
            <ul className="px-8 space-y-[1.7rem]">
              {responsibilities.map((data) => (
                <li key={data} className="list-image-[url('/assets/images/check-mark.svg')] text-[#73d016]">
                  <p className="text-[1.9rem] font-light leading-[1.7] text-[#1c2d1c]">{data}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[20px] outline-solid outline-1 outline-[#73d016] p-18 mb-16">
            <h5 className="text-[2.7rem] font-semibold text-[#73d016] flex items-center mb-8 before:[counter-increment:requirement-counter] before:content-[counter(requirement-counter)] before:text-white before:bg-[#73d016] before:rounded-full before:text-[1.5rem] before:inline-flex before:items-center before:justify-center before:mr-[0.8rem] before:w-[2.8rem] before:aspect-square">
              Required Skills:
            </h5>
            <ul className="px-8 space-y-[1.7rem] list-disc">
              {requiredSkills.map((data) => (
                <li key={data} className="text-[#73d016]">
                  <p className="text-[1.9rem] font-light leading-[1.7] text-[#1c2d1c]">{data}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[20px] outline-solid outline-1 outline-[#73d016] p-18 mb-16">
            <h5 className="text-[2.7rem] font-semibold text-[#73d016] flex items-center mb-8 before:[counter-increment:requirement-counter] before:content-[counter(requirement-counter)] before:text-white before:bg-[#73d016] before:rounded-full before:text-[1.5rem] before:inline-flex before:items-center before:justify-center before:mr-[0.8rem] before:w-[2.8rem] before:aspect-square">
              Benefits:
            </h5>
            <ul className="px-8 space-y-[1.7rem] list-disc">
              {benefits.map((data) => (
                <li key={data} className="text-[#73d016]">
                  <p className="text-[1.9rem] font-light leading-[1.7] text-[#1c2d1c]">{data}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <JobDetailCardComponent />
      </section>

      <JobPortal
        btnBg="transparent"
        className="m-0 py-40"
      />
    </main>
  );
};

export default JobDetailsPage;
