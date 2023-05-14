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
// const maLop = 'CIJSXYZ';
// const diaChi = 'Hà Nội';
// // const str = 'MindX ' + maLop + '\nHọc ở ' + diaChi;
// const str = `MindX ${maLop}
// Học ở ${diaChi}`;

// // MindXCIJS84
// // Học ở Thành Công
// console.log(str);

// -Spread & Rest Operator
// Một số ứng dụng với spread operator:

// - Sao chép array, object
// const num1 = [1, 2, 3];
// const num2 = [...num1];
// num2[2] = 33;
// console.log(num1);
// console.log(num2);
// - Gộp array, object
const nameAndAge = { name: 'Nguyễn Văn A', age: 18 };
const gpa = { gpa: 4.0 };
const student = {
	...nameAndAge,
	...gpa,
};
// console.log(student);

const student1 = { name: 'Nguyễn Văn A', age: 18, gpa: 3.9 };
const student2 = { name: 'Đỗ Văn B', age: 19 };
// const student3 = {...student1, ...student2};
// {
//     gpa: 3.9,
//     name: 'Đỗ Văn B', age: 19
// }
// console.log(student3);

// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3];
// - Thêm phần tử vào array, thêm key vào object.
// const arr3 = [4, 5, 6, ...arr1, ...arr2];
// console.log(arr3);
const student3 = { gpa: 3, ...student1, ...student2, gender: 'Boy' };

console.log(student3);

// -Destructuring
// -Module
// -Array function: map, filter, findIndex, find...
// -Tạo project trong reactjs
// -Component trong reactjs
