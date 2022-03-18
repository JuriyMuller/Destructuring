func(["Иван", "Иванов", "отдел разработки", "программист", 2000]);
function func([name, surname, ...info]) {
  console.log(name);
  console.log(surname);
  console.log(...info);
}
