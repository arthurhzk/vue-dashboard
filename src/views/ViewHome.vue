<template>
  <section class="space-y-4">
    <TheNavDrawer />
    <div class="flex flex-col align-center space-y-4">
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
        <v-btn @click="tryAgain">Try again</v-btn>
      </div>
    </div>
  </section>
</template>

<script>
import TheNavDrawer from "@/components/TheNavDrawer.vue";
import TheSelect from "@/components/TheSelect.vue";
import useCoinStore from "@/stores/coins";
import TheInput from "@/components/TheInput.vue";

export default {
  name: "ViewHome",
  components: {
    TheNavDrawer,
    TheSelect,
    TheInput,
  },
  data() {
    return {
      exchangeCoins: [],
      firstSelectedCoin: null,
      secondSelectedCoin: null,
      amount: null,
      conversion: false,
      conversionDone: false,
    };
  },
  setup() {
    const getCoins = useCoinStore();

    return { getCoins };
  },
  methods: {
    handleFirstSelect(event) {
      if (!this.conversionDone) {
        const selectedValue = event?.target?.value;
        this.firstSelectedCoin = selectedValue;
      }
    },
    handleSecondSelect(event) {
      if (!this.conversionDone) {
        const selectedValue = event?.target?.value;
        this.secondSelectedCoin = selectedValue;
      }
    },
    handleValueSelect(event) {
      if (!this.conversionDone) {
        const selectedValue = event?.target?.value;
        this.amount = selectedValue;
      }
    },
    tryAgain() {
      this.conversionDone = false;
      this.conversion = false;
    },
    async handleConversion() {
      if (!this.conversionDone) {
        await this.updateConversion();
        this.conversionDone = true;
        this.conversion = true;
      }
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
      return `${this.amount} ${this.firstSelectedCoin} = ${result} ${this.secondSelectedCoin} `;
    },
  },
};
</script>
