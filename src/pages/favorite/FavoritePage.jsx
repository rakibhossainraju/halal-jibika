import JobCardComponent from "../../components/job-card/JobCardComponent.jsx";
import style from "./FavoritePage.module.css";

const FavoritePage = () => {
  return (
    <main>
      <section className={style.wishListTitleSection}>
        <h3>Wishlist</h3>
        {/*<h4>Find your desire company and get your dream job</h4>*/}
        <h4>You Wishlist is empty</h4>
      </section>
      <section className={style.wishListContainer}>
        <img
          className={style.emptyListImg}
          src="/assets/images/empty.svg"
          alt="empty svg"
        />
        {/*<JobCardComponent />*/}
        {/*<JobCardComponent />*/}
        {/*<JobCardComponent />*/}
        {/*<JobCardComponent />*/}
      </section>
    </main>
  );
};

export default FavoritePage;
