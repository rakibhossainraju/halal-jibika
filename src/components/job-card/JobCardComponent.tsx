import React from 'react';
import { Link } from '@router/customized';
import ButtonComponent, { BUTTON_TYPE_CLASSES } from "../button/ButtonComponent";

const JobCardComponent: React.FC = () => {
  return (
    <div className="rounded-[10px] flex justify-between items-center w-440 p-20 px-8 outline-solid outline-1 outline-[rgba(2,84,2,0.18)] transition-all duration-400 hover:translate-y-[-0.2rem] hover:scale-[1.02] hover:shadow-[rgba(32,32,59,0.16)_0_30px_100px_-20px,rgba(0,0,0,0.2)_0_30px_30px_-30px]">
      <div className="flex items-center justify-center gap-8">
        <img
          src="https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_22.142b36c3.png&w=128&q=75"
          alt="company logo"
          className="w-24 aspect-square"
        />
        <div>
          <h5 className="text-up-sky text-[1.7rem] font-semibold leading-[1.6] cursor-pointer hover:underline">
            <Link href="/jobs/details">Full time</Link>
          </h5>
          <h3 className="text-black text-[2rem] font-semibold cursor-pointer hover:underline hover:decoration-1">
            <Link href="/jobs/details">Developer & expert in...</Link>
          </h3>
        </div>
      </div>
      <div>
        <p className="leading-[1.9] text-[1.8rem] font-extralight text-gray-55 cursor-pointer hover:underline">
          <Link href="/jobs/details">Spain, Barcelona</Link>
        </p>
        <p className="text-gray-60 text-[1.8rem] font-extralight cursor-pointer hover:underline">
          <Link href="/jobs/details">
            <span className="text-gray-10 font-semibold">$900</span> / Monthly . Fresher
          </Link>
        </p>
      </div>
      <div className="flex gap-8">
        <button className="group relative bg-up-green border border-solid border-gray-60 rounded-full flex justify-center items-center w-18 aspect-square transition-all duration-800 hover:bg-[rgba(54,152,54,0.23)] hover:border-transparent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            fill="currentColor"
            className="bi bi-bookmark-dash fill-white group-hover:fill-brand-green-hc transition-colors duration-800"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M5.5 6.5A.5.5 0 0 1 6 6h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5"
            />
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
          </svg>
          <span className="absolute -bottom-16 bg-[rgba(153,227,166,0.6)] text-up-black-dark rounded-[5px] text-[0.8rem] font-semibold p-4 w-28 z-[-1] transition-all duration-500 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100">
            Remove job
          </span>
        </button>
        <ButtonComponent buttonType={BUTTON_TYPE_CLASSES.filled} className="px-12">Apply</ButtonComponent>
      </div>
    </div>
  );
};

export default JobCardComponent;
