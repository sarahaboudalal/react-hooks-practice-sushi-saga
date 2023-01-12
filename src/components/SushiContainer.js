import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi'

function SushiContainer({ sushis, deleteSushi }) {
  const [index, setIndex] = useState([0, 4])
  const changeIndex = () => {
    if (index[1] < 100){
      setIndex([index[0] + 4, index[1] + 4])
    } else {
      setIndex([0,4])
    }
    // console.log(index)
  }
  return (
    <div className="belt">
      {sushis.slice(index[0], index[1]).map((sushi) => {
        return (
          <Sushi key={sushi.id} sushi={sushi} deleteSushi={ deleteSushi} />
        )
      })}
      <MoreButton changeIndex={changeIndex}/>
    </div>
  );
}

export default SushiContainer;
