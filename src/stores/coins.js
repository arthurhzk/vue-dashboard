import { defineStore } from "pinia";
import axios from "axios";

const useCoinsStore = defineStore("coins", {
  state: () => {
    return {
      coins: [],
      fromCurrency: "",
      toCurrency: "",
      value: null,
      conversionResult: null,
      loadingData: false,
    };
  },
  actions: {
    async listQuotes() {
      const options = {
        method: "GET",
        url: "https://currency-exchange.p.rapidapi.com/listquotes",
        headers: {
          "X-RapidAPI-Key":
            "20751f93ebmsh43432c44f2c4325p1918f0jsn2f5d883b5376",
          "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        this.coins = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async exchangeCoins() {
      const options = {
        method: "GET",
        url: "https://currency-exchange.p.rapidapi.com/exchange",
        params: {
          from: this.fromCurrency,
          to: this.toCurrency,
          q: this.value,
        },
        headers: {
          "X-RapidAPI-Key":
            "20751f93ebmsh43432c44f2c4325p1918f0jsn2f5d883b5376",
          "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
        },
      };
      try {
        this.loadingData = true;
        const response = await axios.request(options);
        this.conversionResult = response.data;
      } catch (error) {
        console.error("Error in exchangeCoins:");
      }
      this.loadingData = false;
    },
  },
});

export default useCoinsStore;
