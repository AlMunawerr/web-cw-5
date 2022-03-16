alert("Abbas");
console.log(16);
console.log("انا في الصف الحادي عشر");
console.log(
  "%c This is yellow text on a blue background.",
  "color:yellow; background-color:blue"
);
let budget = 20;
console.log(budget > 30 && budget < 80);
budget += 30;
console.log(budget > 30 && budget < 80);

let grade = prompt("What is your grade?");
if (grade >= 90) {
  console.log("قد حصلت على امتياز🥳");
} else if (grade >= 80) {
  console.log("🤩لقد حصلت على جيد جدا ");
} else if (grade >= 70) {
  console.log("🙂لقد حصلت على جيد");
} else if (grade >= 60) {
  console.log("😕لقد حصلت على مقبول");
} else if (grade >= 50) {
  console.log("☹️لقد حصلت على ضعيف ");
} else {
  console.log("💔راسب");
}
