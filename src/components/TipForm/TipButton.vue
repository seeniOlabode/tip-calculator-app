<template>
  <button
    class="bg-brand-very-dark-cyan rounded text-brand-white py-3 basis-5/12 flex-grow text-2xl desk:basis-1/4"
    type="button"
    @click="$emit('TipValue', value)"
  >
    {{ value }}%
  </button>
</template>

<script>
export default {
  name: "TipButton",
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  emits: ["TipValue"],
};
</script>
