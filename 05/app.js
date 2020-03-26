import Programmer from "./classes/Programmer";
import Junior from "./classes/Junior";
import Mid from "./classes/Mid";
import Senior from "./classes/Senior";

const features = {
  skills: 10,
  experience: 10,
  willingness: 10
};

const task1 = {
  difficult: 1,
  size: 1
};
const task2 = {
  difficult: 2,
  size: 2
};
const task3 = {
  difficult: 3,
  size: 3
};

const junior = new Junior();
const mid = new Mid(30, 55, 70);
const senior = new Senior(90, 90, 60);

const programmer1 = new Programmer(junior);
const time1 = programmer1.getApproximateTimeTaskDoneInHours(task1);
const programmer2 = new Programmer(mid);
const time2 = programmer2.getApproximateTimeTaskDoneInHours(task2);
const programmer3 = new Programmer(senior);
const time3 = programmer3.getApproximateTimeTaskDoneInHours(task3);

{
  console.log("Approximate Time for Junior", time1);
  console.log("Approximate Time for Mid", time2);
  console.log("Approximate Time for Senior", time3);
  console.log("Junior", programmer1);
  console.log("Mid", programmer2);
  console.log("Senior", programmer3);
}
