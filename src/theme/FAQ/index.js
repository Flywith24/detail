import React from "react";
import Link from "@docusaurus/Link";

import styles from "./styles.module.scss";

const data = [
  {
    title: <>重学安卓</>,
    description: (
      <>
       xxxx
       xxxxx
       xxxx
      </>
    ),
  },
  {
    title: <>Android Detail</>,
    description: (
      <>
        xxxx
        xxxxx
        xxxx
      </>
    ),
  },
  {
    title: <>命名由来</>,
    description: (
      <>
        <Link to="https://flywith24.gitee.io/">链接</Link>
      </>
    ),
  },
  {
    title: <>内容计划</>,
    description: (
      <>
        xxxx
        xxxxx
        xxxx
      </>
    ),
  },
];

function Question({ title, description }) {
  return (
    <div className={styles.question}>
      <h3 className={styles.title}>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function FAQ() {
  return (
    <section id="faq" className={styles.faq}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            {data[0] && <Question {...data[0]} />}
            {data[1] && <Question {...data[1]} />}
          </div>

          <div className="col col--6">
            {data[2] && <Question {...data[2]} />}
            {data[3] && <Question {...data[3]} />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
