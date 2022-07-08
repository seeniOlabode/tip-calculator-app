<template>
  <div>
    <label
      for=""
      class="text-brand-very-dark-cyan tracking-tighter text-base"
      >{{ label }}</label
    >
    <div
      class="bg-brand-very-light-grayish-cyan flex justify-between items-center rounded-lg mt-3 relative"
    >
      <span class="absolute left-4"
        ><img v-if="image === 'dollar'" :src="dollarImage" alt="" />
        <img v-else :src="personImage" alt=""
      /></span>
      <input
        type="number"
        :class="[
          'text-right',
          'bg-transparent',
          'text-2xl',
          'text-brand-very-dark-cyan',
          'outline-none',
          'py-3',
          'px-4',
          'w-full',
          'h-full',
          'rounded-lg',
          'focus-within:outline-brand-strong-cyan',
          errorState,
        ]"
        :placeholder="placeholder"
        :value="dataBind"
        @input="($event) => handleInput($event)"
      />
      <p v-show="errorState.error" class="absolute right-0 -top-9 text-red-600">
        Invalid value
      </p>
    </div>
  </div>
</template>

<script>
import { SET_BILL } from "@/store";
import { SET_PERSONS } from "@/store";
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  name: "NumberInput",
  props: {
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState(["reset", "persons", "bill"]),
    dollarImage() {
      const imageUrl = require("@/assets/images/icon-dollar.svg");
      return imageUrl;
    },
    personImage() {
      const imageUrl = require("@/assets/images/icon-person.svg");
      return imageUrl;
    },
    dataBind() {
      let data;
      if (this.image === "person") {
        data = this.persons;
      } else if (this.image === "dollar") {
        data = this.bill;
      }
      return data;
    },
    errorState() {
      return {
        error:
          (this.dataBind == "0" ? true : false) ||
          parseInt(this.dataBind) <= 0 ||
          typeof parseInt(this.dataBind) != "number",
      };
    },
  },
  methods: {
    ...mapMutations([SET_BILL, SET_PERSONS]),
    ...mapActions(["CLEAR_CALCULATOR"]),
    handleInput($event) {
      if (!(this.image === "person")) {
        this.SET_BILL($event.target.value);
      } else {
        this.SET_PERSONS($event.target.value);
      }
    },
  },
};
</script>

<style scoped>
.error {
  @apply outline-red-600 !important;
}
</style>
