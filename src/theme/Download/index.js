import React from "react";
import clsx from "clsx";
import filesize from "filesize";
import useSWR from "swr";
import Link from "@docusaurus/Link";
import { FiGithub, FiPackage } from "react-icons/fi";
import { DiApple, DiLinux, DiWindows } from "react-icons/di";

import Headline from "@theme/Headline";
import styles from "./styles.module.scss";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function useLatestRelease() {
  const { data, error } = useSWR(
    `https://api.github.com/repos/runletapp/runlet/releases/latest`,
    fetcher
  );

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}

function icon(type) {
  const size = 24;

  switch (type) {
    case "application/x-apple-diskimage":
      return <DiApple size={size} />;
    case "application/x-msdos-program":
      return <DiWindows size={size} />;
    case "application/x-debian-package":
      return <DiLinux size={size} />;
    default:
      return <FiPackage size={size} />;
  }
}

function Download() {
  // const { data } = useLatestRelease();
  // const size = 36;

  return (
    <section id="download" className={styles.download}>
      <div className="container">
        <Headline
          category="examples"
          title="搭配示例"
          offset={1}
        />

        <div className="row">
          <div className="col col--5 col--offset-1">
            <p>
              几乎每篇文章都有相关的相互独立的示例应用，以帮助您更好地理解专栏内容
            </p>

            <Link
              className={clsx(
                "button button--primary button--lg",
                styles.button
              )}
              href="https://github.com/Flywith24/Android-Detail"
            >
              <FiGithub size={24} /> Android Detail
            </Link>

            {/* <div className={styles.platforms}>
              <h3>语言</h3>
              <div>
                <DiApple size={size} />
                <DiWindows size={size} />
                <DiLinux size={size} />
              </div>
            </div> */}
          </div>
          <div className="col col--5">
            <div className={styles.assets}>
              <div className={styles.asset} key={1}>
                <div>
                  <a href={"https://github.com/Flywith24/Android-Detail/tree/master/activity-task"} target="_blank">
                      {"任务栈与返回栈配套示例"}
                  </a>
                </div>
                <div className={styles.size}>{"activity-task"}</div>
              </div>

              <div className={styles.asset} key={2}>
                <div>
                  <a href={"https://github.com/Flywith24/Android-Detail/tree/master/window"} target="_blank">
                      {"Window 配套示例"}
                  </a>
                </div>
                <div className={styles.size}>{"window"}</div>
              </div>

              <div className={styles.asset} key={3}>
                <div>
                  <a href={"https://github.com/Flywith24/Android-Detail/tree/master/process"} target="_blank">
                      {"进程篇 配套示例"}
                  </a>
                </div>
                <div className={styles.size}>{"process"}</div>
              </div>

              <div className={styles.asset} key={4}>
                <div>
                  <a href={"https://github.com/Flywith24/Android-Detail/tree/master/activity-lifecycle"} target="_blank">
                      {"生命周期 配套示例"}
                  </a>
                </div>
                <div className={styles.size}>{"activity-lifecycle"}</div>
              </div>

              <div className={styles.asset} key={5}>
                <div>
                  <a href={"https://github.com/Flywith24/Android-Detail/tree/master/activity-state"} target="_blank">
                      {"状态管理 配套示例"}
                  </a>
                </div>
                <div className={styles.size}>{"activity-state"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Download;
