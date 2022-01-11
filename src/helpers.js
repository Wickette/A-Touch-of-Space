export const formatDate = (date) =>
  date.toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric'});

export const formatTemperature = (temperature, isMetric) => {
  let returnTemp = temperature;
  if (!isMetric) {
    returnTemp = (temperature - 32) * (5 / 9);
  }
  return Math.round(returnTemp);
};