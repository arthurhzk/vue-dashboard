<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);

export default {
  name: "CurrencyChart",
  components: { Bar },

  props: {
    firstCurrencyValue: {
      type: Number,
    },
    secondCurrencyValue: {
      type: Number,
    },
    firstCurrencyName: {
      type: String,
    },
    secondCurrencyName: {
      type: String,
    },
  },
  computed: {
    chartOptions() {
      return {
        responsive: true,
      };
    },
    chartData() {
      return {
        labels: [this.firstCurrencyName, this.secondCurrencyName],
        datasets: [
          {
            backgroundColor: ["#4ade80", "#E46651"],
            data: [this.secondCurrencyValue, this.firstCurrencyValue],
          },
        ],
      };
    },
  },
};
</script>
