import Vue from 'vue'

const months = [
  "JANUÁR",
  "FEBRUÁR",
  "MÁRCIUS",
  "ÁPRILIS",
  "MÁJUS",
  "JÚNIUS",
  "JÚLIUS",
  "AUGUSZTUS",
  "SZEPTEMBER",
  "OKTÓBER",
  "NOVEMBER",
  "DECEMBER"
];

const dateFilter = value => {
  return formatDate(value);
};

function formatDate(inputDate) {
  const date = new Date(inputDate);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const formattedDate = day + ". " + months[month] + " " + year;
  return formattedDate;
}

Vue.filter('date', dateFilter)