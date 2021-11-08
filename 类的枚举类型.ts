enum Status {
    CODING,
    PLAYING,
    SLEEPING,
}

function getStatus(status: any) {
    if (status === Status.CODING) {
        console.log('编码中');
    } else if (status === Status.PLAYING) {
        console.log('玩乐中');
    } else {
        console.log('睡觉中');
    }
}

getStatus(Status.CODING);
getStatus(Status.PLAYING);
getStatus(Status.SLEEPING);
console.log('----------------');

// 枚举类型具有对应值
getStatus(0);
getStatus(1);
getStatus(2);
console.log(Status.CODING);
console.log(Status.PLAYING);
console.log(Status.SLEEPING);
console.log('----------------');

// 可以直接通过下标来访问
console.log(Status[0]);
console.log(Status[1]);
console.log(Status[2]);


