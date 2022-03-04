import styles from "./Banner.module.scss";

import React from 'react';

export interface IBanner{
    title:string;
}

const Banner:React.FC<IBanner>=({title})=>{
    return <div className={styles.banner}>
    <p className={styles.title}>{title}</p>   
  </div>
}

export default Banner;