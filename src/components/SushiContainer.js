import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi.js"

function SushiContainer({sushis, onEatClick}) {
  const [sushiIndex, setSushiIndex] = useState(0)

  function handleMoreClick(){
    setSushiIndex((sushiIndex) => (sushiIndex + 4) % sushis.length)
  }

  const renderedSushis = sushis
    .slice(sushiIndex, sushiIndex + 4)
    .map((sushi) => (
      <Sushi key={sushi.id} sushi={sushi} onEatClick={onEatClick} />
    ));

  return (
    <div className="belt">
      {renderedSushis}
      <MoreButton handleMoreClick={handleMoreClick}/>
    </div>
  );
}

export default SushiContainer;
