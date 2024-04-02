import { useState } from "react";
import "./App.css";
import styles from "./app.module.scss";
import { useEffect } from "react";

function App() {
  const PHOTO_SRC = {};
  PHOTO_SRC["logo"] = "../public/images/Logo.png";
  PHOTO_SRC["promotion"] = "../public/images/other/promotion.svg";
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
  PHOTO_SRC["aboutCity"] = [
    "../public/images/aboutCity/1.png",
    "../public/images/aboutCity/2.jpg",
    "../public/images/aboutCity/3.png",
  ];
  PHOTO_SRC["other"] = [
    "../public/images/other/bg1.png",
    "../public/images/other/bg2.png",
    "../public/images/other/blue line.png",
    "../public/images/other/yellow line.png",
    "../public/images/other/xbox.png",
    "../public/images/other/ps.png",
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
        <div className={styles.topBlock}>
          <img
            id="header-bg"
            className={styles.topBlockBg}
            src={PHOTO_SRC["header-photos"][actualHeaderPhoto]}
          />
          <div className={styles.topBlockContent}>
            <div className={styles.topBlockContentTop}>
              <img
                src={PHOTO_SRC["logo"]}
                className={styles.topBlockContentTop__logo}
              />
              <ol className={styles.topBlockContentTopMediaList}>
                <a
                  href="#"
                  className={styles.topBlockContentTopMediaList__media}
                >
                  <img src={PHOTO_SRC["fb"]} />
                </a>
                <a
                  href="#"
                  className={styles.topBlockContentTopMediaList__media}
                >
                  <img src={PHOTO_SRC["inst"]} />
                </a>
                <a
                  href="#"
                  className={styles.topBlockContentTopMediaList__media}
                >
                  <img src={PHOTO_SRC["twich"]} />
                </a>
                <a
                  href="#"
                  className={styles.topBlockContentTopMediaList__media}
                >
                  <img src={PHOTO_SRC["twitter"]} />
                </a>
                <a
                  href="#"
                  className={styles.topBlockContentTopMediaList__media}
                >
                  <img src={PHOTO_SRC["youtube"]} />
                </a>
              </ol>
            </div>
            <div className={styles.topBlockBottom}>
              <h2 className={styles.topBlockBottom__title}>
                Доступно на всех платформах
              </h2>
              <div className={styles.topBlockBottom__text}>Узнать больше</div>
            </div>
          </div>
        </div>
        <div className={styles.aboutCity}>
          <div className={styles.aboutCityTextbox}>
            <div className={styles.aboutCityTextbox__title}>
              Найт-Сити изменит тебя навсегда!
            </div>
            <div className={styles.aboutCityTextbox__text}>
              <span className={styles.aboutCityTextbox__textBlue}>
                Cyberpunk 2077
              </span>{" "}
              — приключенческая ролевая игра, действие которой происходит в
              мегаполисе Найт-Сити, где власть, роскошь и модификации тела
              ценятся выше всего. Ты играешь за V, наёмника в поисках
              устройства, позволяющего обрести бессмертие. Ты сможешь менять
              киберимпланты, навыки и стиль игры своего персонажа, исследуя
              открытый мир, где твои поступки влияют на ход сюжета и всё, что
              тебя окружает.
            </div>
          </div>
          <div className={styles.aboutCityPhotobox}>
            <div className={styles.aboutCityPhotoboxTop}>
              <img
                className={styles.aboutCityPhotoboxTop__img}
                src={PHOTO_SRC["aboutCity"][0]}
              />
              <img
                className={styles.aboutCityPhotoboxTop__img}
                src={PHOTO_SRC["aboutCity"][2]}
              />
            </div>
            <img
              className={styles.aboutCityPhotobox__img}
              src={PHOTO_SRC["aboutCity"][1]}
            />
          </div>
        </div>
        <div className={styles.blockWithForm}>
          <img
            className={styles.blockWithFormContent__startBg}
            src={PHOTO_SRC["other"][0]}
          />
          <div className={styles.blockWithFormContent}>
            <div className={styles.blockWithFormContentTextbox}>
              <div className={styles.blockWithFormContentTextboxTop}>
                <img
                  className={styles.blockWithFormContentTextboxTop__photo}
                  src={PHOTO_SRC["promotion"]}
                />
                <h2 className={styles.blockWithFormContentTextboxTop__title}>
                  Играй и выигрывай!
                </h2>
              </div>
              <h2 className={styles.blockWithFormContentTextbox__text}>
                Играй в{" "}
                <span className={styles.blockWithFormContentTextbox__textBlue}>
                  Cyberpunk 2077
                </span>{" "}
                и получи возможность выиграть консоль{" "}
                <span className={styles.blockWithFormContentTextbox__textBlue}>
                  Xbox Series X
                </span>{" "}
                или{" "}
                <span className={styles.blockWithFormContentTextbox__textBlue}>
                  Sony PlayStation 5!
                </span>{" "}
                Заполни форму ниже и приложи скриншот о покупке игры. Итоги
                розыгрыша будут подведены 1 февраля. Удачи! ;{")"}
              </h2>
            </div>
            <div className={styles.blockWithFormContentContentbox}>
              <div className={styles.blockWithFormContentContentboxWithForm}>
                <input
                  placeholder="Как тебя зовут?"
                  className={
                    styles.blockWithFormContentContentboxWithForm__input
                  }
                ></input>
                <input
                  placeholder="Твой e-mail"
                  className={
                    styles.blockWithFormContentContentboxWithForm__input
                  }
                ></input>
                <div
                  className={styles.blockWithFormContentContentboxWithFormFile}
                >
                  <div
                    className={
                      styles.blockWithFormContentContentboxWithFormFileTextbox
                    }
                  >
                    <h2
                      className={
                        styles.blockWithFormContentContentboxWithFormFileTextbox__textMain
                      }
                    >
                      Прикрепить скриншот
                    </h2>
                    <h2
                      className={
                        styles.blockWithFormContentContentboxWithFormFileTextbox__text
                      }
                    >
                      .png / .jpg / .pdf
                    </h2>
                    <input
                      type="file"
                      className={
                        styles.blockWithFormContentContentboxWithFormFile__inputFile
                      }
                    ></input>
                  </div>
                </div>
                <button
                  className={
                    styles.blockWithFormContentContentboxWithForm__button
                  }
                >
                  Отправить
                </button>
                <div
                  className={
                    styles.blockWithFormContentContentboxWithFormAccept
                  }
                >
                  <input
                    type="checkbox"
                    className={
                      styles.blockWithFormContentContentboxWithFormAccept__checkbox
                    }
                  ></input>
                  <h2
                    className={
                      styles.blockWithFormContentContentboxWithFormAccept__text
                    }
                  >
                    Согласен на обработку персональных данных
                  </h2>
                </div>
              </div>
              <div className={styles.blockWithFormContentContentboxWithPhoto}>
                <div
                  className={
                    styles.blockWithFormContentContentboxWithPhotoBlock
                  }
                >
                  <img
                    className={
                      styles.blockWithFormContentContentboxWithPhotoBlock__img
                    }
                    src={PHOTO_SRC["other"][3]}
                  />
                  <img
                    className={
                      styles.blockWithFormContentContentboxWithPhotoBlock__img
                    }
                    src={PHOTO_SRC["other"][4]}
                  />
                </div>
                <div
                  className={
                    styles.blockWithFormContentContentboxWithPhotoBlock
                  }
                >
                  <img
                    className={
                      styles.blockWithFormContentContentboxWithPhotoBlock__img
                    }
                    src={PHOTO_SRC["other"][2]}
                  />
                  <img
                    className={
                      styles.blockWithFormContentContentboxWithPhotoBlock__img
                    }
                    src={PHOTO_SRC["other"][5]}
                  />
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.blockWithFormContent__endBg}
            src={PHOTO_SRC["other"][1]}
          />
        </div>
      </div>
    </>
  );
}

export default App;
