<template>
  <button
    :class="[
      variant === 'purple-sign' &&
        'flex items-center justify-center bg-purple-700 text-white px-6 py-4 w-[448px] h-[58px] rounded-md',
      variant === 'white-sign' &&
        'flex items-center justify-center bg-white px-6 py-4 w-[448px] h-[58px] rounded-md border border-gray-300',
    ]"
  >
    <slot></slot>
    {{ text }}
  </button>
</template>
<script>
export default {
  name: "TheButton",
  props: {
    variant: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.variant {
  cursor: pointer;
}
</style>
