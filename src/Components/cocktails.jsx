import React from "react";
import { cocktailLists } from "../Constant";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

const Cocktails = () => {
  useGSAP(() => {
    const popularSplith2 = new SplitText(".popular h2", { type: "lines" });
    const lovedCocktailsh2 = new SplitText(".loved h2", { type: "lines" });

    gsap.from(popularSplith2.lines, {
      xPercent: 100,
      stagger: 0.05,
      duration: 2,
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 80%",
      },
      ease: "expo.out",
    });
    gsap.from(lovedCocktailsh2.lines, {
      xPercent: 100,
      stagger: 0.05,
      duration: 2,
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 80%",
      },
      ease: "expo.out",
    });
    gsap.from(".popular li", {
      opacity: 0,
      y: 50,
      stagger: 0.15,
      duration: 0.8,
      delay: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".popular ul",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.from(".loved li", {
      opacity: 0,
      y: 50,
      stagger: 0.15,
      duration: 0.8,
      delay: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".popular ul",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
      },
    });

    tl.from("#c-left-leaf", {
      x: -100,
      y: 100,
      duration: 1,
    }).from("#c-right-leaf", {
      x: 100,
      y: 100,
      duration: 1,
    });
  });
  return (
    <>
      <section id="cocktails" className="noisy h-screen">
        <img src="/images/cocktail-left-leaf.png" alt="" id="c-left-leaf" />
        <img src="/images/cocktail-right-leaf.png" alt="" id="c-right-leaf" />
        <div className="list">
          <div className="popular">
            <h2>Popular Cocktails</h2>
            <ul>
              {cocktailLists.map((drink) => {
                return (
                  <li key={drink.name}>
                    <div className="md:me-28">
                      <h3>{drink.name}</h3>
                      <p>
                        {drink.country} | {drink.detail}{" "}
                      </p>
                    </div>
                    <span>{drink.price}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="loved">
            <h2>Loved Cocktails</h2>
            <ul>
              {cocktailLists.map((drink) => {
                return (
                  <li key={drink.name}>
                    <div className="md:me-28">
                      <h3>{drink.name}</h3>
                      <p>
                        {drink.country} | {drink.detail}{" "}
                      </p>
                    </div>
                    <span>{drink.price}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cocktails;
