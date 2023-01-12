import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])
  const [plates, setPlates] = useState([])
  const [wallet, setWallet] = useState(150)
  const fetchSushis = async() => {
    const resp = await fetch(API)
    const data = await resp.json()
    setSushis(data)
  }
  useEffect(() => {
    fetchSushis()
  }, [])
  
  
  const eatSushi = (id, price) => {
    if (wallet >= price){
      const newSushis = sushis.filter((sushi) => {
      return (sushi.id !== id)
    })
    setSushis(newSushis)
    setPlates([...plates, id])
      setWallet(wallet - price)
    } else {
      const message = "No Free Meals!"
      console.log(message)
    }
  }

  return (
    <div className="app">
      <SushiContainer sushis={sushis} deleteSushi={eatSushi} />
      <Table plates={plates} wallet={wallet} />
    </div>
  );
}

export default App;
