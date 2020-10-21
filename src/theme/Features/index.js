import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Headline from "@theme/Headline";
import styles from "./styles.module.scss";

const data = [
  {
    href: "https://xiaozhuanlan.com/topic/4286791350",
    title: <>任务与返回栈</>,
    description: (
      <>介绍 Android 不同版本任务与返回栈的行为变化，以 AMS 和 WMS 两个角度解析</>
    ),
  },
  {
    href: "https://xiaozhuanlan.com/topic/4286791350",
    title: <>进程及进程优先级</>,
    description: <>介绍 Linux 进程相关概念，解读四大组件与进程的关系</>,
  },
  {
    href: "https://xiaozhuanlan.com/topic/4286791350",
    title: <>生命周期</>,
    description: (
      <>解读 Android 的生命周期 todo</>
    ),
  },
  {
    href: "https://xiaozhuanlan.com/topic/4286791350",
    title: <>实用工具</>,
    description: (
      <>介绍 Android 开发常用的工具及其原理</>
    ),
  },
  {
    href: "https://xiaozhuanlan.com/topic/4286791350",
    title: <>状态管理</>,
    description: (
      <>介绍 Android 中的状态管理  todo</>
    ),
  },
  {
    href: "https://xiaozhuanlan.com/topic/4286791350",
    title: <>视图系统</>,
    description: (
      <>
        todo
      </>
    ),
  },
];

function Feature({ href, title, description }) {
  return (
    
    <div className={clsx("col col--4", styles.feature)}>
      <div className="card">
        <Link className="card__header" to={href}>
          <h3>{title}</h3>
        </Link>
        <div className="card__body">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

function Features() {
  return (
    <>
      {data && data.length > 0 && (
        <section id="features" className={styles.features}>
          <div className="container">
            <Headline
              category="Contents"
              title="主要内容"
              offset={1}
            />

            <div className="row">
              {data.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Features;
