import type { NextPage } from 'next'
import { useEffect } from 'react'
import styles from '../styles/Home.module.scss'
import Banner from '../components/banner/Banner'
import Coin from '../components/coin/Coin'
import MainLayout from '../layouts/mainLayout/main.layout'
import { useDispatch, useSelector } from "react-redux";
import { actionCoins } from '../redux/reducer';


const Home: NextPage = () => {
  const dispatch = useDispatch();
  const coins = useSelector((store: IRootState) => store.wallet.coins);
  useEffect(() => {
    dispatch(actionCoins());
  }, []);
  return (
    <MainLayout>
      <div className={styles.container__home}>
      <Banner title="Awesome Wallet"/>
      <div className={styles.tabs__container}>
        <div className={styles.tabs__coins}>
          {coins.map((item:any)=> <Coin name={item.name} price={item.price} />)}
        </div>
      </div>    
    </div>

    </MainLayout>
   
  )
}

export default Home
