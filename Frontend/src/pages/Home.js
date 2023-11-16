import React from "react";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <main>
      <section className="banner">
        <article className="banner__content">
          <h1 className="banner__subtitle">Welcome to Argent Bank!</h1>
          <br></br>
          <p className="banner__subtitle">No fees.</p>
          <p className="banner__subtitle">No minimum deposit.</p>
          <p className="banner__subtitle">High interest rates.</p>
          <br></br>
          <p className="banner__text">
            Open a savings account with Argent Bank today!
          </p>
        </article>
      </section>
      <Banner />
    </main>
  );
};

export default Home;
