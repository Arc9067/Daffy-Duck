import React from "react";

const About = () => {
  return (
    <section className="py-16 ">
      <div className="container relative flex flex-col gap-9 justify-center items-center">
        <article className="flex items-center justify-center flex-col text-center gap-5">
          <h1 className="text-white text-7xl font-special">About Daffy Duck</h1>
          <div className="text-center text-white text-2xl font-normal max-w-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            repellat facilis, quaerat ducimus sequi, fuga quasi quam,
            voluptatibus ipsam atque necessitatibus quia distinctio corporis
            impedit reiciendis maiores libero. Voluptate, hic accusamus!
            Corrupti, quibusdam sunt, sint ullam quam vel numquam unde expedita
            facilis quisquam veniam ut, eveniet officia similique at harum!
          </div>
          <a
            href=""
            className="w-[173px] h-[60px] px-8 py-4 bg-[#F15D56] rounded shadow justify-center items-center gap-2.5 inline-flex"
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
