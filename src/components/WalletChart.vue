<template>
  <Pie id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script>
import { Pie } from "vue-chartjs";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
export default {
  name: "WalletChart",
  components: { Pie },
  props: {
    dolarValue: {
      type: Number,
    },
    limiteValue: {
      type: Number,
    },
  },
  computed: {
    chartData() {
      return {
        labels: ["USD", "Limit"],
        datasets: [
          {
            backgroundColor: ["#FF2136", "#FFC107"],

            data: [this.dolarValue, this.limiteValue - this.dolarValue],
          },
        ],
      };
    },
    chartOptions() {
      return {
        responsive: true,
      };
    },
  },
};
</script>
