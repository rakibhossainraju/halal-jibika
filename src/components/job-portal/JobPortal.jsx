import ButtonComponent from "../button/ButtonComponent.jsx";
import style from "./JobPortal.module.css";
import { useNavigate } from "react-router-dom";

const JobPortal = () => {
  const navigate = useNavigate();

  return (
    <section className={style.portalSection}>
      <div>
        <h3>Most complete job portal.</h3>
        <p>Signup and start find your job or talents.</p>
      </div>
      <div className={style.btnContainer}>
        <ButtonComponent
          onClick={() => navigate("/jobs")}
          className={style.outlinedBtn}
        >
          Looking for a job?
        </ButtonComponent>
        <ButtonComponent className={style.filledBtn}>
          Post a job
        </ButtonComponent>
      </div>
    </section>
  );
};

export default JobPortal;
