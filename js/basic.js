// ตัวแปร: ใช้ const เป็นหลัก ใช้ let เมื่อต้องเปลี่ยนค่าทีหลัง
const label = "Temp-A";
let count = 0;
count = count + 1;
console.log(count);                      // 1

// object: กลุ่มข้อมูลที่มีชื่อกำกับ (key: value)
const sensor = { id: 1, name: "Temp-A", value: 72.5, online: true };
console.log(sensor.name);                // Temp-A
console.log(sensor.value > 70);          // true

// template literal: แทรกค่าตัวแปรลงในข้อความด้วย backtick และ ${}
console.log(`${sensor.name}: ${sensor.value}`);   // Temp-A: 72.5

// arrow function: รับค่าทางซ้ายของ => คืนค่าทางขวา
const double = (n) => n * 2;
console.log(double(4));                  // 8

// destructuring: ดึงค่าออกจาก object มาเป็นตัวแปร
const { name, value } = sensor;
console.log(name, value);                // Temp-A 72.5

// array ของ object: รูปแบบข้อมูลที่เจอบ่อยที่สุดจาก API
const list = [{ name: "A" }, { name: "B" }];
console.log(list.length);                // 2
console.log(list[0].name);               // A
