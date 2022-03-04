import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Banner from '../components/banner/Banner'
import Coin from '../components/coin/Coin'
import MainLayout from '../layouts/mainLayout/main.layout'

const Home: NextPage = () => {
  const goToBuyScreen=()=>{

  }
  return (
    <MainLayout>
      <div className={styles.container__home}>
      <Banner title="Awesome Wallet"/>
      <div className={styles.tabs__container}>
        <div className={styles.tabs__coins}>
          <Coin name="bitcoin" price={100000.0} />
          <Coin name="etherum" price={4000.0} />
          <Coin name="solana" price={300.0} />
        </div>
      </div>    
    </div>

    </MainLayout>
   
  )
}

export default Home
