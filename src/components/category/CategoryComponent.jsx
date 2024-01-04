import style from "./Category.module.css";

const CategoryComponent = () => {
  return (
    <section className={style.categoriesSection}>
      <div className={style.categoriesTitleContainer}>
        <h2>Most Demanding Categories.</h2>
        <div>
          <p>
            Together with useful notifications, collaboration, insights, and
            improvement tip lorem etc.
          </p>
          <a href="#">Explore all fields {">"}</a>
        </div>
      </div>
      <div className={style.categoriesCards}>
        {categoriesDetails.map(({ name, icon, jobs }) => (
          <div key={name} className={style.categoryCard}>
            <img src={icon} alt={name} />
            <h4>{name}</h4>
            <p>{jobs}k+ Jobs</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryComponent;

const categoriesDetails = [
  {
    name: "UI/UX Design",
    jobs: 12,
    icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_63.772e8f20.svg",
  },
  {
    name: "Development",
    jobs: 7,
    icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_64.35fa6b78.svg",
  },
  {
    name: "Telemarketing",
    jobs: 310,
    icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_65.718cba66.svg",
  },
  {
    name: "Marketing",
    jobs: 420,
    icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_68.41869509.svg",
  },
  {
    name: "Editing",
    jobs: 3,
    icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_66.64f36c76.svg",
  },
  {
    name: "Accounting",
    jobs: 150,
    icon: "https://jobi-nextjs.vercel.app/_next/static/media/icon_67.569964fa.svg",
  },
];
