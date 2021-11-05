// Write your Character component here
import axios from "axios";
import CharacterInfo from "./Characterinfo";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CharacterStyle = styled.div``;

function Character() {
  const [starWarsData, setStarWarsData] = useState();

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/`)
      .then((response) => {
        setStarWarsData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  if (!starWarsData) return <h1>Loading . . . </h1>;

  return (
    <div>
      {starWarsData.map((starWarsData) => {
        return (
          <CharacterStyle>
            <span>
              <h2>{starWarsData.name}</h2>

              <CharacterInfo
                key={starWarsData.id}
                starWarsData={starWarsData}
              />
            </span>
          </CharacterStyle>
        );
      })}
    </div>
  );
}
export default Character;