import React from 'react';

const NewsLatterComponent: React.FC = () => {
  return (
    <section className="bg-[url('https://img.freepik.com/premium-photo/fern-leaves-dark-background-jungle-dense-dark-green-fern-leaves-garden-night-nature-abstract-background-fern-tropical-forest-exotic-plant_33867-774.jpg?w=826')] shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] bg-no-repeat rounded-[8px] bg-cover my-40 mx-auto max-w-480">
      <div className="flex flex-col items-center justify-center gap-4 rounded-[5px] py-40 mx-auto backdrop-blur-[2px]">
        <h3 className="font-normal uppercase text-[2.5rem] text-center text-gray-08">Subscribe to our weekly </h3>
        <h2 className="font-playfair-display uppercase text-[6rem] text-center text-gray-08">News Latter</h2>
        <form className="flex mt-12">
          <input
            type="email"
            placeholder="Enter your email address..."
            name="userEmail"
            className="border-none outline-hidden bg-white/25 text-white rounded-l-[2px] shadow-[rgba(50,50,93,0.25)_0px_50px_100px_-20px,rgba(0,0,0,0.3)_0px_30px_60px_-30px] text-[2rem] px-20 py-8 w-220 placeholder:text-white/90"
          />
          <button className="bg-white/25 rounded-r-[2px] pr-8">
            <img src="/assets/images/send-icon.svg" alt="send icon" className="max-w-12" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsLatterComponent;
