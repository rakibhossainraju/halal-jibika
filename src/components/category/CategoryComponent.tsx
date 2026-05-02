import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const categoriesDetails = [
  {
    name: "UI/UX Design",
    jobs: 12,
    icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_63.772e8f20.svg",
  },
  {
    name: "Development",
    jobs: 7,
    icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_64.35fa6b78.svg",
  },
  {
    name: "Telemarketing",
    jobs: 310,
    icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_65.718cba66.svg",
  },
  {
    name: "Marketing",
    jobs: 420,
    icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_68.41869509.svg",
  },
  {
    name: "Editing",
    jobs: 3,
    icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_66.64f36c76.svg",
  },
  {
    name: "Accounting",
    jobs: 150,
    icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_67.569964fa.svg",
  },
];

const CategoryComponent: React.FC = () => {
  return (
    <section className="bg-lime-light py-20 pb-80">
      <div className="flex items-center justify-center gap-20">
        <h2 className="text-[5.5rem] font-bold font-el-messiri text-up-black max-w-200 bg-[url('https://jobi-nextjs.vercel.app/_next/static/media/shape_04.73aa37f7.svg')] bg-no-repeat bg-position-[40.5rem_6rem] py-40">
          Most Demanding Categories.
        </h2>
        <div>
          <p className="text-up-green-hc text-[2.2rem] leading-loose mb-10 max-w-200">
            Together with useful notifications, collaboration, insights, and
            improvement tip lorem etc.
          </p>
          <Link href="/jobs#jobs-section" className="border-b border-solid color-brand-green text-[1.8rem] font-semibold pb-[.5rem] inline-block transition-colors duration-200 hover:text-up-sky">
            Explore all fields {">"}
          </Link>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center gap-8">
        {categoriesDetails.map(({ name, icon, jobs }) => (
          <Link key={name} href="/jobs#jobs-section">
            <div className="group bg-white rounded-[0.7rem] cursor-pointer flex flex-col justify-around items-center py-4 w-[20rem] aspect-square relative overflow-hidden isolate transition-all duration-400 hover:shadow-[rgba(50,50,93,0.25)_0px_50px_100px_-20px,rgba(0,0,0,0.3)_0px_30px_60px_-30px] hover:translate-y-[-1.2rem]">
              <div className="absolute bg-up-lime-hc rounded-full w-full aspect-square scale-0 -left-40 -bottom-40 transition-all duration-400 ease-out z-[-1] group-hover:scale-[2.4]" />
              <img src={icon} alt={name} className="w-12 group-hover:brightness-[50]" />
              <h4 className="text-[2rem] font-semibold text-gray-40 group-hover:text-white transition-colors">
                {name}
              </h4>
              <p className="text-gray-02 text-[1.5rem] font-light group-hover:text-white transition-colors">
                {jobs}k+ Jobs
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryComponent;
