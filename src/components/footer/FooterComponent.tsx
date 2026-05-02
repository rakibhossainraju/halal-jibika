import React from 'react';
import Link from 'next/link';
import ULComponent from "../ul-component/ULComponent";

const services = [
  { name: "Browse Jobs", path: "" },
  { name: "Companies", path: "" },
  { name: "Candidates", path: "" },
  { name: "Pricing", path: "" },
];

const company = [
  { name: "About us", path: "/about" },
  { name: "Blogs", path: "" },
  { name: "FAQ's", path: "" },
  { name: "Contact", path: "/contact" },
];

const support = [
  { name: "Terms of use", path: "" },
  { name: "Terms & conditions", path: "" },
  { name: "Privacy", path: "" },
  { name: "Cookie policy", path: "" },
];

const FooterComponent: React.FC = () => {
  return (
    <footer className="bg-forest bg-[radial-gradient(closest-side,transparent_98%,rgba(0,0,0,0.08)_99%),radial-gradient(closest-side,transparent_98%,rgba(0,0,0,0.08)_99%)] bg-size-[80px_80px] bg-size-[0_0,40px_40px] px-8 py-20">
      <section>
        <div className="flex justify-center gap-40">
          <div className="flex flex-col gap-4">
            <Link 
              href="/" 
              className="font-el-messiri text-mint text-[4rem] hover:text-up-green transition-colors duration-300"
            >
              Halal Jibika
            </Link>
            <div className="flex flex-col gap-2">
              <Link href="" className="text-gray-90 hover:text-sky transition-colors">Face Book</Link>
              <Link href="" className="text-gray-90 hover:text-sky transition-colors">Twitter</Link>
              <Link href="" className="text-gray-90 hover:text-sky transition-colors">Github</Link>
            </div>
          </div>
          <ULComponent title="Services" lists={services} />
          <ULComponent title="Company" lists={company} />
          <ULComponent title="Support" lists={support} />
        </div>
      </section>
      <h4 className="text-gray-60 text-[2rem] font-extralight text-center mt-24">
        &#169; All copy rights reserved to Light Yagami 2024
      </h4>
    </footer>
  );
};

export default FooterComponent;
