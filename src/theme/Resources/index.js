import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { FaQuestion } from "react-icons/fa";
import { FiBook, FiEdit3, FiGithub } from "react-icons/fi";

import Headline from "@theme/Headline";
import styles from "./styles.module.scss";

const size = 48;
const data = [
  {
    href: "docs/faq",
    // title: <>Flywith24</>,
    icon: <FaQuestion size={size} />,
    description: [<>Flywith24</>],
  },
  {
    href: "blog",
    // title: <>Blogs</>,
    icon: <FiEdit3 size={size} />,
    description: (
      [
        <>背上 Jetpack 系列</>,
      ]
    )
  },
  {
    href: "docs",
    icon: <FiBook size={size} />,
    title: <>Projects</>,
    description: (
      [
        <>Jetpack 从 Java 到 Kotlin 无痛上车指南</>, 
        <>WrapperLiveData</>,
      ]
    ),
  },
  {
    href: "https://github.com/Flywith24",
    icon: <FiGithub size={size} />,
    title: <>Github</>,
    description: (
      [
        <>这是我的 Github 主页</>,
        <>感兴趣的小伙伴可以点一 ⭐</>,
      ]
    ),
  },
];

export default Resources;

function Resource({ href, icon, title, description }) {
  return (
    <Link className={clsx("card", styles.card)} to={href}>
      <div className="card__header">
        {icon && <div className="card__icon">{icon}</div>}
        {title && <h3>{title}</h3>}
      </div>
      {description && (
        <div className="card__body">
          {description.map((props, idx) => (<p key={idx}>{props}</p>))}
        </div>
      )}
    </Link>
  );
}

function Resources() {
  return (
    <>
      {data && data.length > 0 && (
        <section id="resouces" className={styles.resources}>
          <div className="container">
            <Headline
              category="About"
              title="关于作者"
              offset={1}
            />

            <div className="row">
              {data[0] && data[1] && (
                <div className={clsx("col", styles.resource)}>
                  <Resource {...data[0]} />
                  <Resource {...data[1]} />
                </div>
              )}

              {data[2] && (
                <div className={clsx("col", styles.resource)}>
                  <Resource {...data[2]} />
                </div>
              )}

              {data[3] && (
                <div className={clsx("col", styles.resource)}>
                  <Resource {...data[3]} />
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
