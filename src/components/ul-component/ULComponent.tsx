import React from 'react';
import { Link } from '@router/customized';

interface NavListItem {
  name: string;
  path: string;
}

interface ULComponentProps {
  title: string;
  lists?: NavListItem[];
}

const ULComponent: React.FC<ULComponentProps> = ({ title, lists = [] }) => {
  return (
    <div className="flex flex-col">
      <h5 className="text-[#91e6b3] text-[3rem] font-normal mb-12">{title}</h5>
      <ul>
        {lists.map((list) => (
          <li key={list.name} className="mb-6 last:mb-0">
            <Link 
              href={list.path} 
              className="text-[#f2f7f2] font-light text-[2rem] hover:text-[#01cdbe] transition-colors duration-400"
            >
              {list.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ULComponent;
