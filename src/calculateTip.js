export const calculateTip = (tip, bill, persons) => {
  let object = {
    tipPer: 0,
    totalPer: 0,
  };
  if (tip && bill && persons) {
    let factor = tip / 100 + 1;
    let totalPer = Math.ceil((bill * factor) / persons);
    let tipPer = Math.ceil((bill * factor - bill) / persons);
    object = {
      totalPer,
      tipPer,
    };
  }
  return object;
};
