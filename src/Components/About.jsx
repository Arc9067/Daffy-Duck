import React from "react";

const About = () => {
  return (
    <section className="py-16 ">
      <div className="container relative flex flex-col gap-9 justify-center items-center">
        <article className="flex items-center justify-center flex-col text-center gap-5">
          <h1 className="text-white text-7xl font-special">About Daffy Duck</h1>
          <div className="text-center text-white text-2xl font-normal max-w-2xl">
            Introducing "Daffy Duck Coin" - the wildest crypto project in town!
            With Daffy Duck managing your finances on Ethereum, get ready to
            quack your way to financial freedom! Hold "DFFY" tokens for a voice
            in crazy decisions, from wild DeFi features to moon-bound ACME
            rockets. Our top-notch security ensures no Elmer Fudds mess with us.
            Join our zany adventure and make crypto history - the pot of gold
            awaits in the cryptoverse! Let's quack it up on Ethereum! 🚀💰🦆
          </div>
          <a
            href=""
            className=" h-[60px] px-8 py-4 bg-[#F15D56] rounded shadow justify-center items-center gap-2.5 inline-flex"
          >
            <div className="text-white text-xl font-special leading-7 tracking-tight">
              BUY NOW
            </div>
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
