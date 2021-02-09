let fruits=["oranges","mango","cassava","apples"]

let index=fruits.findIndex((item)=>item=="cassava")
let indexof=fruits.indexOf((item)=>item=="cassava")
index 
indexof 

let date=Date.now()
console.log(typeof(date))


let timer=document.querySelector(".Timer")


var d= new Date("2020-02-26 11:10");

let d2=date/(1000*60*60*60)

d2
let c=d.getTime()

console.log(c)


let d3=c-date

d3/(1000*60*60*60*60)
console.log(d3/(1000*60*60*60))

hours=d3%(1000*60*60*24)/(1000*60*60)
console.log(hours)

// minutes=d3%(1000*60*60)/

function  getTargetDate(){
	let currentDay = new Date()
	// console.log(currentDay.getFullYear();)
	let year = currentDay.getFullYear();
	let targetDate = new Date(`${year}/12/25 00:00:00`)

	return targetDate
}
 
function getDifference(){

	 var date1=new Date()

	 let date2 =getTargetDate()


	var diff=(date2-date1)/1000
	// console.log(diff)
	diff=Math.abs(Math.floor(diff))
	var days=Math.floor(diff/(24*60*60))

	days 
	var leftSec=diff-days*24*60*60
	var hrs=Math.floor(leftSec/(60*60))

	hrs 
	var leftSec=leftSec-(hrs*60*60)
	var minutes=Math.floor(leftSec/60)
	minutes
	var  leftSec=leftSec-(minutes*60)

	var seconds=leftSec<10? `0${leftSec}` :`${leftSec}`

	minutes=minutes<10? `0${minutes}` :`${minutes}`

	// leftSec

	// console.log(timer)

	console.log(`${days}days ${hrs}hrs`) 


	timer.innerHTML=`<span  class="days">Days:${days} </span><span class="hours">Hours:${hrs}</span><span class="minutes"> Minutes:${minutes} </span><span class="seconds">Seconds ${seconds}</span>` 

}

// getDifference(date1, date2)
let count=setInterval(getDifference,1000)



// count