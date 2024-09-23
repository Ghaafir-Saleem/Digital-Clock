
setInterval(showtime, 1000)


function showtime() {


    let a = new Date()
    let h = a.getHours()
    let m = a.getMinutes()
    let s = a.getSeconds()
    let d = a.getDate()

    let hours = document.getElementById("hours")
    let minutes = document.getElementById("minutes")
    let seconds = document.getElementById("seconds")

    hours.innerHTML = h
    minutes.innerHTML = m
    seconds.innerHTML = s

}

function showdate(){
    let b = new Date()
    let d = b.getDate()
    let m = b.getMonth() + 1
    let y = b.getFullYear()
    console.log(d,m,y)

    let day = document.getElementById("day")
    let month = document.getElementById("month")
    let year = document.getElementById("year")

    day.innerHTML = d
    month.innerHTML = m
    year.innerHTML = y

}

showdate()