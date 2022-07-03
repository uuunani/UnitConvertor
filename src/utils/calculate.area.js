export default {
  m2ToA: m2 => {
    return m2 / 100;
  },
  aToM2: value => {
    return value * 100;
  },
  m2ToHa: m2 => {
    return m2 / 10000;
  },
  haToM2: value => {
    return value * 10000;
  },
  m2ToKm2: m2 => {
    return m2 / 1e6;
  },
  km2ToM2: value => {
    return value * 1e6;
  },
  m2ToMi2: m2 => {
    return m2 / 2.59e6;
  },
  mi2ToM2: value => {
    return value * 2.59e6;
  },
  m2ToFt2: m2 => {
    return m2 * 10.764;
  },
  ft2ToM2: value => {
    return value / 10.764;
  },
  m2ToYd2: m2 => {
    return m2 * 1.196;
  },
  yd2ToM2: value => {
    return value / 1.196;
  },
  m2ToAc: m2 => {
    return (m2 / 4047).toFixed(6);
  },
  acToM2: value => {
    return (value * 4047).toFixed(6);
  },
  m2ToPbj: m2 => {
    return m2 * 10.89;
  },
  pbjToM2: value => {
    return value / 10.89;
  },
  m2ToPyeong: m2 => {
    return (m2 / 3.306).toFixed(1);
  },
  pyeongToM2: value => {
    return (value * 3.306).toFixed(1);
  },
  m2ToDanbo: m2 => {
    return (m2 / 991.7).toFixed(6);
  },
  danboToM2: value => {
    return (value * 991.7).toFixed(6);
  },
  m2ToJeongbo: m2 => {
    return (m2 / 9991.7).toFixed(6);
  },
  jeongboToM2: m2 => {
    return (m2 * 9991.7).toFixed(6);
  },
};
