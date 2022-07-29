export default {
  kbitToBit: kbit => {
    return kbit * 1000;
  },
  kbToBit: kb => {
    return kb * 8000;
  },
  kibitToBit: kibit => {
    return kibit * 1024;
  },
  mbitToBit: mbit => {
    return mbit * 1e6;
  },
  mbToBit: mb => {
    return mb * 8e6;
  },
  mibitToBit: mibit => {
    return mibit * 1.049e6;
  },
  gbitToBit: gbit => {
    return gbit * 1e9;
  },
  gbToBit: gb => {
    return gb * 8e9;
  },
  gibitToBit: gibit => {
    return gibit * 1.074e9;
  },
  tbitToBit: tbit => {
    return tbit * 1e12;
  },
  tbToBit: tb => {
    return tb * 8e12;
  },
  tibitToBit: tibit => {
    return tibit * 1.1e12;
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
