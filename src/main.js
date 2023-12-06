import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import "@/assets/scss/style.scss"
import santaJpg from "@images/santa.jpg"
const fruits = ['alma',"körte"]

for(const f of fruits){
    console.log(f)
}

document.querySelector("img").src = santaJpg;