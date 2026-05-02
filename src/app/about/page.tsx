import React from 'react';
import NewsLatterComponent from "@/components/news-latter/NewsLatterComponent";

const colors = ["#FFFFEC", "#EEF5FF", "#F6D5F6"];
const featureData = [
  {
    feature: "Ethical Opportunities",
    description:
      "We curate job opportunities that adhere to Halal standards, ensuring that your career path is aligned with your values. Explore a range of roles with companies that share our commitment to ethical practices.",
  },
  {
    feature: "Community-driven Approach",
    description:
      "Halal Jibika is more than just a job board; it's a community. Connect with like-minded professionals, share insights, and build networks that transcend traditional career boundaries.",
  },
  {
    feature: "Career Guidance",
    description:
      "Our platform offers more than just job listings. Discover valuable resources, insights, and expert advice to navigate your career path successfully. From resume tips to interview strategies, we're here to support your professional journey.",
  },
  {
    feature: "Our Team",
    description:
      "Meet the passionate minds behind Halal Jibika. Our diverse team is dedicated to creating an inclusive space for individuals seeking ethical and rewarding career opportunities.",
  },
  {
    feature: "Founder & CEO - Light",
    description:
      "Driven by a vision of harmonizing professional success with ethical values, Light Yagami founded Halal Jibika to redefine the way we approach career growth.",
  },
  {
    feature: "Meet the Team",
    description:
      "Include brief profiles or photos of key team members, highlighting their expertise and roles within the organization.",
  },
];

const AboutPage: React.FC = () => {
  return (
    <main className="min-h-screen">
      <h2 className="text-up-green font-el-messiri font-black text-[6.5rem] leading-40 capitalize text-center my-8">About Us</h2>
      
      <div className="flex justify-center items-center max-w-[90%] mx-auto my-12 rounded-[10px] bg-forest overflow-hidden">
        <div className="w-[55%] text-white p-4">
          <h3 className="text-mint font-el-messiri text-[6rem] ml-12 animate-fade-slide-in-from-left">Our Story</h3>
          <p className="text-[2rem] font-medium px-28 leading-[1.7] animate-fade-slide-in-from-left">
            Welcome to Halal Jibika, where the intersection of career growth and
            ethical principles thrives. Our journey began with a vision to
            provide a platform that goes beyond conventional job search portals.
            We believe in fostering a community where talent meets opportunity,
            guided by the principles of Islam.
          </p>
        </div>
        <div className="bg-gray-80 w-[45%] rounded-r-[10px]">
          <img src="/assets/images/outStory.svg" alt="Our story svg" className="h-200 mx-auto" />
        </div>
      </div>

      <div className="flex flex-row-reverse justify-center items-center max-w-[90%] mx-auto my-32 rounded-[10px] bg-gray-90 overflow-hidden">
        <div className="w-[55%] p-4 text-right">
          <h3 className="text-up-black-dark font-el-messiri text-[6rem] mr-12 animate-[slide-in-from-right_1.1s_ease]">Mission Statement</h3>
          <p className="text-gray-01 text-[2rem] font-medium px-[3.6rem] pr-28 leading-[1.7] text-right animate-[slide-in-from-right_1.1s_ease]">Empowering Careers, Preserving Values.</p>
          <p className="text-gray-01 text-[2rem] font-medium px-[3.6rem] pr-28 leading-[1.7] text-right animate-[slide-in-from-right_1.1s_ease]">
            At Halal Jibika, our mission is clear: to empower individuals in
            their career pursuits while upholding the values of integrity,
            fairness, and respect. We are committed to creating a space where
            professionals can thrive in an environment that aligns with their
            ethical beliefs.
          </p>
        </div>
        <div className="bg-gray-70 w-[45%] rounded-l-[10px]">
          <img src="/assets/images/teamWorkAnimate.svg" alt="Team work" className="h-200 mx-auto" />
        </div>
      </div>

      <section className="my-40 text-center">
        <h3 className="text-forest font-playfair-display uppercase text-[5rem] my-20 mb-24">What Sets Us Apart</h3>
        <div className="flex flex-wrap justify-center gap-20 flex-1">
          {featureData.map((data, index) => (
            <div
              key={data.feature}
              style={{ backgroundColor: colors[index % colors.length] }}
              className="rounded-[10px] shadow-[rgba(0,0,0,0.04)_0px_3px_5px] py-20 max-w-140 transition-transform duration-200 hover:scale-105"
            >
              <h4 className="text-up-black-dark font-el-messiri text-[2.3rem] font-semibold">{data.feature}</h4>
              <p className="text-gray-10 text-[1.5rem] font-medium leading-[1.7] px-16 pt-6">{data.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      <NewsLatterComponent />
    </main>
  );
};

export default AboutPage;
