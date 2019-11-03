// var imp = require('./cow')
// var name  = 'chaloemphong'
// console.log(imp.cow())

// var str = "hello"
// var str2 = 'world !! '
// var str3 = `''""'"`

// var fullstr = str + str2
// var templatestr = `${str}  ${str2}`


// var str = ''
// var str2 = 'g'

// var arr1 = []
// var arr2 = [6,7,8,9]


// console.log(Boolean(0.00))


// var arr2 = [1,2,3]
// var arr = [1,1.0,"fdsfds" , true , arr2]

// console.log(arr[4][0])

// function sum1(x,y){
//     console.log(x+y) 
//     return 
// }

// function sum2(x,y){
//     return x+y
// }

// var fn1 = sum1(1,2)
// var fn2 = sum2(1,2)


// console.log(fn1)
// console.log(fn2)

// var arr = [function sum(x,y){
//     return x+y
// },function multi(x,y){
//     return x*y
// }]

// console.log(arr[0](5,5))


// var date = new Date()
// console.log(date.get())

// var obj = {
//     firstname: "Chaloemphong",
//     lastname: "Nima",
//     money: 50,
//     fullname: this.firstname + ' '+ this.lastname
// }

// console.log(obj["money"])
// console.log(`${obj["fullname"]}`)

// var money = 39

// if(money < 40){
//     console.log('lees than 40')
// } else if(money < 50){
//     console.log('less than 50')
// }else{
//     console.log("more than 49")
// }


// var score = process.argv[2]
// let  grade = "คะแนนไม่ถูกต้อง"
// if(score <=100 && score >= 0){
//     if(score >= 80){
//         grade = 'A'
//     }else if(score >= 70){
//         grade = 'B'
//     }else if(score >= 60){
//         grade = 'C'
//     }else if(score >= 50){
//         grade = 'D'
//     }else{
//         grade = 'F'
//     }
//     console.log(grade)
// } else{
//     console.log(grade)
// }

// for(let i = 0; i < 10 ; i++)
//     console.log(i)

// var obj = {
//     firstname: 'chaloemphong',
//     lastname: 'nima',
//     money: 50
// }

// for(key in obj)
//     console.log(`${key} =  ${obj[key]}`)

// var arr = [1,2,3,4,5]
// arr.forEach(item => {
//    console.log(item) 
// });

// for(let i = 0; i < arr.length ; i++)
//     console.log(arr[i])



var arr = [4,9,16,25,29]

var index = arr.findIndex(item =>{
    return item > 24 //return index
})

// when return condition will be return true or false 
var number = arr.map(item=>{
    // return item+5
    return item < 10
})

// when return condition will be return values
var newarr = arr.filter(item=>{
    return item > 10
});

var arrreduce = arr.reduce((prev , curr )=>{
    return prev = prev+curr
} , 0)


// will be retun true if every item more than 10
var eve = arr.every(item =>{
    return item > 10
})

// will be retun true if some item more than 10
var some = arr.some(item=>{
    return item > 10
})



// ES6 - 2015
function sum(x,y = 10){
    return x+y
}

let person = {
    age: 24,
    gender: 'male',
    name:{
        firstname: 'john',
        lastname: 'doe'
    }
}

// oldway
// var age = person.age
// var gender = person,gender
// var firstname = person.name.firstname
// var lastname = person.name.lastname


// Destructuring
const {age,gender,name:{firstname,lastname}} = person

// spread operator
var arr1 = [1,2,3]
var arr2 = [4,5,6]
var sumarr = [...arr1,...arr2]

var obj1 = {
    firstname:'chaloemphongs'
}
var obj2 = {
    lastname:'nima'
}
var sumobj = {...obj1 , ...obj2}

function sum(...rest){
    return rest.reduce((prev , curr)=>{return prev = prev + curr} , 0)
}

function max(...rest){
    return  rest.reduce((prev , curr)=>{
        if(max > prev)
            return max
        else
            return prev
    })
}

function min(...rest){
    return  rest.reduce((prev , curr)=>{
        if(prev < curr)
            return prev
        else
            return curr
    })
}


// console.log(max(10,1,2,3))


function fn1(){
    return 'this is func'
}
const fn2 = (x)=>{
    return x
}  //const fn2 = x=>x

const fn3 = ()=> 'this is arrow func2'

function func1(){
    this.color = 'red'
    let _ = this
    setTimeout(function() {
        console.log(_.color)
    }, 100);

    setTimeout(() => {
        console.log(this.color)
    }, 200);
}

const funcPro1 =  ()=>{
   return new Promise((resolve , reject)=>{
        setTimeout(() => {
            resolve( console.log('this is func 1 '))
        }, 300);
   })
}

const funcPro2 =  ()=>{
    return new Promise((resolve , reject)=>{
        setTimeout(() => {
            resolve(console.log('this is func 2 '))
        }, 200);
   })
}

const funcPro3 =  ()=>{
    return new Promise((resolve , reject)=>{
        setTimeout(() => {
            resolve( console.log('this is func 3 '))
        }, 100);
   })
}



const funcPro = ()=>{
    funcPro1().then(()=>{
        funcPro2().then(()=>{
            funcPro3()
        }).catch(err => {
            console.log(err)
        })
    }).catch(err => {
        console.log('error = '+ err)
    })
}



const fn = async()=>{
    try{
        await funcPro1()
        await funcPro2()
        funcPro3()
    }catch(error){
        console.log('error = ' + error)
    }
}

// fn()



const fntime1 = (x) =>{
    return new Promise((resolve , reject)=>{
        setTimeout(() => {
          if(x){
            resolve(x)
          }else{
              reject('Error Not  Found x from func 1 ')
          }
        }, x);
    })
}


const fntime2 = (x) =>{
    x+= 150
    return new Promise((resolve , reject)=>{
        setTimeout(() => {
            if(x){
                resolve(x)
              }else{
                  reject('Error Not  Found x from func 2')
              }
        }, 150);
    })
}


const fntime3 = (x) =>{
    x+= 200
    return new Promise((resolve , reject)=>{
        setTimeout(() => {
            if(x){
                resolve( console.log('finishtime '+ x+'ms'))
              }else{
                  reject('Error Not  Found x from func 3')
              }
        }, 200);
    })
}





const fx= async()=>{

    // fntime1(100).then((x)=>{
    //     fntime2(x).then((x)=>{
    //         fntime3(x)
    //     }).catch(err => {
    //         console.log(err)
    //     })
    // }).catch(err => {
    //     console.log('error = '+ err)
    // })

    try{
        let func1 = await fntime1(100)
        let func2 = await fntime2(func1)
        fntime3(func2)
    }catch(error){
        console.log('error = ' + error)
    }
}


fx()


