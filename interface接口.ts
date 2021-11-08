// // Student是一个接口注意属性用;间隔
// interface Student {
//     name: string;
//     score: number;
//     sex?: string
// }
// // 定义一个对象
// const stu = {
//     name: 'jake',
//     score: 68,
//     sex: 'male'
// }
// // 一个使用接口的函数
// const isPass = (student: Student) => {
//     student.score >= 60 && console.log(student.name + '考试通过');
//     student.score < 60 && console.log(student.name + '考试没有通过');
//     student.sex && console.log(student.name + '的性别是' + student.sex);


// }
// // 另一个使用接口的函数
// const getScore = (student: Student) => {
//     console.log(student.name + '的分数是' + student.score);
//     student.sex && console.log(student.name + '的性别是' + student.sex);

// }

// isPass(stu);//jake考试通过
// getScore(stu);//jake的分数是68