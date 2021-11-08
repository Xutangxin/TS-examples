// Student是一个接口注意属性用;间隔
interface Student {
    name: string;
    score: number;
    sex?: string;
    // 添加任意值
    [propname: string]: any;
    // 添加方法
    study(): string
}
// 定义一个对象
const stu = {
    name: 'jake',
    score: 68,
    sex: 'male',
    hobby: 'reading',
    study() {
        return '我正在学习';
    },
    play() {
        return 'I like play video games';
    }
}
// 一个受Student接口制约的类
class Idiot implements Student {
    name = '傻子';
    score = 22;
    study() {
        return '我是个傻子';
    }

}

// 接口继承
interface Boy extends Student {
    // 接口Boy自定义的方法约束
    play(): string;
}

// 一个使用接口的函数
const isPass = (student: Student) => {
    student.score >= 60 && console.log(student.name + '考试通过');
    student.score < 60 && console.log(student.name + '考试没有通过');
    student.sex && console.log(student.name + '的性别是' + student.sex);
    student.hobby && console.log(student.name + '的爱好是' + student.hobby);

}
// 另一个使用接口的函数
const getScore = (student: Boy) => {
    console.log(student.name + '的分数是' + student.score);
    student.sex && console.log(student.name + '的性别是' + student.sex);
    student.play && console.log(student.play());


}
// 实例化一个Idiot类对象
const idiot = new Idiot();
console.log(idiot);
console.log(idiot.study());

isPass(stu);//jake考试通过
getScore(stu);//jake的分数是68
console.log(stu.study());
