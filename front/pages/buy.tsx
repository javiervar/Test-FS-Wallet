import type { NextPage } from "next";
import { useForm } from "react-hook-form";
import styles from "../styles/Buy.module.scss";
import MainLayout from "../layouts/mainLayout/main.layout";

const Buy: NextPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    
  };

  return (
    <MainLayout>
      <div className={styles.container}>
        <div className={styles.form__container}>
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
            <label>Coin:</label>
            <select {...register("coin")}>
              <option value="bitcoin">Bitcoin ($2000000 mxn)</option>
            </select>
            <label>Amount (MXN):</label>
            <input
              type="number"
              {...register("mxn_amount", { required: true })}
            />
            {errors.mxn_amount && <span>This field is required</span>}

            <input type="submit" />
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default Buy;
