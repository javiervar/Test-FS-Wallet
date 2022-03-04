import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { actionCoins } from "../redux/reducer";
import styles from "../styles/Buy.module.scss";
import MainLayout from "../layouts/mainLayout/main.layout";
import Banner from "../components/banner/Banner";
import { purchase } from "../common/api";
import ReactLoading from "react-loading";

const Buy: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const coins = useSelector((store: IRootState) => store.wallet.coins);
  useEffect(() => {
    dispatch(actionCoins());
  }, []);

  const onSubmit = (data: any) => {
    setLoading(true);
    data.mxn_amount = parseFloat(data.mxn_amount);
    const formData = new FormData();
    Object.keys(data).forEach((key) => formData.append(key, data[key]));

    purchase(formData)
      .then((res) => {
        console.log(res);
        const { purchased_amount } = res.details;
        alert(`Total ${data.coin} purchased = ${purchased_amount}`);
      })
      .catch((err) => {
        console.log("ERROR=>", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <MainLayout>
      <Banner title="Buy Crypto in minutes" />

      <div className={styles.container}>
        <div className={styles.form__container}>
          {loading ? (
            <ReactLoading type="spin" color="blue" height={50} width={50} />
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <label>Address:</label>
              <input
                type="text"
                placeholder="bc1q42lja79elem0anu8q8s3h2n687re9jax556pcc"
                {...register("address", { required: true })}
              />
              {errors.address && (
                <span className={styles.error}>This field is required</span>
              )}
              <label>I want to buy:</label>
              <select {...register("coin")}>
                <option>Select a coin</option>
                {coins.map((item: any,index:number) => (
                  <option
                    key={`coin-${item.name}-${index}`}
                    value={item.name}
                  >{`${item.name} ($${item.price} mxn)`}</option>
                ))}
              </select>
              <label>I want to spend (MXN):</label>
              <input
                type="number"
                {...register("mxn_amount", { required: true })}
              />
              {errors.mxn_amount && <span>This field is required</span>}

              <button type="submit">Continue</button>
            </form>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Buy;
