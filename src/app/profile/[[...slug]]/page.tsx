'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/utility/firebase";
import DashboardComponent from "../DashboardComponent";

const sidebarLinks = [
  {
    name: "Dashboard",
    path: "dashboard",
    icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_1.2012e511.svg",
  },
  {
    name: "My profile",
    path: "my-profile",
    icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_2.bb2a8c78.svg",
  },
  {
    name: "Resume",
    path: "resume",
    icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_3.1dfe15d1.svg",
  },
  {
    name: "Messages",
    path: "messages",
    icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_4.7fb6e150.svg",
  },
  {
    name: "Job Alert",
    path: "job-alert",
    icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_5.7bc7faef.svg",
  },
  {
    name: "Saved Job",
    path: "saved-job",
    icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_6.70ec5244.svg",
  },
  {
    name: "Account Settings",
    path: "account-settings",
    icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_7.9db14e45.svg",
  },
  {
    name: "Delete Account",
    path: "delete",
    icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_8.1d18804d.svg",
  },
  {
    name: "Logout",
    path: "logout",
    icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_9.69f19313.svg",
  },
];

const routeElements: { [key: string]: React.ReactNode } = {
  dashboard: <DashboardComponent />,
  "my-profile": <div className="text-[2rem]">This page is under construction</div>,
  resume: <div className="text-[2rem]">This page is under construction</div>,
  messages: <div className="text-[2rem]">This page is under construction</div>,
  "job-alert": <div className="text-[2rem]">This page is under construction</div>,
  "saved-job": <div className="text-[2rem]">This page is under construction</div>,
  "account-settings": <div className="text-[2rem]">This page is under construction</div>,
  delete: <div className="text-[2rem]">This page is under construction</div>,
};

export default function ProfilePage({ params }: { params: { slug?: string[] } }) {
  const pathname = usePathname();
  const router = useRouter();
  const [user] = useAuthState(auth);
  
  const currentSlug = params.slug?.[0] || 'dashboard';

  return (
    <main className="flex mt-4">
      <section className="w-140 h-[90vh] overflow-y-auto no-scrollbar">
        <div className="flex flex-col items-center justify-center gap-6 my-12 mb-16">
          <img
            src={user?.photoURL || "https://picsum.photos/200/300"}
            alt="profile picture"
            className="rounded-full w-32 aspect-square"
          />
          <h3 className="text-up-black text-[2.5rem] font-semibold">
            {user?.displayName || "User Name"}
          </h3>
        </div>
        <div className="side-navigation">
          <ul>
            {sidebarLinks.map((link) => {
              const isLogout = link.path === "logout";
              const isActive = !isLogout && currentSlug === link.path;

              return (
                <li key={link.path} className="mx-auto mb-4 max-w-88">
                  {isLogout ? (
                    <button
                      onClick={async () => {
                        await signOut(auth);
                        if (typeof window !== 'undefined') {
                          localStorage.setItem("isLoggedIn", "false");
                        }
                        router.push("/");
                      }}
                      className="w-full rounded-3xl text-up-black flex items-center font-semibold gap-4 p-8 transition-all duration-300 hover:text-brick"
                    >
                      <img src={link.icon} alt={link.name} className="w-[2.2rem] aspect-square" />
                      <p className="text-[1.7rem]">{link.name}</p>
                    </button>
                  ) : (
                    <Link
                      href={`/profile/${link.path}`}
                      className={`rounded-3xl flex items-center font-semibold gap-4 p-8 transition-all duration-300 ${
                        isActive ? 'text-white bg-up-green-hc [&_img]:brightness-50' : 'text-up-black'
                      }`}
                    >
                      <img src={link.icon} alt={link.name} className="w-[2.2rem] aspect-square" />
                      <p className="text-[1.7rem]">{link.name}</p>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <section className="bg-gray-90 rounded-tl-[5rem] py-20 px-32 pb-8 pr-8 w-full h-screen overflow-y-auto no-scrollbar">
        {routeElements[currentSlug] || routeElements.dashboard}
      </section>
      
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </main>
  );
}
