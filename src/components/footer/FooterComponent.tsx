import React from 'react';
import { Link } from '@router/customized';
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
    <footer className="bg-[#0d423d] px-8 py-20">
      <section>
        <div className="flex justify-center gap-40">
          <div className="flex flex-col gap-4">
            <Link 
              href="/" 
              className="font-el-messiri text-[#91e6b3] text-[4rem] hover:text-[#73d016] transition-colors duration-300"
            >
              Halal Jibika
            </Link>
            <div className="flex flex-col gap-2">
              <Link href="" className="text-[#f2f7f2] hover:text-[#01cdbe] transition-colors">Face Book</Link>
              <Link href="" className="text-[#f2f7f2] hover:text-[#01cdbe] transition-colors">Twitter</Link>
              <Link href="" className="text-[#f2f7f2] hover:text-[#01cdbe] transition-colors">Github</Link>
            </div>
          </div>
          <ULComponent title="Services" lists={services} />
          <ULComponent title="Company" lists={company} />
          <ULComponent title="Support" lists={support} />
        </div>
      </section>
      <h4 className="text-[#beccbe] text-[2rem] font-extralight text-center mt-24">
        &#169; All copy rights reserved to Light Yagami 2024
      </h4>
    </footer>
  );
};

export default FooterComponent;
