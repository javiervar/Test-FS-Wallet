import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Banner from '../components/banner/Banner'
import Coin from '../components/coin/Coin'

const Home: NextPage = () => {
  const goToBuyScreen=()=>{

  }
  return (
    <div className={styles.container__home}>
      <Banner title="Awesome Wallet" total={0.0} onBtnClick={goToBuyScreen}/>
      <div className={styles.tabs__container}>
        <div className={styles.tabs__ctrl}>
          <a className={styles.active}>Coins</a>
          <a>History</a>
        </div>
        <div className={styles.tabs__coins}>
          <Coin name="bitcoin" price={100000.0} balance={10.0}/>
          <Coin name="etherum" price={4000.0} balance={0.1}/>
          <Coin name="solana" price={300.0} balance={0.2}/>
        </div>
      </div>    
    </div>
  )
}

export default Home
