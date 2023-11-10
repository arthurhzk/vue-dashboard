<template>
  <section class="space-y-4">
    <TheNavDrawer />
    <div class="flex flex-row space-x-4">
      <div class="flex flex-col align-center space-y-4 w-1/2">
        <v-card-title class="text-h6 text-md-h5 text-lg-h4">
          Get a quote with us! 💸
        </v-card-title>
        <div class="border border-gray-300 rounded-md">
          <TheSelect
            :coins="exchangeCoins"
            variant="select-input"
            @change="handleFirstSelect"
            placeholder="From curency"
          />
        </div>
        <div class="border border-gray-300 rounded-md">
          <TheInput
            placeholder="Value"
            type="number"
            variant="sign-input"
            @change="handleValueSelect"
          >
          </TheInput>
        </div>
        <div class="border border-gray-300 rounded-md">
          <TheSelect
            placeholder="To Currency "
            :coins="exchangeCoins"
            variant="select-input"
            @change="handleSecondSelect"
          />
        </div>
        <div class="flex flex-col justify-center items-center space-y-4">
          <v-btn @click="handleConversion">Convert</v-btn>
          <h1 v-if="conversion" class="text-2xl">{{ conversionResult }}</h1>
          <p v-if="conversion" class="font-weight-bold">
            {{ conversionResultWithTax }}
          </p>
        </div>

        <Loading v-if="getCoins.loadingData" />
        <div
          class="space-y-4 border border-gray-300 rounded-md w-[600px] h-[400px] bg-gray-50 mt-10 p-5"
        >
          <div>
            <TheCard balance="$ 500" title="Wallet Balance" :value="dollarCoin">
              <div class="w-1/4 h-1/4 flex absolute">
                <WalletChart
                  class="chart-size"
                  dolarValue="500"
                  limiteValue="2000"
                />
              </div>
            </TheCard>
          </div>
        </div>
      </div>
      <div class="w-1/2 h-1/2 mr-10 space-x-4">
        <CurrencyChart
          :firstCurrencyValue="getCoins.value"
          :secondCurrencyValue="this.getCoins.conversionResult * this.amount"
          :firstCurrencyName="firstSelectedCoin"
          :secondCurrencyName="secondSelectedCoin"
        />
        <CreditCard class="mt-8" />
      </div>
    </div>
  </section>
</template>

<script>
import TheNavDrawer from "@/components/TheNavDrawer.vue";
import TheSelect from "@/components/TheSelect.vue";
import useCoinStore from "@/stores/coins";
import TheInput from "@/components/TheInput.vue";
import CurrencyChart from "@/components/CurrencyChart.vue";
import Loading from "@/components/Loading.vue";
import TheCard from "@/components/TheCard.vue";
import WalletChart from "@/components/WalletChart.vue";
import CreditCard from "@/components/CreditCard.vue";
export default {
  name: "ViewHome",
  components: {
    TheNavDrawer,
    TheSelect,
    TheInput,
    CurrencyChart,
    Loading,
    TheCard,
    WalletChart,
    CreditCard,
  },
  data() {
    return {
      exchangeCoins: [],
      firstSelectedCoin: null,
      secondSelectedCoin: null,
      amount: null,
      conversion: false,
      loadingData: false,
    };
  },
  setup() {
    const getCoins = useCoinStore();

    return { getCoins };
  },
  methods: {
    handleFirstSelect(event) {
      const selectedValue = event?.target?.value;
      this.firstSelectedCoin = selectedValue;
    },
    handleSecondSelect(event) {
      const selectedValue = event?.target?.value;
      this.secondSelectedCoin = selectedValue;
    },
    handleValueSelect(event) {
      const selectedValue = event?.target?.value;
      this.amount = selectedValue;
    },

    async handleConversion() {
      await this.updateConversion();

      this.conversion = true;
    },
    async updateConversion() {
      this.getCoins.fromCurrency = this.firstSelectedCoin;
      this.getCoins.toCurrency = this.secondSelectedCoin;
      this.getCoins.value = this.amount;

      await this.getCoins.exchangeCoins();
    },
  },
  async mounted() {
    await this.getCoins.listQuotes();
    this.exchangeCoins = this.getCoins.coins;
  },
  computed: {
    conversionResult() {
      if (this.amount === null || this.amount <= 0) return;
      const result = this.getCoins.conversionResult * this.amount;
      if (isNaN(result)) {
        this.conversion = false;
        return;
      }
      return `${this.amount} ${
        this.firstSelectedCoin
      } is equal to ${result.toFixed(2)} ${this.secondSelectedCoin} `;
    },
    conversionResultWithTax() {
      if (this.amount === null || this.amount <= 0) return;

      const result = this.amount;

      if (isNaN(result)) {
        this.conversion = false;
        return;
      }
      const taxMultiplier = 1.15;
      const resultWithTax = result * taxMultiplier;

      return `Total to pay with taxes R$ ${resultWithTax.toFixed(2)}`;
    },
    dollarCoin() {
      const fourthItem = this.exchangeCoins[3];
      return fourthItem + ":";
    },
  },
};
</script>

<style></style>
