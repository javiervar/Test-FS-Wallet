import React from "react";
import styles from "./Coin.module.scss";
const BitcoinIcon = require("../../assets/img/bitcoin.png");
const EtherumIcon =require("../../assets/img/etherum.png");
const  SolanaIcon = require( "../../assets/img/solana.png");

export interface ICoin {
  name: string;
  price: number;
}

const Coin: React.FC<ICoin> = ({ name="", price = 0 }) => {
  const renderImage = ()=> {
    const coins: { [key: string]: ReactElement; }= {
        'bitcoin': <img src={BitcoinIcon} alt={name} />,
        'etherum':<img src={EtherumIcon} alt={name} />,
        'solana':<img src={SolanaIcon} alt={name} />,
     }
    return  coins[name.toLowerCase()] ?? null;
  };
  return (
    <div className={styles.container}>
      <div className={styles.col_logo}>
        {renderImage()}
        <p className={styles.col_logo__name}>{name}</p>
      </div>
  
      <div className={styles.col_price}>
          <p className={styles.title}>Price</p>
          <p className={styles.total}>${price} MXN</p>
      </div>
     
    </div>
  );
};

export default Coin;
