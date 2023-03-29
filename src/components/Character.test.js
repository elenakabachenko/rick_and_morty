import React from "react";
import { cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Character from "./Character";
import {render} from "../utils/test";

afterEach(cleanup);

test('Character render with right name', () => {
  render(<Character  name="Cool Rick"/>);
  const name = screen.getByTestId("character-name");
  expect(name).toBeInTheDocument();
});

test('Character render with right image', () => {
  render(<Character  image="https://rickandmortyapi.com/api/character/avatar/64.jpeg"/>);
  const image = screen.getByTestId("character-image");
  expect(image).toBeInTheDocument();
});
