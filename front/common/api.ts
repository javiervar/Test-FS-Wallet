import axiosInstance from './axiosInstance';

export const getCoinList = (params: any) => {
  return axiosInstance
    .get("/crypto",{params})
    .then((response) => response.data)
    .catch((err) => {
      return Promise.reject(err.response.data.error)
    });
};

export const getHistory = () => {
    return axiosInstance
      .get("/history")
      .then((response) => response.data)
      .catch((err) => {
        return Promise.reject(err.response.data.error)
      });
  };


export const purchase = (data:any) => {
    return axiosInstance
      .post("/buy", data)
      .then((response) => response.data)
      .catch((err) => {
        return Promise.reject(err.response.data.error)
      });
};

