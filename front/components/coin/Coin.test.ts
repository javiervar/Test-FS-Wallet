import axios, { AxiosResponse } from 'axios';
import "@testing-library/jest-dom";
import { getCoinList } from "../../common/api";

const data = {
  details: {
    bitcoin: {
      mxn: 858968,
    },
    ethereum: {
      mxn: 56508,
    },
    solana: {
      mxn: 1889.15,
    },
  },
  message: "Coins list has been obtained successfully",
  timestamp: 1646364871,
};


describe("Coin", () => {
  jest.mock("axios", () => ({
    create: jest.fn()
  }));
  

  it("Fetches successfully data from an API", async () => {
    const params = {
      coins: "bitcoin,solana,ethereum",
      currencies: "mxn"
    }
    const res= await getCoinList(params);
    expect(res.message).toEqual("Coins list has been obtained successfully");
  });
});
