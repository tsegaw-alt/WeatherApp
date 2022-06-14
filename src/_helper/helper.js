export const historyDates = () => {
  const currentDate = new Date();
  const historyDate = new Date();
  const nextWeek = new Date(currentDate.getTime() + 4 * 24 * 60 * 60 * 1000);
  const historyDays = [];
  while (currentDate <= nextWeek) {
    currentDate.setDate(currentDate.getDate() + 1);
    historyDate.setDate(historyDate.getDate() - 1);
    const historyDay = Math.floor(historyDate.getTime() / 1000);
    historyDays.push(historyDay);
  }
  return historyDays;
};

export const WeatherweeklyDays = () => {
  const weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let days = [];
  let newWeek =[]
  let currentDate = new Date();
  let nextWeek = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000);
  while (currentDate <= nextWeek) {
    days.push(new Date(currentDate).getDay());
    currentDate.setDate(currentDate.getDate() + 1);

  }
  days.pop();

  for (let i = 0; i < days.length; i++) {
    newWeek.push(weekDay[days[i]]);
  }
  return newWeek;
};


export const formatDate = (dt) =>  {
const date = new Date(dt * 1000);
const formattedDate =  date.toDateString() ;
return formattedDate
}

export const formatTime = (time) => {
  const dtFormat = new Intl.DateTimeFormat('en-GB', {
    timeStyle: 'medium',
    timeZone: 'UTC'
  });
  
  return dtFormat.format(new Date(time * 1e3));
}
