import React, { useState } from "react";
import "./TinderCards.css";
import image from "../../images/tinder_logo.png";
import TinderCard from "react-tinder-card";

const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      url:
        "https://m.economictimes.com/thumb/msid-80095660,width-1200,height-900,resizemode-4,imgsize-601228/elon-musk-is-the-worlds-second-richest-person-with-an-estimated-net-worth-of-158-billion-.jpg",
    },
    {
      name: "Jeff Bezos",
      url:
        "https://assets.entrepreneur.com/content/3x2/2000/20150224165308-jeff-bezos-amazon.jpeg",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    //   setlastDirection(direction)
  };

  const outOffFrame = (name) => {
    console.log(name + " left the screen");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__container">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOffFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
