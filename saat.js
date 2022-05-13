function showTime(){
        let today = new Date();
        let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let todayName = today.getDay()
        let currentTime = document.querySelector("#myClock")
        currentTime.innerHTML = `${time} ${days[todayName]}`
        setTimeout(showTime, 1)
    }
    showTime()
    let nameFirst = document.querySelector("#myName") 
    let userName = prompt("Lütfen Adınızı Girin")
    nameFirst.innerHTML = `${userName}`



