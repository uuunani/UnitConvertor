export default {
  bitToByte: bit => {
    return bit / 8;
  },
  kbToByte: kb => {
    return kb * 1024;
  },
  mbToByte: mb => {
    return mb * 1024 * 1024;
  },
  gbToByte: gb => {
    return gb * 1024 * 1024 * 1024;
  },
  tbToByte: tb => {
    return tb * 1024 * 1024 * 1024 * 1024;
  },
  pbToByte: pb => {
    return pb * 1024 * 1024 * 1024 * 1024 * 1024;
  },
  ebToByte: eb => {
    return eb * 1024 * 1024 * 1024 * 1024 * 1024 * 1024;
  },
  byteToBit: byte => {
    return parseFloat((byte * 8).toFixed(6));
  },
  byteToKB: byte => {
    return parseFloat((byte / 1024).toFixed(6));
  },
  byteToMB: byte => {
    return parseFloat((byte / (1024 * 1024)).toFixed(6));
  },
  byteToGB: byte => {
    return parseFloat((byte / (1024 * 1024 * 1024)).toFixed(6));
  },
  byteToTB: byte => {
    return parseFloat((byte / (1024 * 1024 * 1024 * 1024)).toFixed(6));
  },
  byteToPB: byte => {
    return parseFloat((byte / (1024 * 1024 * 1024 * 1024 * 1024)).toFixed(6));
  },
  byteToEB: byte => {
    return parseFloat(
      (byte / (1024 * 1024 * 1024 * 1024 * 1024 * 1024)).toFixed(6),
    );
  },
};
