const barnsley_f1 = [0,0,0,0,0.16,0]
const barnsley_f2 = [0.85,0.04,0,-0.04,0.85,1.6]
const barnsley_f3 = [0.2,-0.26,0,0.23,0.22,1.6]
const barnsley_f4 = [-0.15,0.28,0,0.26,0.24,0.44]
const barnsley_p1 = 0.01
const barnsley_p2 = 0.85
const barnsley_p3 = 0.07
const barnsley_p4 = 0.07

const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

const barnsleyButton = document.querySelector("#barnsley")
const generateButton = document.querySelector("#generate")

const f1_a = document.querySelector("#f1_a")
const f1_b = document.querySelector("#f1_b")
const f1_c = document.querySelector("#f1_c")
const f1_d = document.querySelector("#f1_d")
const f1_e = document.querySelector("#f1_e")
const f1_f = document.querySelector("#f1_f")
const f1_p = document.querySelector("#f1_p")

const f2_a = document.querySelector("#f2_a")
const f2_b = document.querySelector("#f2_b")
const f2_c = document.querySelector("#f2_c")
const f2_d = document.querySelector("#f2_d")
const f2_e = document.querySelector("#f2_e")
const f2_f = document.querySelector("#f2_f")
const f2_p = document.querySelector("#f2_p")

const f3_a = document.querySelector("#f3_a")
const f3_b = document.querySelector("#f3_b")
const f3_c = document.querySelector("#f3_c")
const f3_d = document.querySelector("#f3_d")
const f3_e = document.querySelector("#f3_e")
const f3_f = document.querySelector("#f3_f")
const f3_p = document.querySelector("#f3_p")

const f4_a = document.querySelector("#f4_a")
const f4_b = document.querySelector("#f4_b")
const f4_c = document.querySelector("#f4_c")
const f4_d = document.querySelector("#f4_d")
const f4_e = document.querySelector("#f4_e")
const f4_f = document.querySelector("#f4_f")
const f4_p = document.querySelector("#f4_p")

//User influenced variables
let iterationCount = 100000

let chances = [0.01,0.85,0.07,0.07]

let f1 = [0,0,0,0,0.16,0]
let f2 = [0.85,0.04,0,-0.04,0.85,1.6]
let f3 = [0.2,-0.26,0,0.23,0.22,1.6]
let f4 = [-0.15,0.28,0,0.26,0.24,0.44]

barnsley()

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function barnsley() {
    let w = canvas.width
    let h = canvas.height
    let x=0.,y=0.,xw=0.,yw=0.,r

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, w, h);    

    const treshold1 = (chances[0]) * 100
    const treshold2 = (chances[0] + chances[1]) * 100
    const treshold3 = (chances[0] + chances[1] + chances[2]) * 100
    const maxR = (chances[0] + chances[1] + chances[2] + chances[3]) * 100
    
    console.log("------------------------")
    console.log("barnsley()")
    console.log("treshold1: " + treshold1)
    console.log("treshold1: " + treshold2)
    console.log("treshold1: " + treshold3)
    console.log("maxR: " + maxR)
    console.log("f1: " + f1)
    console.log("f2: " + f2)
    console.log("f3: " + f3)
    console.log("f4: " + f4)
    console.log("------------------------")

    let i = 0;
    for (i = 0; i < iterationCount; i++) {
        r = getRandomInt(maxR);
        if (r <= treshold1) {
            xw = f1[0] * x + f1[1] * y + f1[2]
            yw = f1[3] * x + f1[4] * y + f1[5]
        } else if (r <= treshold2) {
            xw = f2[0] * x + f2[1] * y + f2[2]
            yw = f2[3] * x + f2[4] * y + f2[5]
        } else if (r <= treshold3) {
            xw = f3[0] * x + f3[1] * y + f3[2]
            yw = f3[3] * x + f3[4] * y + f3[5]
        } else {
            xw = f4[0] * x + f4[1] * y + f4[2]
            yw = f4[3] * x + f4[4] * y + f4[5]
        }
        x = xw;
        y = yw;
        ctx.fillStyle = "green";
        ctx.fillRect(x * 50 + (h/2), -y * 50 + w, 1, 1);
    }
    console.log("loop over with i: " + i)
}

function readValues() {
    f1 = [f1_a.value,f1_b.value,f1_c.value,f1_d.value,f1_e.value,f1_f.value]
    chances[0] = parseFloat(f1_p.value)
    f2 = [f2_a.value,f2_b.value,f2_c.value,f2_d.value,f2_e.value,f2_f.value]
    chances[1] = parseFloat(f2_p.value)
    f3 = [f3_a.value,f3_b.value,f3_c.value,f3_d.value,f3_e.value,f3_f.value]
    chances[2] = parseFloat(f3_p.value)
    f4 = [f4_a.value,f4_b.value,f4_c.value,f4_d.value,f4_e.value,f4_f.value]
    chances[3] = parseFloat(f4_p.value)
}

function handleFernButtonClick(f1Arr, f2Arr, f3Arr, f4Arr, p1, p2, p3, p4) {
    console.log("handleFernButtonClick")
    f1_a.value = f1Arr[0]
    f1_b.value = f1Arr[1]
    f1_c.value = f1Arr[2]
    f1_d.value = f1Arr[3]
    f1_e.value = f1Arr[4] 
    f1_f.value = f1Arr[5]
    f1_p.value = p1

    f2_a.value = f2Arr[0]
    f2_b.value = f2Arr[1]
    f2_c.value = f2Arr[2]
    f2_d.value = f2Arr[3]
    f2_e.value = f2Arr[4] 
    f2_f.value = f2Arr[5]
    f2_p.value = p2

    f3_a.value = f3Arr[0]
    f3_b.value = f3Arr[1]
    f3_c.value = f3Arr[2]
    f3_d.value = f3Arr[3]
    f3_e.value = f3Arr[4] 
    f3_f.value = f3Arr[5]
    f3_p.value = p3

    f4_a.value = f4Arr[0]
    f4_b.value = f4Arr[1]
    f4_c.value = f4Arr[2]
    f4_d.value = f4Arr[3]
    f4_e.value = f4Arr[4] 
    f4_f.value = f4Arr[5]
    f4_p.value = p4

    readValues()
}

barnsleyButton.addEventListener("click", handleFernButtonClick(barnsley_f1, barnsley_f2, barnsley_f3, barnsley_f4, barnsley_p1, barnsley_p2, barnsley_p3, barnsley_p4))
generateButton.addEventListener("click",barnsley)