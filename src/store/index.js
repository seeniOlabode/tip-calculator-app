import { createStore } from "vuex";
import { calculateTip } from "@/calculateTip";

export const SET_BILL = "SET_BILL";
export const SET_TIP = "SET_TIP";
export const SET_PERSONS = "SET_PERSONS";
export const SET_RESULTS = "SET_RESULTS";
export const RESET_TRUE = "RESET_TRUE";
export const RESET_FALSE = "RESET_FALSE";
export const CLEAR_CALCULATOR = "CLEAR_CALCULATOR";

export const state = () => {
  return {
    bill: "",
    tip: "",
    persons: "",
    reset: false,
    results: {
      tipPerPerson: "",
      totalPerPerson: "",
    },
  };
};

export const mutations = {
  [SET_BILL](state, newValue) {
    state.bill = newValue;
  },
  [SET_TIP](state, newValue) {
    state.tip = newValue;
  },
  [SET_PERSONS](state, newValue) {
    state.persons = newValue;
  },
  [SET_RESULTS](state, resetValue) {
    if (resetValue === "reset") {
      state.results.totalPerPerson = "";
      state.results.tipPerPerson = "";
    } else {
      const newValue = calculateTip(state.tip, state.bill, state.persons);
      state.results = newValue;
    }
  },
  [RESET_TRUE](state) {
    state.reset = true;
  },
  [RESET_FALSE](state) {
    state.reset = false;
  },
};

export const actions = {
  [CLEAR_CALCULATOR]: (context) => {
    context.commit(RESET_TRUE);
    context.commit(SET_BILL, "");
    context.commit(SET_TIP, "");
    context.commit(SET_PERSONS, "");
    context.commit(SET_RESULTS, "reset");
    setTimeout(() => {
      context.commit(RESET_FALSE);
    }, 200);
  },
};

export default createStore({
  state,
  mutations,
  actions,
});
