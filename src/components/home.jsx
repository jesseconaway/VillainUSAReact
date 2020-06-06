import React from "react";
import Carousel from "./carousel";
import Jumbotron from "./jumbotron";
import Card from "./card";
import barbellFloorRack from "../assets/barbellFloorRack1.jpg";
import foamRoller1 from "../assets/foamRoller1.jpg";
import gymnasticRings1 from "../assets/gymnasticRings1.jpg";
import woodenJumpBox1 from "../assets/woodenJumpBox1.jpg";
import competitionPlateStackWhite from "../assets/competitionPlateStackWhite.jpg";
import weightliftingBelt1 from "../assets/weightliftingBelt1.jpg";

function Home(props) {
  const carouselImages = [
    require(`../assets/barbellFullSetCarousel.jpg`),
    require(`../assets/economyPlateStackCarousel.jpg`),
    require(`../assets/shoeRedCarousel.jpg`),
  ];

  const cardsArr = {
    gymEssentials: {
      caption: "GYM ESSENTIALS",
      image: barbellFloorRack,
      route: "/products/:outfitting",
    },
    mobility: {
      caption: "MOBILITY AND RECOVERY",
      image: foamRoller1,
      route: "/products/:mobility",
    },
    bodyweight: {
      caption: "BODYWEIGHT TRAINING",
      image: gymnasticRings1,
      route: "/products/:bodyweight",
    },
    functionalTraining: {
      caption: "FUNCTIONAL TRAINING ESSENTIALS",
      image: woodenJumpBox1,
      route: "/products/:boxes",
    },
    bumperPlates: {
      caption: "BUMPER PLATES",
      image: competitionPlateStackWhite,
      route: "/products/:plates",
    },
    gear: {
      caption: "WEIGHTLIFTING GEAR",
      image: weightliftingBelt1,
      route: "/products/:weightliftingGear",
    },
  };

  return (
    <div>
      <Carousel images={carouselImages} interval="4000" ride="carousel" />
      <Jumbotron />
      <div className="container">
        <div className="row">
          <Card
            caption={cardsArr.gymEssentials.caption}
            image={cardsArr.gymEssentials.image}
            route={cardsArr.gymEssentials.route}
          />
          <Card
            caption={cardsArr.mobility.caption}
            image={cardsArr.mobility.image}
            route={cardsArr.mobility.route}
          />
          <Card
            caption={cardsArr.bodyweight.caption}
            image={cardsArr.bodyweight.image}
            route={cardsArr.bodyweight.route}
          />
          <Card
            caption={cardsArr.functionalTraining.caption}
            image={cardsArr.functionalTraining.image}
            route={cardsArr.functionalTraining.route}
          />
          <Card
            caption={cardsArr.bumperPlates.caption}
            image={cardsArr.bumperPlates.image}
            route={cardsArr.bumperPlates.route}
          />
          <Card
            caption={cardsArr.gear.caption}
            image={cardsArr.gear.image}
            route={cardsArr.gear.route}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
