let arr = [2025, 12, 31];
function month() {
  return new Date().getMonth();
}
function day() {
  return new Date().getDay();
}
let [year, month = month(), day = day()] = arr;
