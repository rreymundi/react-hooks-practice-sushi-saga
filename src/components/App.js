import React, {useState, useEffect}  from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import SushiWallet from "./SushiWallet";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushi] = useState([]);
  const [money, setMoney] = useState(100);

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((data) => setSushi(data))
  }, []); 

  function onEatClick(sush){
    if (sush.price <= money) {
      setSushi(sushis.map((sushi) => sush.id === sushi.id ? {...sushi, eaten: true} : sushi))
      setMoney(money - sush.price)
    }
  };

  function addMoney(amount){
    setMoney(money + amount)
  }

  return (
    <div className="app">
      <SushiContainer sushis={sushis} onEatClick={onEatClick} />
      <Table money={money}/>
      <SushiWallet addMoney={addMoney}/>
    </div>
  );
};

export default App;
