import React from 'react'
import { IconContext } from "react-icons";
import { BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs";
import globalStyles from "../styles.module.scss";
import styles from "./_footer.module.scss";
const FooterSection = () => {
  return (
    <section className={styles.section}>
      <div className={globalStyles.container}>
        <div className={styles.footerWrapper}>
          <address className={styles.footerContacts}>
            <div>
              <p>
                <span className={styles.contactsTitle}>Contact</span>Me
              </p>
              <a
                className={styles.contactsLink}
                href="mailto:vlad.fominov11@gmail.com"
              >
                vlad.fominov11@gmail.com
              </a>
            </div>
            <div>
              <a className={styles.contactsLink} href="tel:+380991173197">
                (099) 117-31-97
              </a>
            </div>
          </address>

          <ul className={styles.footerList}>
            <IconContext.Provider
              value={{
                color: " #0e76a8",
                size: "1.5em",
                className: "global-class-name",
              }}
            >
              <li>
                <a
                  href="https://www.linkedin.com/in/vladyslav-fominov-ab64051a0/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsLinkedin />
                </a>
              </li>
            </IconContext.Provider>

            <IconContext.Provider
              value={{
                color: "#f09433",
                size: "1.5em",
                className: "global-class-name",
              }}
            >
              <li>
                <a
                  href="https://www.instagram.com/vladik_ja/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsInstagram />
                </a>
              </li>
            </IconContext.Provider>
            <IconContext.Provider
              value={{
                color: "#3b5998",
                size: "1.5em",
                className: "global-class-name",
              }}
            >
              <li>
                <a
                  href="https://www.facebook.com/vladyslav.fominov"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsFacebook />
                </a>
              </li>
            </IconContext.Provider>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default FooterSection;