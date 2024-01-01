import style from "./NewsLatter.module.css";

const NewsLatterComponent = () => {
  return (
    <section className={style.newsLatter}>
      <div className={style.container}>
        <h3>Subscribe to our weekly </h3>
        <h2>News Latter</h2>
        <form>
          <input
            type="email"
            placeholder="Enter your email address..."
            name="userEmail"
          />
          <button>
            <img src="/assets/images/send-icon.svg" alt="search icon" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsLatterComponent;
