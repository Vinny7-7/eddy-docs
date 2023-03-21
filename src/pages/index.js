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
        <h1 className="hero__title">{"Eddy Docs"}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p>
          Eddy é um bot incrível para o Discord que oferece funções tanto de
          utilidade quanto de diversão. Com esse bot, os usuários podem se
          divertir e também aprender coisas novas, tornando o servidor ainda
          mais envolvente.
        </p>
       <!-- <p>
          Entre as funções de utilidade oferecidas pelo Eddy, estão a
          possibilidade de ver o clima em uma cidade específica, o que é muito
          útil para quem precisa se planejar antes de sair de casa. Além disso,
          o bot permite aos usuários ver o significado de uma palavra, o que é
          ótimo para quem está estudando um novo idioma ou apenas quer aprender
          coisas novas.
        </p>
        <p>
          No que diz respeito às funções de diversão, Eddy não decepciona. O
          bot permite que os usuários girem um dado virtualmente, ideal para quem
          quer jogar algum jogo de tabuleiro ou RPG online. Em resumo, Eddy é um
          bot incrível para o Discord que oferece uma variedade de funções úteis
          e divertidas.
        </p> -->
        <a target="_blank" href="https://eddybot.ml/convite">
          <button>Me adicione</button>
        </a>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={`${siteConfig.title}`} description="Documentação do Eddy bot">
      <HomepageHeader />
    </Layout>
  );
}
