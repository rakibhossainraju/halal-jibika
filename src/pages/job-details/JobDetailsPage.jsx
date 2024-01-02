import style from "./JobDetailsPage.module.css";

const JobDetailsPage = () => {
  return (
    <main>
      <section className={style.jobDetailsHeaderSection}>
        <h3>Job Details</h3>
        <h5>Here will be your company job details & requirements</h5>
      </section>
      <section className={style.jobDetailsSection}>
        <div>
          <div>
            <p className={style.jobPostedDate}>
              13 October 2024 by <span>Deloitte</span>
            </p>
            <h4 className={style.jobPostTitle}>
              Learning and Development Manager
            </h4>
            <a href="#">Facebook twitter </a>
          </div>
          <div className={style.overview}>
            <h5>Overview</h5>
            <p>
              When team members told us they needed more flexibility around
              where and how they worked, we acted, creating two options to
              accommodate two different styles of work. One non-negotiable
              principle along the way? We had to retain our deep culture of
              collaboration, both among ourselves and with our clients.
              Introducing Work From Near and Work From Anywhere at WillowTree.
              Please indicate which location(s) you're interested.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default JobDetailsPage;
