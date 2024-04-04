export const nightCalculator = (dateRange) => {
  const checkInTime = new Date(dateRange[0]).getTime();
  const checkOutTime = new Date(dateRange[1]).getTime();
  const nightMili = checkOutTime - checkInTime;
  const millisecondsInDay = 24 * 60 * 60 * 1000;
  let totalNight = Math.ceil(nightMili / millisecondsInDay) || 0;
  return totalNight;
};
