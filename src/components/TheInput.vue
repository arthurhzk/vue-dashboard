<template>
  <div>
    <slot></slot>
    <input
      @input="handleChange"
      :class="[
        variant === 'sign-input' &&
          'px-6 py-4 w-[448px] h-[58px] rounded-md outline-none ',
      ]"
      :placeholder="placeholder"
      :type="type"
    />
  </div>
</template>

<script>
export default {
  name: "TheInput",
  props: {
    placeholder: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    variant: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleChange(event) {
      this.$emit("change", event.target.value);
    },
  },
};
</script>
