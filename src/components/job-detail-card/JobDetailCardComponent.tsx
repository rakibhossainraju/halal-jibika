import React from 'react';
import ButtonComponent, { BUTTON_TYPE_CLASSES } from "../button/ButtonComponent";

const JobDetailCardComponent: React.FC = () => {
  return (
    <section className="bg-[#e5fb95] rounded-[20px] px-12 w-140 max-h-260">
      <div className="flex flex-col items-center justify-center gap-6 my-16">
        <img
          src="https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_23.20c2dd37.png&w=64&q=75"
          alt="company logo"
        />
        <p className="text-[2.5rem] font-medium">Slack</p>
        <ButtonComponent className="text-[1.6rem] font-normal px-10 py-[0.8rem] bg-[#0d423d] hover:bg-[#73d016]">
          Visit Website
        </ButtonComponent>
      </div>
      <hr className="max-w-[70%] border-none border-t border-solid border-[#73d016]/30 mx-auto my-12" />
      <div className="pb-8">
        <div className="flex justify-between leading-loose">
          <div>
            <p className="text-[1.5rem] font-light">Salary</p>
            <h6 className="text-[1.6rem] font-medium mb-6">100/Weekly</h6>
            <p className="text-[1.5rem] font-light">Location</p>
            <h6 className="text-[1.6rem] font-medium mb-6">USA,New York</h6>
            <p className="text-[1.5rem] font-light">Date</p>
            <h6 className="text-[1.6rem] font-medium mb-6">25 Jul 2024</h6>
          </div>
          <div className="text-right">
            <p className="text-[1.5rem] font-light">Expertise</p>
            <h6 className="text-[1.6rem] font-medium mb-6">Intermediate</h6>
            <p className="text-[1.5rem] font-light">Job Type</p>
            <h6 className="text-[1.6rem] font-medium mb-6">Part time</h6>
            <p className="text-[1.5rem] font-light">Experience</p>
            <h6 className="text-[1.6rem] font-medium mb-6">Intermediate</h6>
          </div>
        </div>
        <div className="my-4 flex flex-wrap gap-3">
          <a href="#" className="text-[1.3rem] font-medium outline-solid outline-1 outline-[#73d016] rounded-[20px] px-8 py-[0.2rem] pb-2 transition-all duration-1000 hover:bg-[#c9ee59] hover:outline-transparent">design</a>
          <a href="#" className="text-[1.3rem] font-medium outline-solid outline-1 outline-[#73d016] rounded-[20px] px-8 py-[0.2rem] pb-2 transition-all duration-1000 hover:bg-[#c9ee59] hover:outline-transparent">seo</a>
          <a href="#" className="text-[1.3rem] font-medium outline-solid outline-1 outline-[#73d016] rounded-[20px] px-8 py-[0.2rem] pb-2 transition-all duration-1000 hover:bg-[#c9ee59] hover:outline-transparent">ui/ux</a>
        </div>
        <ButtonComponent className="bg-[#c9ee59] text-white font-semibold w-full mt-8">Apply Now</ButtonComponent>
      </div>
    </section>
  );
};

export default JobDetailCardComponent;
