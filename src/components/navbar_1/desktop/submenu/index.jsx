import { Link } from "react-router-dom";
import styles from "./sub.menu.module.css";

export const SubMenuItem = ({ subMenuList }) => {
  return (
    <div className={styles.subMenuWrapper}>
      <div className={styles.subMenuWrapperItem}>
        {subMenuList.map((list) => {
          return (
            <div className={styles.container}>
              {list["container"].map((data) => {
                return (
                  <div className={styles.name}>
                    <Link to={data.path}>{data.label}</Link>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
