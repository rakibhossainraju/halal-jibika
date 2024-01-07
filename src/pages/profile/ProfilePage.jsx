import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../utility/firebase.js";

const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>I am Profile Page Component</h1>
      <button
        onClick={async () => {
          await signOut(auth);
          localStorage.setItem("isLoggedIn", "false");
          navigate("/auth");
        }}
      >
        Log out
      </button>
    </>
  );
};

export default ProfilePage;
