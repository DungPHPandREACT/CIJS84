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
// const student3 = { gpa: 3, ...student1, ...student2, gender: 'Boy' };

// console.log(student3);

// Viết hàm tính tổng của các số được truyền vào
// Input 1,2,3
// Output 6
// Input 1,2,3,4,5
// Output: 15
// const sumListNumber = (a, b = 0, ...listNumber) => {
// 	console.log(listNumber);
// 	console.log(a);
// 	console.log(b);
// };
// sumListNumber(1);
// -Destructuring
const teacher = {
	name: 'Trần Thị B',
	gender: 'girl',
};
// const nameTeacher = teacher.name;
// const gender = teacher.gender;
// const { gender, name: nameTeacher, age = 0 } = teacher;

// const listNumber = [1, 2, 3];
// const [, ...numbers] = listNumber;
// console.log(number0);
// console.log(number);
// console.log(numbers);

// -Array function: map, filter, findIndex, find...
// Bài 1: Cho một mảng A = [1,2,3,5] có các phần tử là số.
// Viết code trả về một mảng mới có giá trị là
// các phần tử trong mảng A * 2 (newArr[i] = A[i]*2)
//Output = [2,4,6,10]
// const A = [1, 2, 3, 5];
// Cách 1:
// const newArr = [];
// for (let i = 0; i < A.length; i++) {
// 	newArr.push(A[i] * 2);
// }
// console.log(newArr);

// Cach 2: su dung ham map

// const newArr = A.map((value, index) => value);
// console.log(newArr);
// Bài 2: Cho một mảng B = [1,2,3,4,5], viết code trả về mảng mới chứa
// các phần tử là số lẻ trong mảng B
// Output: newArr = [1,3,5]
const B = [1, 2, 3, 4, 5];
// const newArr = B.filter((value) => value >= 5);
// const index = B.find((value) => value > 2);
// console.log(index);

// -Module


// -Tạo project trong reactjs
// -Component trong reactjs
