<template>
  <div class="space-y-4">
    <h1 class="text-2xl">{{ title }}</h1>
    <div class="flex space-x-1">
      <h1>{{ value }}</h1>
      <h1>{{ balance }}</h1>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TheCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    value: {
      type: String,
    },
    balance: {
      type: Number,
    },
  },
};
</script>
