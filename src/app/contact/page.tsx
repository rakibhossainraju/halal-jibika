import React from 'react';
import NewsLatterComponent from "@/components/news-latter/NewsLatterComponent";

const ContactPage: React.FC = () => {
  return (
    <main>
      <h3 className="text-[6rem] font-semibold font-el-messiri text-up-black text-center mt-20">Get in touch</h3>
      <section className="flex justify-center text-center max-w-400 mx-auto my-14 mb-24 flex-1">
        <div className="flex flex-col items-center gap-6 flex-1">
          <p className="w-28 flex justify-center items-center aspect-square rounded-full bg-brand-green/25">
            <img src="/assets/images/location.svg" alt="location icon" />
          </p>
          <h5 className="text-up-black-dark font-medium text-[2.7rem]">Our Address</h5>
          <p className="text-[1.8rem] font-light text-gray-01 leading-[1.8]">
            Bass Hill Plaza Medical Center <br />
            Sydney, Australia.
          </p>
        </div>
        <div className="flex flex-col items-center gap-6 flex-1">
          <p className="w-28 flex justify-center items-center aspect-square rounded-full bg-brand-green/25">
            <img src="/assets/images/maiLogo.svg" alt="mail logo" />
          </p>
          <h5 className="text-up-black-dark font-medium text-[2.7rem]">Contact Info</h5>
          <p className="text-[1.8rem] font-light text-gray-01 leading-[1.8]">
            Open a chat or give us call at <br />
            <a href="tel:+880 1915042989" className="text-up-green-hc text-[2.1rem] font-medium transition-colors duration-400 hover:text-up-green">01915042989</a>
          </p>
        </div>
        <div className="flex flex-col items-center gap-6 flex-1">
          <p className="w-28 flex justify-center items-center aspect-square rounded-full bg-brand-green/25">
            <img src="/assets/images/chatLogo.svg" alt="chat logo" />
          </p>
          <h5 className="text-up-black-dark font-medium text-[2.7rem]">Live Support</h5>
          <p className="text-[1.8rem] font-light text-gray-01 leading-[1.8]">
            Live chat service <br /> <a href="#" className="text-up-green-hc text-[2.1rem] font-medium transition-colors duration-400 hover:text-up-green">www.halaljibikachat.com</a>
          </p>
        </div>
      </section>
      
      <h3 className="text-[5rem] font-semibold font-el-messiri text-up-black text-center mb-20">
        Our Location
      </h3>
      
      <section className="max-w-480 mx-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14606.014700696616!2d90.4333882!3d23.7650722!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7d5e2055259%3A0xef380c39c46ee1ba!2sAs-Sunnah%20Foundation!5e0!3m2!1sen!2sbd!4v1704164933666!5m2!1sen!2sbd"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="shadow-[rgba(255,255,255,0.1)_0px_1px_1px_0px_inset,rgba(50,50,93,0.25)_0px_50px_100px_-20px,rgba(0,0,0,0.3)_0px_30px_60px_-30px] border-2 border-solid border-green-900/25 rounded-[20px] w-full h-200"
        ></iframe>
      </section>
      
      <NewsLatterComponent />
    </main>
  );
};

export default ContactPage;
