var date = document.querySelector(".date")
var search = document.querySelector(".input")
var city = document.querySelector(".city")
var country = document.querySelector(".country")
var temp_now = document.querySelector(".temp-now")
var notification = document.querySelector(".notification")
var describe = document.querySelector(".describe")
var icon_now = document.querySelector(".icon-now")
var wind_now = document.querySelector(".wind")
var eye_now = document.querySelector(".eye")
var water_now = document.querySelector(".water")
var div_4 = document.querySelector(".div-4")
var icon_sun_now = document.querySelector(".icon-sun-now")
var icon_cloud_now = document.querySelector(".icon-cloud-now")
var icon_rain_now = document.querySelector(".icon-rain-now")
var start = document.querySelector(".start")
var title = document.querySelector(".title")
var wt_card = document.querySelector(".wt-card")
var body = document.querySelector(".body")
var search_bt = document.querySelector(".search-bt")
var home = document.querySelector(".home")

date.innerText = new Date().toLocaleString('vi');

div_4.classList.add("hide")

//hide title
start.addEventListener("click",function(){
    title.classList.add("hide")
    wt_card.classList.remove("hide")
    notification.classList.remove("hide")
})

//ham thay doi icon
function change_icon(input){
    if(input=="Rain"){
        icon_cloud_now.classList.add("hide")
        icon_sun_now.classList.add("hide")
        icon_rain_now.classList.remove("hide")
    }

    if(input=="Clouds"){
        icon_cloud_now.classList.remove("hide")
        icon_sun_now.classList.add("hide")
        icon_rain_now.classList.add("hide")
    }

    if(input=="Clear"){
        icon_cloud_now.classList.add("hide")
        icon_rain_now.classList.add("hide")
        icon_sun_now.classList.remove("hide")
    }

}

function change_icon_6h(input){
    if(input=="Rain"){
        icon_cloud_6h.classList.add("hide")
        icon_sun_6h.classList.add("hide")
        icon_rain_6h.classList.remove("hide")
    }

    if(input=="Clouds"){
        icon_cloud_6h.classList.remove("hide")
        icon_sun_6h.classList.add("hide")
        icon_rain_6h.classList.add("hide")
    }

    if(input=="Clear"){
        icon_cloud_6h.classList.add("hide")
        icon_rain_6h.classList.add("hide")
        icon_sun_6h.classList.remove("hide")
    }

}

function change_icon_12h(input){
    if(input=="Rain"){
        icon_cloud_12h.classList.add("hide")
        icon_sun_12h.classList.add("hide")
        icon_rain_12h.classList.remove("hide")
    }

    if(input=="Clouds"){
        icon_cloud_12h.classList.remove("hide")
        icon_sun_12h.classList.add("hide")
        icon_rain_12h.classList.add("hide")
    }

    if(input=="Clear"){
        icon_cloud_12h.classList.add("hide")
        icon_rain_12h.classList.add("hide")
        icon_sun_12h.classList.remove("hide")
    }

}

function change_icon_18h(input){
    if(input=="Rain"){
        icon_cloud_18h.classList.add("hide")
        icon_sun_18h.classList.add("hide")
        icon_rain_18h.classList.remove("hide")
    }

    if(input=="Clouds"){
        icon_cloud_18h.classList.remove("hide")
        icon_sun_18h.classList.add("hide")
        icon_rain_18h.classList.add("hide")
    }

    if(input=="Clear"){
        icon_cloud_18h.classList.add("hide")
        icon_rain_18h.classList.add("hide")
        icon_sun_18h.classList.remove("hide")
    }

}

