import styles from "./Banner.module.scss";

import React from 'react';

export interface IBanner{
    title:string;
    total:number;
    onBtnClick(): any;
}

const Banner:React.FC<IBanner>=({title,total=0,onBtnClick})=>{
    return <div className={styles.banner}>
    <p className={styles.title}>{title}</p>
    <p className={styles.subtitle}>{`$${total} MXN`}</p>
    <button onClick={onBtnClick}>Buy</button>
   
  </div>
}

export default Banner;