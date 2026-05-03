'use client';

import React from 'react';
import { useRouter } from '@router/customized';
import ButtonComponent, { BUTTON_TYPE_CLASSES } from "../button/ButtonComponent";

interface JobPortalProps extends React.HTMLAttributes<HTMLElement> {
  btnBg?: string;
}

const JobPortal: React.FC<JobPortalProps> = ({ btnBg = "white", className = '', ...otherProps }) => {
  const router = useRouter();

  return (
    <section className={`flex justify-center items-center gap-92 my-20 mb-28 ${className}`} {...otherProps}>
      <div>
        <h3 className="text-[#021202] text-[5.4rem] font-el-messiri font-semibold">Most complete job portal.</h3>
        <p className="text-[2.6rem] font-light text-[#52614f]">Signup and start find your job or talents.</p>
      </div>
      <div className="flex gap-10">
        <ButtonComponent
          buttonType={BUTTON_TYPE_CLASSES.outlined}
          style={{ backgroundColor: btnBg }}
          onClick={() => router.push("/jobs")}
          className="rounded-[5px] font-medium p-6"
        >
          Looking for a job?
        </ButtonComponent>
        <ButtonComponent 
          buttonType={BUTTON_TYPE_CLASSES.filled}
          className="rounded-[5px] font-medium"
        >
          Post a job
        </ButtonComponent>
      </div>
    </section>
  );
};

export default JobPortal;
