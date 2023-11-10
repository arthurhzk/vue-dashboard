<template>
  <div
    class="bg-blue-800 w-[356px] h-[198px] p-5"
    :style="`background-image: url(${creditCardImage}); background-size: cover`"
  >
    <div class="space-y-8">
      <div class="flex justify-between items-center">
        <h1 class="text-blue-500 font-semibold">Credit Card</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="39"
          height="26"
          viewBox="0 0 39 26"
          fill="none"
        >
          <rect
            x="1"
            y="1"
            width="37"
            height="24"
            rx="5"
            fill="url(#paint0_linear_2401_472)"
            stroke="#A07400"
            stroke-width="0.5"
          />
          <rect
            x="27.0681"
            y="1"
            width="24"
            height="15.1364"
            rx="7.56818"
            transform="rotate(90 27.0681 1)"
            stroke="#A07400"
            stroke-width="0.5"
          />
          <line
            x1="27.3181"
            y1="8.25"
            x2="37.7499"
            y2="8.25"
            stroke="#A07400"
            stroke-width="0.5"
            stroke-linecap="round"
          />
          <line
            x1="37.75"
            y1="17.75"
            x2="27.3182"
            y2="17.75"
            stroke="#A07400"
            stroke-width="0.5"
            stroke-linecap="round"
          />
          <line
            x1="1.25"
            y1="8.25"
            x2="11.6818"
            y2="8.25"
            stroke="#A07400"
            stroke-width="0.5"
            stroke-linecap="round"
          />
          <line
            x1="11.6819"
            y1="17.75"
            x2="1.25007"
            y2="17.75"
            stroke="#A07400"
            stroke-width="0.5"
            stroke-linecap="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2401_472"
              x1="1"
              y1="1"
              x2="36.1925"
              y2="27.4087"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#DAAA00" />
              <stop offset="0.510417" stop-color="#FFF9CF" />
              <stop offset="1" stop-color="#F0CA00" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <h1 class="font-bold text-white">3451 1514 7511 1528</h1>
      <div class="flex justify-between">
        <h1 class="text-white uppercase text-xs font-semibold tracking-wider">
          {{ name }}
        </h1>
        <h1 class="text-white font-bold text-2xl">VIZA</h1>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import creditCardImage from "@/assets/credit.png";

export default {
  name: "CreditCard",
  data() {
    return {
      creditCardImage,
    };
  },
  props: {
    name: {
      type: String,
      default: "John Doe",
    },
  },
};
</script>
