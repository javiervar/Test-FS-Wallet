import { useEffect } from "react";
import type { NextPage } from "next";
import styles from "../styles/History.module.scss";
import MainLayout from "../layouts/mainLayout/main.layout";
import Banner from "../components/banner/Banner";
import { useDispatch, useSelector } from "react-redux";
import { actionHistory } from "../redux/reducer";
import { IRootState } from "../redux/store";

const History: NextPage = () => {
  const dispatch = useDispatch();
  const history = useSelector((store: IRootState) => store.wallet.history);
  useEffect(() => {
    dispatch(actionHistory());
  }, []);
  const renderTable = () => {
    return history.map((item:any) => (
      <tr key={item._id.$oid}>
        <td>{item.coin}</td>
        <td>${item.mxn_amount}</td>
        <td>{item.purchased_amount}</td>
        <td>${item.price} MXN</td>
        <td>{item.address}</td>
        <td>{new Date(item.date).toDateString()}</td>
      </tr>
    ));
  };
  return (
    <MainLayout>
      <Banner title="Transaction History" />
      <div className={styles.container}>
        <table>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Total in MXN</th>
              <th>Purchased amount</th>
              <th>Price</th>
              <th>Address</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>{renderTable()}</tbody>
        </table>
      </div>
    </MainLayout>
  );
};

export default History;
