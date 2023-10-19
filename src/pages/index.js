import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Eddy Docs</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p>
          O Eddy é um bot incrível para o Discord que oferece funcionalidades
          tanto de utilidade quanto de diversão. Com o Eddy, os usuários podem
          se divertir e também aprender coisas novas, tornando o servidor ainda
          mais envolvente.
        </p>
        <a target="_blank" href="https:\/\/eddybot.netlify.app/convite">
          <button>Me adicione</button>
        </a>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description="Documentação do Eddy bot">
      <HomepageHeader />
    </Layout>
  );
}
