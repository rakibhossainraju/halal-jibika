import React from 'react';
import JobCardComponent from "@/components/job-card/JobCardComponent";

const FavoritePage: React.FC = () => {
  return (
    <main>
      <section className="mx-auto text-center">
        <h3 className="text-up-black-dark font-el-messiri font-semibold text-[5.5rem] my-12 mb-4">Wishlist</h3>
        <h4 className="text-gray-40 text-[2.3rem] font-normal mb-12">Your Wishlist is empty</h4>
      </section>
      <section className="flex flex-col items-center justify-center gap-10 min-h-160 mb-20">
        <img
          className="w-180"
          src="/assets/images/empty.svg"
          alt="empty svg"
        />
        {/*<JobCardComponent />*/}
        {/*<JobCardComponent />*/}
      </section>
    </main>
  );
};

export default FavoritePage;
