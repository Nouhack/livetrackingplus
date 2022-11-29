import Head from "next/head";
import { Component } from "react";
import { attributes, react as HomeContent } from "../content/home.md";

export default class Home extends Component {
  render() {
    let { title, body, fonctionnalites } = attributes;
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <article>
          <h1>{title}</h1>
          <HomeContent />
          <h1>{body}</h1>
          <ul>
            {fonctionnalites.map((cat, k) => (
              <li key={k}>
                <h2>{cat.name}</h2>
                <p>{cat.description}</p>
                <img src={cat.thumbnail} alt="hope" />
              </li>
            ))}
          </ul>
        </article>
      </>
    );
  }
}
