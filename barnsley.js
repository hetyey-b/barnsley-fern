const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

const w = canvas.width
const h = canvas.height

//User influenced variables
let iterationCount = 100000
let f1 = [
    0,
    0,
    0,
    0,
    0.16,
    0
]
let f2 = [
    0.85,
    0.04,
    0,
    -0.04,
    0.85,
    1.6
]
let f3 = [
    0.2,
    -0.26,
    0,
    0.23,
    0.22,
    1.6
]
let f4 = [
    -0.15,
    0.28,
    0,
    0.26,
    0.24,
    0.44
]
let chances = [1,85,7,7]


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function barnsley() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, w, h);

    let x=0.,y=0.,xw=0.,yw=0.,r

    const treshold1 = chances[0]
    const treshold2 = chances[0] + chances[1]
    const treshold3 = chances[0] + chances[1] + chances[2]
    

    for (var i = 0; i < iterationCount; i++) {
        r = getRandomInt(100);
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
    } //fend i
}

barnsley()