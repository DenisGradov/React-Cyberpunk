import { useState } from "react";
import "./App.css";
import styles from "./app.module.scss";
import { useEffect } from "react";

function App() {
  const PHOTO_SRC = {};
  PHOTO_SRC["logo"] = "../public/images/Logo.png";
  PHOTO_SRC["fb"] = "../public/images/icons/fb.png";
  PHOTO_SRC["inst"] = "../public/images/icons/inst.svg";
  PHOTO_SRC["twich"] = "../public/images/icons/twich.svg";
  PHOTO_SRC["twitter"] = "../public/images/icons/twitter.svg";
  PHOTO_SRC["youtube"] = "../public/images/icons/youtube.svg";
  PHOTO_SRC["header-photos"] = [
    "../public/images/header-photos/pc/1.jpg",
    "../public/images/header-photos/pc/2.jpg",
    "../public/images/header-photos/pc/3.jpg",
  ];

  const [actualHeaderPhoto, setActualHeaderPhoto] = useState(1);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActualHeaderPhoto((prevPhoto) => {
        return prevPhoto + 1 == PHOTO_SRC["header-photos"].length
          ? 0
          : prevPhoto + 1;
      });
    }, 5000);
    return () => clearInterval(intervalId);
  });

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <img
            id="header-bg"
            className={styles.header__background}
            src={PHOTO_SRC["header-photos"][actualHeaderPhoto]}
          />
          <div className={styles.headerTop}>
            <div className={styles.headerTopLeft}>
              <img
                src={PHOTO_SRC["logo"]}
                className={styles.headerTopLeft__logo}
              />
            </div>

            <div className={styles.headerTopRight}>
              <ol className={styles.headerTopRightMediaList}>
                <a href="#" className={styles.headerTopRightMediaList__media}>
                  <img src={PHOTO_SRC["fb"]} />
                </a>
                <a href="#" className={styles.headerTopRightMediaList__media}>
                  <img src={PHOTO_SRC["inst"]} />
                </a>
                <a href="#" className={styles.headerTopRightMediaList__media}>
                  <img src={PHOTO_SRC["twich"]} />
                </a>
                <a href="#" className={styles.headerTopRightMediaList__media}>
                  <img src={PHOTO_SRC["twitter"]} />
                </a>
                <a href="#" className={styles.headerTopRightMediaList__media}>
                  <img src={PHOTO_SRC["youtube"]} />
                </a>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
