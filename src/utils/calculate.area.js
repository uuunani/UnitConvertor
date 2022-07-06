export default {
  aToM2: value => {
    return value * 100;
  },
  haToM2: value => {
    return value * 10000;
  },
  km2ToM2: value => {
    return value * 1e6;
  },
  mi2ToM2: value => {
    return value * 2.59e6;
  },
  ft2ToM2: value => {
    return value / 10.764;
  },
  yd2ToM2: value => {
    return value / 1.196;
  },
  acToM2: value => {
    return value * 4047;
  },
  pbjToM2: value => {
    return value / 10.89;
  },
  pyeongToM2: value => {
    return value * 3.306;
  },
  danboToM2: value => {
    return value * 991.7;
  },
  jeongboToM2: m2 => {
    return m2 * 9991.7;
  },
  m2ToA: m2 => {
    return parseFloat((m2 / 100).toExponential(4));
  },
  m2ToHa: m2 => {
    return parseFloat((m2 / 10000).toExponential(4));
  },
  m2ToKm2: m2 => {
    return parseFloat((m2 / 1e6).toExponential(4));
  },
  m2ToMi2: m2 => {
    return parseFloat((m2 / 2.59e6).toExponential(4));
  },
  m2ToFt2: m2 => {
    return parseFloat((m2 * 10.764).toExponential(4));
  },
  m2ToYd2: m2 => {
    return parseFloat((m2 * 1.196).toExponential(4));
  },
  m2ToAc: m2 => {
    return parseFloat((m2 / 4047).toExponential(4));
  },
  m2ToPbj: m2 => {
    return parseFloat((m2 * 10.89).toExponential(4));
  },
  m2ToPyeong: m2 => {
    return parseFloat((m2 / 3.306).toExponential(4));
  },
  m2ToDanbo: m2 => {
    return parseFloat((m2 / 991.7).toExponential(4));
  },
  m2ToJeongbo: m2 => {
    return parseFloat((m2 / 9991.7).toExponential(4));
  },
};
