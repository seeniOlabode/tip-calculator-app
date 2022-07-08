<template>
  <img src="@/assets/images/logo.svg" alt="" class="mx-auto mt-20" />
  <tip-calculator class="mt-20 bg-brand-white h-full" />
</template>

<script>
import TipCalculator from "@/components/TipCalculator.vue";

export default {
  name: "App",
  components: {
    TipCalculator,
  },
};
</script>

<style>
#app {
  font-family: "Space Mono", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @apply bg-brand-light-grayish-cyan absolute top-0 w-full;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
