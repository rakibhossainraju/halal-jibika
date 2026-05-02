import React from 'react';

const DashboardComponent: React.FC = () => {
  return (
    <section>
      <h2 className="text-up-black-dark text-[3.3rem] font-semibold mb-14">Dashboard</h2>
      <div className="flex justify-center gap-8">
        {/*TOTAL VISITOR*/}
        <div className="relative isolate scale-98 w-92 after:content-[''] after:bg-white/85 after:rounded-4xl after:left-1/2 after:bottom-[-0.9rem] after:-translate-x-1/2 after:w-[85%] after:height-[10rem] after:absolute after:z-[-1]">
          <div className="bg-white shadow-[rgba(149,157,165,0.11)_0_8px_24px] rounded-[3.5rem] flex items-center justify-between p-8">
            <div>
              <h5 className="text-up-black-dark font-semibold text-[3.1rem]">1.7k+</h5>
              <p className="text-[2rem] text-gray-50 font-light">Total Visitor</p>
            </div>
            <div className="bg-up-lime rounded-full flex items-center justify-center w-22 aspect-square">
              <img
                src="https://jobi-nextjs.vercel.app/_next/static/media/icon_13.d248bf19.svg"
                alt="Profile"
              />
            </div>
          </div>
        </div>
        {/*SHORT LISTED*/}
        <div className="relative isolate scale-98 w-92 after:content-[''] after:bg-white/85 after:rounded-4xl after:left-1/2 after:bottom-[-0.9rem] after:-translate-x-1/2 after:w-[85%] after:height-[10rem] after:absolute after:z-[-1]">
          <div className="bg-white shadow-[rgba(149,157,165,0.11)_0_8px_24px] rounded-[3.5rem] flex items-center justify-between p-8">
            <div>
              <h5 className="text-up-black-dark font-semibold text-[3.1rem]">03</h5>
              <p className="text-[2rem] text-gray-50 font-light">Shortlisted</p>
            </div>
            <div className="bg-up-lime rounded-full flex items-center justify-center w-22 aspect-square">
              <img
                src="https://jobi-nextjs.vercel.app/_next/static/media/icon_12.7f76845e.svg"
                alt="bookmark icon"
              />
            </div>
          </div>
        </div>
        {/*VIEWS*/}
        <div className="relative isolate scale-98 w-92 after:content-[''] after:bg-white/85 after:rounded-4xl after:left-1/2 after:bottom-[-0.9rem] after:-translate-x-1/2 after:w-[85%] after:height-[10rem] after:absolute after:z-[-1]">
          <div className="bg-white shadow-[rgba(149,157,165,0.11)_0_8px_24px] rounded-[3.5rem] flex items-center justify-between p-8">
            <div>
              <h5 className="text-up-black-dark font-semibold text-[3.1rem]">2.1k</h5>
              <p className="text-[2rem] text-gray-50 font-light">Views</p>
            </div>
            <div className="bg-up-lime rounded-full flex items-center justify-center w-22 aspect-square">
              <img
                src="https://jobi-nextjs.vercel.app/_next/static/media/icon_14.5854971b.svg"
                alt="eye icon"
              />
            </div>
          </div>
        </div>
        {/*APPLIED JOBS*/}
        <div className="relative isolate scale-98 w-92 after:content-[''] after:bg-white/85 after:rounded-4xl after:left-1/2 after:bottom-[-0.9rem] after:-translate-x-1/2 after:w-[85%] after:height-[10rem] after:absolute after:z-[-1]">
          <div className="bg-white shadow-[rgba(149,157,165,0.11)_0_8px_24px] rounded-[3.5rem] flex items-center justify-between p-8">
            <div>
              <h5 className="text-up-black-dark font-semibold text-[3.1rem]">07</h5>
              <p className="text-[2rem] text-gray-50 font-light">Applied Job</p>
            </div>
            <div className="bg-up-lime rounded-full flex items-center justify-center w-22 aspect-square">
              <img
                src="https://jobi-nextjs.vercel.app/_next/static/media/icon_15.0025ba7e.svg"
                alt="edit icon"
              />
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="bg-white rounded-[2.5rem] mt-32 w-240 h-212">
          <h3 className="text-up-black/75 text-[2.2rem] font-semibold p-10 px-16">Profile Views</h3>
          <hr className="border-none border-t border-solid border-gray-400/20" />
          <img
            src="https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmain-graph.52916fa8.png&w=640&q=75"
            alt="graph png"
            className="p-8 px-20 pb-12 h-[85%]"
          />
        </div>
      </section>
    </section>
  );
};

export default DashboardComponent;
