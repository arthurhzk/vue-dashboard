<template>
  <i
    :class="[
      icon === 'envelope' && 'fa fa-envelope text-gray-500',
      icon === 'lock' && 'fa fa-lock text-gray-500',
      icon === 'google' && 'fa-brands fa-google text-orange-500',
      icon === 'search' && 'fa fa-search text-gray-500',
    ]"
  ></i>
</template>

<script>
export default {
  name: "TheIcon",
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>
