import React, {useState} from "react";

function SushiWallet({addMoney}){
    const [walletMoney, setWalletMoney] = useState(0);

    function handleSubmit(e){
        e.preventDefault()
        addMoney(walletMoney)
        setWalletMoney(0)
    }

    return (
        <form onSubmit={handleSubmit}>
        <input type="number" value={walletMoney} onChange={(e) => setWalletMoney(parseInt(e.target.value))} />
        <button type="submit">Add $ to Wallet</button>
        </form>
    );
}

export default SushiWallet;