//ham goi API
async function changeWeather_now(){
    let location_search = search.value.trim()

    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location_search}&appid=4148df3974c769d73229d95d2e3561c5`)
    .then(Response=>Response.json())

    // console.log(data)

    if(data.cod==200){
        city.innerText = data.name
        country.innerText = data.sys.country
        let temp = Math.round((data.main.temp - 273.15)+` `)
        temp_now.innerText = temp
        describe.innerText = data.weather[0].main
        eye_now.innerText = data.visibility +" m"
        wind_now.innerText = data.wind.speed + ` m/s`
        water_now.innerText = data.main.humidity+` %`

        //goi ham thay doi icon
        change_icon(data.weather[0].main)

        weather_today()
        // weather_next()
        //thay đổi ảnh theo nhiệt độ 
        if(temp <= 16){
            wt_card.classList.remove("hot")
            body.classList.remove("hot-bg")

            wt_card.classList.remove("cold")
            body.classList.remove("cold-bg")

            wt_card.classList.remove("warm")
            body.classList.remove("warm-bg")

        }

        if(temp>16 && temp <=22){
            wt_card.classList.remove("hot")
            body.classList.remove("hot-bg")

            wt_card.classList.remove("warm")
            body.classList.remove("warm-bg")

            wt_card.classList.add("cold")
            body.classList.add("cold-bg")
        }
        
        if(temp>22 && temp <= 27){
            wt_card.classList.remove("hot")
            body.classList.remove("hot-bg")

            wt_card.classList.remove("cold")
            body.classList.remove("cold-bg")

            wt_card.classList.add("warm")
            body.classList.add("warm-bg")
        }

        if(temp >27 && temp < 60){
            wt_card.classList.remove("cold")
            body.classList.remove("cold-bg")

            wt_card.classList.remove("warm")
            body.classList.remove("warm-bg")

            wt_card.classList.add("hot")
            body.classList.add("hot-bg")
        }

        icon_left.classList.remove("hide")
        icon_right.classList.remove("hide")
        home.classList.remove("hide")
        div_4.classList.remove("hide")
        notification.innerText = ``
    }else{
        notification.innerText = "Hãy nhập tên địa điểm bằng tiếng anh !"
    }

}



//thoi tiet ngay hom nay theo gio
var icon_cloud_6h = document.querySelector(".icon-cloud-6h")
var icon_rain_6h = document.querySelector(".icon-rain-6h")
var icon_sun_6h = document.querySelector(".icon-sun-6h")
var sky_6h = document.querySelector(".sky-6h")
var temp_6h = document.querySelector(".temp-6h")
var icon_cloud_12h = document.querySelector(".icon-cloud-12h")
var icon_rain_12h = document.querySelector(".icon-rain-12h")
var icon_sun_12h = document.querySelector(".icon-sun-12h")
var sky_12h = document.querySelector(".sky-12h")
var temp_12h = document.querySelector(".temp-12h")
var icon_cloud_18h = document.querySelector(".icon-cloud-18h")
var icon_rain_18h = document.querySelector(".icon-rain-18h")
var icon_sun_18h = document.querySelector(".icon-sun-18h")
var sky_18h = document.querySelector(".sky-18h")
var temp_18h = document.querySelector(".temp-18h")
var date_3 = document.querySelector(".date-3")
var icon_left = document.querySelector(".icon-left")
var icon_right = document.querySelector(".icon-right")



async function weather_tomorrow(){
    let location = search.value.trim()
    let data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=4148df3974c769d73229d95d2e3561c5`)
    .then(Response=>Response.json())

    console.log(data)

    date_3.innerText =`mai : ` + data.list[11].dt_txt.slice(0,10)

    let tomorrow = data.list[9].dt_txt.slice(0,10)
    for(let i=0;i<16;i++){
        if(data.list[i].dt_txt.endsWith("06:00:00")==true && data.list[i].dt_txt.slice(0,10)==tomorrow){
            let temp_6 = Math.round((data.list[i].main.temp - 273.15)+` `)
            temp_6h.innerText= temp_6
            sky_6h.innerText = data.list[i].weather[0].main   
            
            change_icon_6h(data.list[i].weather[0].main)


        }
    }

    for(let i=0;i<16;i++){
        if(data.list[i].dt_txt.endsWith("12:00:00")==true && data.list[i].dt_txt.slice(0,10)==tomorrow){
            let temp_12 = Math.round((data.list[i].main.temp - 273.15)+` `)
            temp_12h.innerText= temp_12
            sky_12h.innerText = data.list[i].weather[0].main


        }
    }

    for(let i=0;i<16;i++){
        if(data.list[i].dt_txt.endsWith("18:00:00")==true && data.list[i].dt_txt.slice(0,10)==tomorrow){
            let temp_18 = Math.round((data.list[i].main.temp - 273.15)+` `)
            temp_18h.innerText= temp_18
            sky_18h.innerText = data.list[i].weather[0].main

            change_icon_18h(data.list[i].weather[0].main)

        }
    }
}

//du bao cac gio trong ngay hom nay
async function weather_today(){
    let location = search.value.trim()
    let data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=4148df3974c769d73229d95d2e3561c5`)
    .then(Response=>Response.json())

    console.log(data)

    // console.log(data.list[1].dt_txt.slice(0,10))
    date_3.innerText =`hôm nay : `+ data.list[1].dt_txt.slice(0,10)

    let count = 0;
    let today = data.list[0].dt_txt.slice(0,10)

    for(let i=0;i<8;i++){
        if(data.list[i].dt_txt.endsWith("06:00:00")==true && data.list[i].dt_txt.slice(0,10)==today){
            let temp_6 = Math.round((data.list[i].main.temp - 273.15)+` `)
            temp_6h.innerText= temp_6
            sky_6h.innerText = data.list[i].weather[0].main   
            
            change_icon_6h(data.list[i].weather[0].main)
            count++;
        }  
       
    }

    //xu ly neu khong tim thay 6 gio
    if(count==0){
        temp_6h.innerText= `--`
        sky_6h.innerText =`--`
    }


    let count1 = 0;
    for(let i=0;i<8;i++){
        if(data.list[i].dt_txt.endsWith("12:00:00")==true && data.list[i].dt_txt.slice(0,10)==today){
            let temp_12 = Math.round((data.list[i].main.temp - 273.15)+` `)
            temp_12h.innerText= temp_12
            sky_12h.innerText = data.list[i].weather[0].main

            change_icon_12h(data.list[i].weather[0].main)
            count1++;
        }
    }

    if(count1==0){
        temp_12h.innerText=`--`
        sky_12h.innerText =`--`
    }


    let count2 = 0;
    for(let i=0;i<8;i++){
        if(data.list[i].dt_txt.endsWith("18:00:00")==true && data.list[i].dt_txt.slice(0,10)==today){
            let temp_18 = Math.round((data.list[i].main.temp - 273.15)+` `)
            temp_18h.innerText= temp_18
            sky_18h.innerText = data.list[i].weather[0].main

            change_icon_18h(data.list[i].weather[0].main)
            count2++;
        }

    }

    if(count2==0){
        temp_12h.innerText=`--`
        sky_12h.innerText =`--`
    }

}








//ham tim API theo data trong input
search.addEventListener("keypress",function(e){
    if(e.code=="Enter"){
        changeWeather_now()
    }
})

search_bt.addEventListener("click",function(){
    changeWeather_now()
})

//chuyen giua cac ngay

icon_left.addEventListener("click",function(){
    weather_today()
})

icon_right.addEventListener("click",function(){
    weather_tomorrow()
})


// icon_left.addEventListener("click",function(){
//     // weather_today()
//     count++;
//     if(count==1){
//         changeWeather_now()
//     }
// })

// icon_right.addEventListener("click",function(){
//     // weather_tomorrow()
//     count++;
//     console.log(count)
//     if(count==1){
//         weather_tomorrow()
//     }
// })

// console.log(count)




