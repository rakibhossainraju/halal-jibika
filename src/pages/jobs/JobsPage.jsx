import style from "./JobsPage.module.css";
import JobCardComponent from "../../components/job-card/JobCardComponent.jsx";
import JobPortal from "../../components/job-portal/JobPortal.jsx";

const JobsPage = () => {
  return (
    <main>
      <section className={style.jobsHeaderSection}>
        <div>
          <h2>Job Listing</h2>
          <p>Find the job that suits your niche </p>
        </div>
        <img src="/assets/images/jobs.svg" alt="Jobs svg" />
      </section>
      <hr style={{ marginTop: 0 }} className={style.divider} />
      <section id="jobs-section" className={style.cardsContainer}>
        <h4>All jobs</h4>
        <JobCardComponent />
        <JobCardComponent />
        <JobCardComponent />
        <JobCardComponent />
      </section>
      <hr className={style.divider} />
      <JobPortal />
    </main>
  );
};

export default JobsPage;
