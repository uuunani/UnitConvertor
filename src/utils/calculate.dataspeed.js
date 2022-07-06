export default {
  kbitToBit: bit => {
    return bit * 1000;
  },
  kbToBit: bit => {
    return bit * 8000;
  },
  kibitToBit: bit => {
    return bit * 1024;
  },
  mbitToBit: bit => {
    return bit * 1e6;
  },
  mbToBit: bit => {
    return bit * 8e6;
  },
  mibitToBit: bit => {
    return bit * 1.049e6;
  },
  gbitToBit: bit => {
    return bit * 1e9;
  },
  gbToBit: bit => {
    return bit * 8e9;
  },
  gibitToBit: bit => {
    return bit * 1.074e9;
  },
  tbitToBit: bit => {
    return bit * 1e12;
  },
  tbToBit: bit => {
    return bit * 8e12;
  },
  tibitToBit: bit => {
    return bit * 1.1e12;
  },
  bitToKbit: bit => {
    return parseFloat((bit / 1000).toExponential(4));
  },
  bitToKb: bit => {
    return parseFloat((bit / 8000).toExponential(4));
  },
  bitToKibit: bit => {
    return parseFloat((bit / 1024).toExponential(4));
  },
  bitToMbit: bit => {
    return parseFloat((bit / 1e6).toExponential(4));
  },
  bitToMb: bit => {
    return parseFloat((bit / 8e6).toExponential(4));
  },
  bitToMibit: bit => {
    return parseFloat((bit / 1.049e6).toExponential(4));
  },
  bitToGbit: bit => {
    return parseFloat((bit / 1e9).toExponential(4));
  },
  bitToGb: bit => {
    return parseFloat((bit / 8e9).toExponential(4));
  },
  bitToGibit: bit => {
    return parseFloat((bit / 1.074e9).toExponential(4));
  },
  bitToTbit: bit => {
    return parseFloat((bit / 1e12).toExponential(4));
  },
  bitToTb: bit => {
    return parseFloat((bit / 8e12).toExponential(4));
  },
  bitToTibit: bit => {
    return parseFloat((bit / 1.1e12).toExponential(4));
  },
};
