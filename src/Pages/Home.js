import React, { useState } from "react";
import "../css/Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import { ImageSlider } from "../Components/ImageSlider";
import { image } from "../Components/Images";
import { MdArrowUpward } from "react-icons/md";

function Home({images}) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };


  return (
    <div>
      <div className="main-container">
        <div className="Container">
          <div className="hero-image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf8Ng6TFr-Lu6bZyR9TIZnRmwkLeaWMSP8tf9Mg3NBpQ&s"
              alt=""
            />
          </div>

          <div className="section">
            <img src="https://meme-token-gilt.vercel.app/assets/29231-B1Z16x30.png" />
            <h2>$URANUS</h2>
            <p>
              Uranus, the ruler of Aquarius, starts 2024 in retrograde, going
              direct on Saturday, January 27, then retrogrades again on Sunday,
              September 1. This suggests ongoing evolution in your home life and
              personal growth.
            </p>

            <p>
              Uranus champions individuality, social justice, and authenticity.
              During its retrograde, focus on living by your values and perhaps
              engage more actively in humanitarian efforts.
            </p>

            <p>
              In 2024, the location of the Sun on the March equinox is in the
              constellation of Pisces but also on the border of Aquarius.
            </p>

            <p>
              {" "}
              So, we are slowly moving into a new age, from Pisces to Aquarius.
              Aquarius is ruled by Uranus, the planet that governs innovation,
              technology, and surprising events. Uranus perfectly mirrors
              Aquarius' distinctive attitude, complementing the nontraditional
              nature of these visionary air signs
            </p>
            <ul>
              <li>
                Everyone Loves to Pump Uranus more than they like when Uranus
                Dumps.
              </li>
              <li>The liquidity injections just keep coming into Uranus.</li>
              <li>Don't pass gas (it's gonna be giant)</li>
              <li>Hold onto Uranus!</li>
              <li>
                Disclaimer: This is all in good fun - a blend of memes,
                astrology, and crypto. We will not go to the moon, we're going
                to Uranus.
              </li>
            </ul>
            <p>In Crypto We Trust, But In Uranus, We Believe!</p>
            <h4>The Memeifesto</h4>
            <p>
              Welcome to the wild side of crypto - where memes aren't just
              dreams, and astrology isn't just your daily horoscope.
            </p>
          </div>

          <div className="slider">
            <Slider {...settings}>
              {images.map((item, idx) => {
                return <img src={item.img} key={idx} />;
              })}
            </Slider>
          </div>

          <div className="ImageSliding">
            <ImageSlider images={image} />
          </div>
        

          <div className="video">
            <iframe className="youtube"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/z8aBZZnv6y8?si=FC0CEYYbGrbQRL73"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div className="Footer">
          <div className="links">
            <div className="partner">
              <p className="foot-heading">Partner</p>
              <div>
                <NavLink to="https://dia.wiki/" className="navlink">
                  Decentralized Intelligence Agency
                </NavLink>
              </div>
              <div>
                <NavLink to="https://worldvibeweb.org/" className="navlink">
                  World Vibe Web
                </NavLink>
              </div>
              <div>
                <NavLink to="https://www.purplerock.xyz/" className="navlink">
                  Purplerock
                </NavLink>
              </div>
            </div>

            <div className="resource">
              <p className="foot-heading">Resources</p>
              <div className="partner">
                <div className="navlink">
                  <NavLink
                    to="https://persistventure.notion.site/URANUS-Web-7291c569928947758d04c7dc99a3a327"
                    className="navlink"
                  >
                    Effective Vibes
                  </NavLink>
                </div>
                <div>
                  <NavLink to="https://goldenmeme.org/" className="navlink">
                    Golden Memes
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <p className="copyright">
            © 2024 Amit Kumar (Amitmaa12345@gmail.com)
          </p>

          <div className="logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" />
            <img src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" />
          </div>
        </div>
      </div>

      <button className="myBtn"><a href="#top" style={{
        color: "white",
      }}><MdArrowUpward /></a></button>
    </div>
  );
}

export default Home;
