'use client';

import React from 'react';
import { Link, useRouter } from '@router/customized';
import { authClient } from '@/lib/auth-client';
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

function ProfileContent({ slug }: { slug: string }) {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const user = session?.user;

  return (
    <main className="flex mt-[1rem]">
      <section className="w-[35rem] h-[90vh] overflow-y-auto no-scrollbar">
        <div className="flex flex-col items-center justify-center gap-[1.5rem] my-[3rem] mb-[4rem]">
          <img
            src={user?.image || "https://picsum.photos/200/300"}
            alt="profile picture"
            className="rounded-full w-[8rem] aspect-square"
          />
          <h3 className="text-[#001e00] text-[2.5rem] font-semibold">
            {user?.name || "User Name"}
          </h3>
        </div>
        <div className="side-navigation">
          <ul>
            {sidebarLinks.map((link) => {
              const isLogout = link.path === "logout";
              const isActive = !isLogout && slug === link.path;

              return (
                <li key={link.path} className="mx-auto mb-[1rem] max-w-[22rem]">
                  {isLogout ? (
                      <button
                        onClick={async () => {
                          await authClient.signOut();
                          router.push("/");
                        }}
                      className="w-full rounded-[1.5rem] text-[#001e00] flex items-center font-semibold gap-[1rem] p-[2rem] transition-all duration-300 hover:text-[#9b211b]"
                    >
                      <img src={link.icon} alt={link.name} className="w-[2.2rem] aspect-square" />
                      <p className="text-[1.7rem]">{link.name}</p>
                    </button>
                  ) : (
                    <Link
                      href={`/profile/${link.path}`}
                      className={`rounded-[1.5rem] flex items-center font-semibold gap-[1rem] p-[2rem] transition-all duration-300 ${
                        isActive ? 'text-white bg-[#73d016] [&_img]:brightness-50' : 'text-[#001e00]'
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
      <section className="bg-[#f2f7f2] rounded-tl-[5rem] py-[5rem] px-[8rem] pb-[2rem] pr-[2rem] w-full h-[100vh] overflow-y-auto no-scrollbar">
        {routeElements[slug] || routeElements.dashboard}
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

export default async function ProfilePage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const resolvedParams = await params;
  const currentSlug = resolvedParams.slug?.[0] || 'dashboard';

  return <ProfileContent slug={currentSlug} />;
}
