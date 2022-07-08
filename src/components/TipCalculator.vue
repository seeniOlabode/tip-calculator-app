<template>
  <div
    class="px-9 py-10 pb-16 rounded-t-3xl h-full desk:grid desk:grid-cols-2 desk:gap-10 max-w-5xl mx-auto desk:items-center desk:py-10 desk:rounded-2xl desk:mb-16"
  >
    <tip-form class="mb-8 max-w-md mx-auto" />
    <tip-results
      class="deskLittle:aspect-square deskLittle:h-auto max-w-md mx-auto"
    />
  </div>
</template>

<script>
import TipForm from "@/components/TipForm/TipForm.vue";
import TipResults from "@/components/CalculatorResults/TipResults.vue";

export default {
  name: "TipCalculator",
  components: {
    TipForm,
    TipResults,
  },
};
</script>
