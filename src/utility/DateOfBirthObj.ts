const day = (num: number) => {
  const arr = [];
  for(let i = 1; i <= num; i += 1) arr.push(`${i}`);
  return arr;
}
const year = (num: number) => {
  const arr = [];
  for(let i = 1900; i <= num; i += 1) arr.push(`${i}`);
  return arr;
}
export const DateOfBirthObj = {
    month: ['Janurary', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    day: day(31),
    year: year(2021),
}
