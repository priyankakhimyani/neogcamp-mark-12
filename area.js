const inputs = document.querySelectorAll(".inputs")
const areaBtn = document.querySelector("#area-btn");

const outputEl = document.querySelector("#output")

function areaOfTriangle(base, height){
    const area = 0.5 * base * height;
    return area;
}

function areaTriangle(){
    const area = areaOfTriangle(
        Number(inputs[0].value),
        Number(inputs[1].value)
    ) 
    if(inputs[0].value==""|| inputs[1].value==""){
        outputEl.innerText = "Please enter all the values";
    }
    else{
        const farea = parseFloat (area).toFixed(2);
        outputEl.innerText = "The area of the triangle with given sides is " + farea;
    }

}

areaBtn.addEventListener("click", areaTriangle)