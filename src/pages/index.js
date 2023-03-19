import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
// import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title"> {"Eddy Docs"} </h1>{" "}
        <p className="hero__subtitle"> {siteConfig.tagline} </p>{" "}
        <div className={styles.buttons}></div>{" "}
      </div>{" "}
	  <div>
	  <p>Eddy tem funções de diversão, para ajudar na interação com os membros. também possui funções de utilidades, como o /lembrete, para te ajudar a lembrar de algo importante.</p>
<p>Eddy foi criado com o intuito de te divertir e te ajudar em algumas tarefas, como: ver a letra de uma música, traduzir um texto para outra língua e etc.</p>
	  </div>
	  
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Documentação do Eddy bot <head />"
    >
      <HomepageHeader />
      
    </Layout>
  );
}
