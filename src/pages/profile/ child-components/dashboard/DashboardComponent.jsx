import style from "./Dashboard.module.css";

const DashboardComponent = () => {
  return (
    <section className={style.dashboardSection}>
      <h2 className={style.title}>Dashboard</h2>
      <div className={style.dashboardCards}>
        {/*TOTAL VISITOR*/}
        <div className={style.dashCardContainer}>
          <div className={style.dashCard}>
            <div>
              <h5>1.7k+</h5>
              <p>Total Visitor</p>
            </div>
            <div className={style.dashCardImg}>
              <img
                src="https://jobi-nextjs.vercel.app/_next/static/media/icon_13.d248bf19.svg"
                alt="Profile"
              />
            </div>
          </div>
        </div>
        {/*SHORT LISTED*/}
        <div className={style.dashCardContainer}>
          <div className={style.dashCard}>
            <div>
              <h5>03</h5>
              <p>Shortlisted</p>
            </div>
            <div className={style.dashCardImg}>
              <img
                src="https://jobi-nextjs.vercel.app/_next/static/media/icon_12.7f76845e.svg"
                alt="bookmark icon"
              />
            </div>
          </div>
        </div>
        {/*VIES*/}
        <div className={style.dashCardContainer}>
          <div className={style.dashCard}>
            <div>
              <h5>2.1k</h5>
              <p>Views</p>
            </div>
            <div className={style.dashCardImg}>
              <img
                src="https://jobi-nextjs.vercel.app/_next/static/media/icon_14.5854971b.svg"
                alt="eye icon"
              />
            </div>
          </div>
        </div>
        {/*APPLIED JOBS*/}
        <div className={style.dashCardContainer}>
          <div className={style.dashCard}>
            <div>
              <h5>07</h5>
              <p>Applied Job</p>
            </div>
            <div className={style.dashCardImg}>
              <img
                src="https://jobi-nextjs.vercel.app/_next/static/media/icon_15.0025ba7e.svg"
                alt="edit icon"
              />
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className={style.profileViewsCard}>
          <h3>Profile Views</h3>
          <hr />
          <img
            src="https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmain-graph.52916fa8.png&w=640&q=75"
            alt="graph png"
          />
        </div>
      </section>
    </section>
  );
};

export default DashboardComponent;
