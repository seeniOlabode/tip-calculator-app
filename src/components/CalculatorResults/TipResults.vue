<template>
  <div
    class="bg-brand-very-dark-cyan rounded-2xl px-8 py-10 flex items-center flex-wrap h-full desk:items-start"
  >
    <div class="flex justify-between items-center basis-full">
      <div class="flex flex-wrap content-between gap-1">
        <h2 class="text-brand-white basis-full">Tip Amount</h2>
        <span class="text-brand-dark-grayish-cyan text-xs basis-full"
          >/ person</span
        >
      </div>
      <div class="text-brand-strong-cyan text-3xl desk:text-5xl">
        ${{ tipPerResults ? tipPerResults : 0 }}
      </div>
    </div>

    <div class="flex justify-between items-center mt-5 basis-full desk:mt-0">
      <div class="flex flex-wrap content-between gap-1">
        <h2 class="text-brand-white basis-full">Total</h2>
        <span class="text-brand-dark-grayish-cyan text-xs basis-full"
          >/ person</span
        >
      </div>
      <div class="text-brand-strong-cyan text-3xl desk:text-5xl">
        ${{ totalPerResults ? totalPerResults : 0 }}
      </div>
    </div>
    <button
      class="bg-brand-strong-cyan text-brand-very-dark-cyan w-full rounded mt-14 py-4 text-lg uppercase hover:opacity-75 basis-full desk:self-end"
      @click="CLEAR_CALCULATOR()"
    >
      Reset
    </button>
  </div>
</template>

<script>
import { SET_RESULTS } from "@/store";
import { CLEAR_CALCULATOR } from "@/store";
import { mapMutations } from "vuex";
import { mapState } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "TipResults",
  emits: ["reset"],
  computed: {
    ...mapState(["results"]),
    tipPerResults() {
      this.SET_RESULTS;
      return this.results.tipPer;
    },
    totalPerResults() {
      this.SET_RESULTS();
      return this.results.totalPer;
    },
  },
  methods: {
    ...mapMutations([SET_RESULTS]),
    ...mapActions([CLEAR_CALCULATOR]),
  },
};
</script>
