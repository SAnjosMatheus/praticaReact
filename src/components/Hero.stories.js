import React from "react";
import { text } from "@storybook/addon-knobs";

import Hero from "./Hero";
import BgHighwayImage from "../stories/assets/bg-highway.jpg";
import BgCarImage from "../stories/assets/bg-car.jpg";
import Heading from "./Heading";

export default {
  title: "Components|Hero",
  component: Hero,
};

export const usage = () => (
  <Hero image={BgHighwayImage}>
    <h1>{text("Title", "Ganhe sua liberdade para ir e vir")}</h1>
    <p>{text("Text", "A auto escola lider em aprovação.")}</p>
  </Hero>
);

export const withList = () => (
  <Hero image={BgCarImage}>
    <Heading>
      <h1>
        Ganhe sua <strong>liberdade</strong>
        <br />
        para ir e vir
      </h1>
    </Heading>
    <ul>
      <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem do</li>
      <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem do</li>
      <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem do</li>
    </ul>
  </Hero>
);
