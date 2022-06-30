import React from "react";
import style from "./Footer.module.sass";

function Footer() {
  return (
    <section>
      <div className={style.footer}>
        <div className={style.container}>
          <div className={style.footer__header}>
            <h1>Follow us on</h1>
            <h4>Navigation</h4>
          </div>

          <div className={style.footer__middle}>
            <div className={style.footer__social}>
              <p>Discord</p>
              <p>Twitter</p>
              <p>Instagram</p>
              <p>Facebook</p>
            </div>
            <div className={style.footer__nav}>
              <p>Home</p>
              <p>Style Guide</p>
              <p>Licenses</p>
              <p>Changelog</p>
            </div>
          </div>

          <div className={style.footer__bottom}>
            <p>
              develop by <b>Ikova</b>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
