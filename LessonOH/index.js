// -Arrow function
// const/let/var tenFunction = (parameter1, param2,...paramsN) => {
//     // code block
// }

// Viết 1 hàm tính tổng bằng cách sử dụng arrow function
// Input: 2,6
// Output: 8
const sum = (a, b) => {
	return a + b;
};

const tinhBinhPhuong = (n) => n ** 2;

// console.log(sum(2, 6));
// console.log(tinhBinhPhuong(6));
// Viết 1 hàm tính bình phương của 1 số n
// Input: 6
// Output: 36
// *Arrow function không có hoisting
// *Arrow function không có context
// logger();
// function logger() {
// 	console.log('Xin chào thế giới');
// }
// const logger = () => {
// 	console.log('Xin chào thế giới');
// };

// -Template literal: ``
const maLop = 'CIJSXYZ';
const diaChi = 'Hà Nội';
// const str = 'MindX ' + maLop + '\nHọc ở ' + diaChi;
const str = `MindX ${maLop}
Học ở ${diaChi}`;

// MindXCIJS84
// Học ở Thành Công
console.log(str);

// -Spread & Rest Operator
// -Destructuring
// -Module
// -Array function: map, filter, findIndex, find...
// -Tạo project trong reactjs
// -Component trong reactjs
