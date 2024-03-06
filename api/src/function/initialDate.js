export const return_date = () => {
  const currentDate = new Date();
  const weekDayNumber = currentDate.getDay();
  const weekDay = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const formatteddate = `${year}-${month < 10 ? "0" : ""}${month}-${weekDay < 10 ? "0" : ""}${weekDay}`;
  return {
    weekDayNumber,
    formatteddate,
  };
};
