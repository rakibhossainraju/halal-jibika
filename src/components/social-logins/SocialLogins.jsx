import style from "./SocialLogins.module.css";
import { auth } from "../../utility/firebase.js";
import {
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

const SocialLogins = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithFacebook] = useSignInWithFacebook(auth);

  return (
    <div className={style.googleAuthContainer}>
      <button onClick={() => signInWithGoogle()}>
        <img src="/assets/images/googleLogo.svg" alt="google logo" />
      </button>
      <button onClick={() => signInWithFacebook()}>
        <img src="/assets/images/facebookLogo.svg" alt="" />
      </button>
      <button>
        <img src="/assets/images/githubLogo.svg" alt="" />
      </button>
    </div>
  );
};

export default SocialLogins;
