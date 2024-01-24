import { Link, NavLink, Outlet } from "react-router-dom";
import DashboardComponent from "./ child-components/dashboard/DashboardComponent.jsx";
import { signOut } from "firebase/auth";
import { auth } from "../../utility/firebase.js";
import style from "./ProfilePage.module.css";

const ProfilePage = ({ user }) => {
  return (
    <main className={style.profilePage}>
      <section className={style.sideBarSection}>
        <div className={style.profileContainer}>
          <img
            src={
              user?.photoURL ? user.photoURL : "https://picsum.photos/200/300"
            }
            alt="profile picture"
          />
          <h3>{user?.displayName ? user.displayName : "User Name"}</h3>
        </div>
        <div className={style.sideNavigationContainer}>
          <ul>
            {sidebarLinks.map((link) => (
              <li key={link.path}>
                {link.path === "logout" ? (
                  <Link
                    to="/"
                    className={style.logout}
                    onClick={async () => {
                      await signOut(auth);
                      localStorage.setItem("isLoggedIn", "false");
                    }}
                  >
                    <img src={link.icon} alt={link.name} />
                    <p>{link.name}</p>
                  </Link>
                ) : (
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? style.activeLink : ""
                    }
                    to={"/profile/" + link.path}
                  >
                    <img src={link.icon} alt={link.name} />
                    <p>{link.name}</p>
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className={style.dynamicSection}>
        <Outlet />
      </section>
    </main>
  );
};

export default ProfilePage;

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

const routeElements = {
  dashboard: <DashboardComponent />,
  "my-profile": "This page is under construction",
  resume: "This page is under construction",
  messages: "This page is under construction",
  "job-alert": "This page is under construction",
  "saved-job": "This page is under construction",
  "account-settings": "This page is under construction",
  delete: "This page is under construction",
};

export const dynamicRoutes = sidebarLinks.map((link) => {
  return {
    path: `/profile/${link.path}`,
    element: <div key={link.path}>{routeElements[link.path]}</div>,
  };
});
