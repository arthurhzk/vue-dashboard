<template>
  <select
    :class="[
      variant === 'select-input' &&
        'px-6 py-4 w-[448px] h-[58px] rounded-md outline-none ',
    ]"
    @input="handleChange"
  >
    <option value="">{{ placeholder }}</option>
    <option v-for="(coin, index) in coins" :key="index" :value="coin">
      {{ coin }}
    </option>
  </select>
</template>

<script>
export default {
  name: "TheSelect",
  props: {
    coins: {
      type: Array,
      required: true,
    },
    variant: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
    },
  },
  methods: {
    handleChange(event) {
      this.$emit("change", event.target.value);
    },
  },
};
</script>
