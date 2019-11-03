var dataimp = require('./lib/data')
var students = dataimp.students

for(data in dataimp.students){
    const {id,firstname,lastname,age} = dataimp.students[data]
    var obj = {
        'id': id,
        'fistname': firstname,
        'lastname': lastname,
        'age':age
    }
    // console.log(obj)
}

var newarr = students.filter(item=>{
    return item.id > 4
});

// console.log(newarr)

var newarr = students.filter(item=>{
    return item.money >=500 && item.money <= 1000
})

// console.log(newarr)


var newarr = students.filter(item=>{
    for (x in item.firstname){
        if(item.firstname[x] === 'N'){
            return item
        }
    }
})

// if(newarr.length > 0){
//     console.log(newarr)
// }else{
//     console.log("ไม่พบข้อมูล")
// }

var newarr = students.filter(item=>{
    return item.lastname === 'pizza'
})

// if(newarr.length > 0){
//     console.log(newarr)
// }else{
//     console.log("ไม่พบข้อมูล")
// }






var arrreduce = students.reduce((prev , curr )=>{
    if(prev.money < curr.money)
        return prev
    else
        return curr
})

arrreduce.money = arrreduce.money*2

// console.log(arrreduce)


var newarr = students.filter(item=>{
    item["fullname"] = item.firstname + ' ' + item.lastname
    return item
})

// console.log(newarr)

newarr.sort((a, b) => (a.age > b.age) ? 1 : -1)

console.log(newarr.sort((a, b) => (a.age < b.age) ? 1 : -1))



var newarr = students.filter(item=>{
    var  score =  item.score
    let  grade = "คะแนนไม่ถูกต้อง"
    if(score <=100 && score >= 0){
        if(score >= 80){
            grade = 'A'
        }else if(score >= 70){
            grade = 'B'
        }else if(score >= 60){
            grade = 'C'
        }else if(score >= 50){
            grade = 'D'
        }else{
            grade = 'F'
        }
    }

    item["grade"] = grade
    return item
})

// console.log(newarr)










   














   