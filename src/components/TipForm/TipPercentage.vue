<template>
  <div @click="emitPercentage">
    <label for="" class="text-brand-very-dark-cyan tracking-tighter text-base"
      >Select Tip %</label
    >
    <div class="flex flex-row flex-wrap gap-4 mt-3">
      <tip-button
        v-for="tip in tipValues"
        :key="tip"
        :value="tip.toString()"
        :class="isSelected(tip)"
        @tip-value="(value) => (TipPercent = value)"
      />
      <input
        type="number"
        max="100"
        min="1"
        placeholder="Custom"
        class="text-right text-brand-very-dark-cyan bg-brand-light-grayish-cyan rounded px-4 basis-5/12 flex-grow text-xl w-16 outline-none focus-within:outline-brand-strong-cyan desk:basis-1/4"
        @input="customPercent"
      />
    </div>
  </div>
</template>

<script>
import TipButton from "./TipButton.vue";
import { mapState } from "vuex";

export default {
  name: "TipPercentage",
  components: { TipButton },
  emits: ["TipPercent"],
  data() {
    return {
      TipPercent: "",
      tipValues: [5, 10, 15, 25, 50],
    };
  },
  computed: {
    ...mapState(["tip"]),
  },
  methods: {
    isSelected(value) {
      return {
        selected: value.toString() === this.tip,
      };
    },
    customPercent($event) {
      this.TipPercent = $event.target.value;
      this.emitPercentage();
    },
    emitPercentage() {
      this.$emit("TipPercent", this.TipPercent);
    },
  },
};
</script>

<style scoped>
.selected {
  @apply text-brand-very-dark-cyan bg-brand-strong-cyan;
}
</style>
