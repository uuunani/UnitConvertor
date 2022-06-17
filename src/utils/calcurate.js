export default {
  plus: (_amt1, _amt2) => {
    return (parseFloat(_amt1) + parseFloat(_amt2)).toFixed(2);
  },
  minus: (_amt1, _amt2) => {
    return (parseFloat(_amt1) - parseFloat(_amt2)).toFixed(2);
  },
  percent: (_amt, _percentAmt) => {
    return ((parseFloat(_percentAmt) / parseFloat(_amt)) * 100).toFixed(2);
  },
  percentAmt: (_amt, _percent) => {
    const amt = parseFloat(_amt);
    const percent = parseFloat(_percent);
    return ((amt / 100) * percent).toFixed(2);
  },
  roundDecimal: (_amt, _point) => {
    const amt = parseFloat(_amt);
    const point = parseInt(_point, 10);
    if (point > 0) {
      const result = amt.toFixed(point);
      return result;
    }
    return amt.toFixed(2);
  },
};
