export const updatedSince = (
  nowEpochMs: number,
  dateEpochMs: number,
  tTimeUnits: Function,
) => {
  const ago = tTimeUnits('ago');

  const seconds = Math.floor((nowEpochMs - dateEpochMs) / 1000);

  let interval = Math.floor(seconds / 31536000);
  if (interval > 1) {
    return `${interval} ${tTimeUnits('years')}${ago}`;
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return `${interval} ${tTimeUnits('months')}${ago}`;
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return `${interval} ${tTimeUnits('days')}${ago}`;
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return `${interval} ${tTimeUnits('hours')}${ago}`;
  }
  interval = Math.floor(seconds / 60);
  if (interval >= 1) {
    return `${interval} ${tTimeUnits('minutes')}${ago}`;
  }
  return `${seconds} ${tTimeUnits('seconds')}${ago}`;
};
