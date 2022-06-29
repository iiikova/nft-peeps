import React from "react";
import "../../App.scss";

function Footer() {
  return (
    <section>
      <div className="container__2 ">
        <div className=" footer">
          <div className="footer__header">
            <h2>Follow us on</h2>
            <p>Navigation</p>
          </div>
          <br />
          <hr />
          <br />
          <div className={"footer__navigator"}>
            <div className={"footer__social"}>
              <p>Discord</p>
              <p>Twitter</p>
              <p>Instagram</p>
              <p>Facebook</p>
            </div>
            <div className={"footer__nav"}>
              <p>Home</p>
              <p>Style Guide</p>
              <p>Licenses</p>
              <p>Changelog</p>
            </div>
          </div>
          <br />
          <hr />
          <br />
          <div className={"footer__dev"}>
            <p>develop by Ikova</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
