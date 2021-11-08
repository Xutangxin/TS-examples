enum MyStatus {
    CODING,
    PLAYING,
    SLEEPING,
    EATING,
}

// console.log(MyStatus);

function getMyStatus(status: any): void {
    if (status === MyStatus.CODING) {
        console.log('编码中');
    } else if (status === MyStatus.PLAYING) {
        console.log('玩乐中');
    } else if (status === MyStatus.SLEEPING) {
        console.log('睡觉中');
    } else {
        console.log('吃饭中');
    }
}

getMyStatus(MyStatus.CODING);
console.log(MyStatus.CODING);
console.log(MyStatus[2]);



