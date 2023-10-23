import React from "react";
import rainbowPop from "../images/popsicle-rainbow.jpg";
import bluePop from "../images/blue-pop.png";

function Main(props) {
  return (
    <main id="index-main" class="main">
      <section id="content">
        <img
          src={rainbowPop}
          alt="five colorful popscile laying ontop of fresh cut fruits"
        />

        <section id="facts">
          <h2>Did You Know?</h2>
          <ul>
            <li>
              The earliest known popsciles date as far back as 1872. Back then,
              a popscicle was called a <i>Hokey-Pokey</i>.
            </li>
            <li>
              Popsciles are also known as freezer pops, ice lollies, and ice
              pops
            </li>
            <li>
              The worlds largest popsicle was made in 1997 and was 21 feet tall.
            </li>
            <li>
              Popsicles have become so popular that a popular arts and crafts
              item is called a popscicle stick.
            </li>
          </ul>
        </section>
      </section>

      <div id="work">
        <section id="popsicle" class="container">
          <img src={bluePop} alt="cartoon blue popsicle" id="blue-pop" />
          <h2 class="secondary">Popsicle Race</h2>
          <p>
            Don't forget to sign up for the race! Each attendee will receive
            their own box of popsicles when they reach the end.
          </p>
        </section>
        <section id="refreshed" class="container">
          <h2 class="secondary">Get refreshed this Summer!</h2>
          <p>
            Mark this very special occasion of the launch of Tech Elevator
            Popsicles by buying a gift from our stunning array of items, shipped
            directly from Cleveland
          </p>
          <button id="store-button">store</button>
        </section>
      </div>
    </main>
  );
}

export default Main;
