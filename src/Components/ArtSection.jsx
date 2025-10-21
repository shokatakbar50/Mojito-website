import React from "react";
import { featureLists, goodLists } from "../Constant";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const ArtSection = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const start = isMobile ? "top 20%" : "top top";
    const maskedTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start,
        end: "bottom center",
        scrub: 1.5,
        pin: true,
      },
    });

    maskedTimeline.to(".will-fade", {
      opacity: 0,
      stagger: 0.2,
      ease : "power2.out",
    }).to(".masked-img", {
      scale: 1.3,
      maskPosition: "center",
      maskSize: "400%",
      duration : 2,
      ease : "power2.out",
    })
  });
  return (
    <>
      <div id="art">
        <div className="container">
          <h2 className="will-fade">The ART</h2>
          <div className="content">
            <ul className="space-y-4 will-fade">
              {goodLists.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <img src="/images/check.png" alt="" />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
            <ul className="space-y-4 will-fade">
              {featureLists.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <img src="/images/check.png" alt="" />
                  <p>{item}</p>
                </li>
              ))}
            </ul>

            <div className="cocktail-img">
              <img
                src="/images/under-img.jpg"
                alt=""
                className="abs-center masked-img size-full object-contain"
              />
            </div>
          </div>
          <div className="masked-container">
            <h2 className="will-fade">Sip-Worthy Perfection</h2>
            <div className="masked-content">
              <h3>Made with Craft, Poured with Passion</h3>
              <p>
                This isn’t just a drink. It’s a carefully crafted moment made
                just for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtSection;
