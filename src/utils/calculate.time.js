export default {
  minToSec: min => {
    return min * 60;
  },
  hourToSec: hour => {
    return hour * 3600;
  },
  dayToSec: day => {
    return day * 86400;
  },
  secToMin: sec => {
    return parseInt(sec / 60, 10);
  },
  secToHour: sec => {
    return parseInt(sec / 3600, 10);
  },
  secToDay: sec => {
    return parseInt(sec / 86400, 10);
  },
  amtToSec: amount => {
    return parseInt(((amount % 86400) % 3600) % 60, 10);
  },
  amtToMin: amount => {
    return parseInt(((amount % 86400) % 3600) / 60, 10);
  },
  amtToHour: amount => {
    return parseInt((amount % 86400) / 3600, 10);
  },
  amtToDay: amount => {
    return parseInt(amount / 86400, 10);
  },
};
