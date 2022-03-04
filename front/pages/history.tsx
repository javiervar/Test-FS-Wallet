import type { NextPage } from "next";
import styles from "../styles/History.module.scss";
import MainLayout from "../layouts/mainLayout/main.layout";
import Banner from "../components/banner/Banner";
const History: NextPage = () => {


  return (
    <MainLayout>
      <Banner title="Transaction History"/>
        <div className={styles.container}>
            <table>
                    <tr>
                        <th>#id</th>
                        <th>Coin</th>
                        <th>Total in MXN</th>
                        <th>Purchased amount</th>
                        <th>Price</th>
                        <th>Address</th>
                        <th>Date</th>
                    </tr>
            </table>
        </div>
    </MainLayout>
  );
};

export default History;
