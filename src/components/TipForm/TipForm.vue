<template>
  <div>
    <form>
      <number-input label="Bill" placeholder="0" image="dollar" />
      <tip-percentage
        class="mt-9"
        @tip-percent="(tipPercent) => SET_TIP(tipPercent)"
      />
      <number-input
        class="mt-9"
        label="Number of People"
        placeholder="0"
        image="person"
      />
    </form>
  </div>
</template>

<script>
import { SET_BILL, SET_TIP, SET_PERSONS } from "@/store";

import NumberInput from "@/components/TipForm/NumberInput.vue";
import TipPercentage from "@/components/TipForm/TipPercentage.vue";

import { mapMutations } from "vuex";
import { mapState } from "vuex";

export default {
  name: "TipForm",
  components: {
    NumberInput,
    TipPercentage,
  },
  props: {
    reset: {
      type: Boolean,
    },
  },
  emits: ["CalculatedTip"],
  computed: {
    ...mapState(["bill", "tip", "persons"]),
  },
  methods: {
    ...mapMutations([SET_BILL, SET_TIP, SET_PERSONS]),
  },
};
</script>
