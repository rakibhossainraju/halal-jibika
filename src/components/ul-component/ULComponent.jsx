import { Link } from "react-router-dom";
import style from "./UL.module.css";

const UlComponent = ({ title, lists = [] }) => {
  return (
    <div className={style.ulContainer}>
      <h5>{title}</h5>
      <ul>
        {lists.map((list) => (
          <li key={list.name}>
            <Link to={list.path}>{list.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UlComponent;
