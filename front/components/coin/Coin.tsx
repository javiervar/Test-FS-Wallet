import React from "react";
import Image from 'next/image'
import styles from "./Coin.module.scss";
import BitcoinIcon  from "../../assets/img/bitcoin.png";
import EtherumIcon from '../../assets/img/etherum.png';
import SolanaIcon from '../../assets/img/solana.png';


export interface ICoin {
  name: string;
  price: number;
}

const Coin: React.FC<ICoin> = ({ name="", price = 0 }) => {
  const renderImage = ()=> {
    const coins: { [key: string]: ReactElement; }= {
        'bitcoin': <Image src={BitcoinIcon} alt={name} width="50px" height="50px"/>,
        'ethereum':<Image src={EtherumIcon} alt={name} width="50px" height="50px"/>,
        'solana':<Image src={SolanaIcon} alt={name} width="50px" height="50px"/>,
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
