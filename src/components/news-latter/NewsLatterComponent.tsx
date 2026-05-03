import React from 'react';

const NewsLatterComponent: React.FC = () => {
  return (
    <section className="bg-[url('https://img.freepik.com/premium-photo/fern-leaves-dark-background-jungle-dense-dark-green-fern-leaves-garden-night-nature-abstract-background-fern-tropical-[#0d423d]-exotic-plant_33867-774.jpg?w=826')] shadow-xl bg-no-repeat rounded-[8px] bg-cover my-40 mx-auto max-w-480">
      <div className="flex flex-col items-center justify-center gap-4 rounded-[5px] py-40 mx-auto backdrop-blur-[2px]">
        <h3 className="font-normal uppercase text-[2.5rem] text-center text-[#d2e3c8]">Subscribe to our weekly </h3>
        <h2 className="font-playfair-display uppercase text-[6rem] text-center text-[#d2e3c8]">News Latter</h2>
        <form className="flex mt-12">
          <input
            type="email"
            placeholder="Enter your email address..."
            name="userEmail"
            className="border-none outline-hidden bg-[#f7faf7]/30 text-white rounded-l-[2px] shadow-lg text-[2rem] px-20 py-8 w-220 placeholder:text-[#f7faf7]"
          />
          <button className="bg-[#f7faf7]/30 rounded-r-[2px] pr-8">
            <img src="/assets/images/send-icon.svg" alt="send icon" className="max-w-12" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsLatterComponent;
