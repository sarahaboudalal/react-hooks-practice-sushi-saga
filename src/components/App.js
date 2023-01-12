import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])
  const [plates, setPlates] = useState([])
  const [wallet, setWallet] = useState(150)
  const [error, setError] = useState('')
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
      setError("No Free Meals.")
    }
  }

  return (
    <div className="app">
      <SushiContainer sushis={sushis} deleteSushi={eatSushi} />
      <Table plates={plates} wallet={wallet} />
      <p className="error">{error}</p>
    </div>
  );
}

export default App;
