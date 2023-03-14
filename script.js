
let hsl = (h, s, l) => `hsl(${h},${s}%,${l}%)`


let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

// let w = canvas.width = canvas2.width = window.innerWidth * 0.9;
// let h = canvas.height = canvas2.height = window.innerHeight * 0.9;
 let w = canvas.width;
 let h = canvas.height;

canvas.style.backgroundColor = 'white'

ctx.lineWidth = 2
ctx.textAlign = 'center'
ctx.textBaseline = 'middle'
ctx.font = '10px Arial'




class Square {
    constructor(x, y, edge, color) {
        this.x = x
        this.y = y
        this.edge = edge
        this.color = color
        this.selected = false
        this.active = false

        this.activeColor2 = color.replace(/,\d\d%\)/, str => str.replace(/\d\d/, str.match(/\d\d/)[0] * 0.6))

    }

     draw(context) {
        context.fillStyle = this.color

        context.fillRect(this.x, this.y, this.edge, this.edge)
        if (this.selected) {
            context.lineWidth = 2;
            context.strokeStyle = this.activeColor2
            context.strokeRect(this.x, this.y, this.edge, this.edge)
        }
    }
    update() {
        this.x += 0.1
    }

    select() {
        this.selected = !this.selected
    }

    activate() {
        this.active = !this.active
    }
}

//console.log()
let prtcls = new Array(5).fill().map(() => new Square(Math.random() * w, Math.random() * h, 60, hsl(160, 100, 50)))


let getMouseCoords = (canvas, event) => {
    let canvasCoords = canvas.getBoundingClientRect()
    return {
        // x: event.pageX - canvasCoords.left,
        // y: event.pageY - canvasCoords.top

        x: event.offsetX - canvasCoords.left,
        y: event.offsetY - canvasCoords.top
    }
}

let getOffsetCoords = (mouse, rect) => {
   // console.log("getOffsetCoords", mouse.x, mouse.y);
    return {
        x: mouse.x - rect.x,
        y: mouse.y - rect.y
    }
}





let arr = new Array(40).fill('empty').map(() => Math.floor(Math.random() * 100))

let cursorInRect = (mouseX, mouseY, rectX, rectY, rectW, rectH) => {
    let xLine = mouseX > rectX && mouseX < rectX + rectW
    let yLine = mouseY > rectY && mouseY < rectY + rectH

    return xLine && yLine
}



// =============================================================
//                          HANDLERS
// =============================================================

canvas.addEventListener('click', e => {
    let mouse = getMouseCoords(canvas, e)
})

canvas.addEventListener('mousemove', e => {
    let mouse = getMouseCoords(canvas, e)

    let arr = prtcls.map(e => cursorInRect(mouse.x, mouse.y, e.x, e.y, e.edge, e.edge))
    !arr.every(e => e === false) ? canvas.classList.add('pointer') : canvas.classList.remove('pointer')

    prtcls.forEach(e => {

        if (e.selected) {
            e.x = mouse.x - e.offset.x
            e.y = mouse.y - e.offset.y
        }

        cursorInRect(mouse.x, mouse.y, e.x, e.y, e.edge, e.edge) ?
            e.active != true ? e.activate() : false
            : e.active = false
    })



})


canvas.addEventListener('mousedown', e => {
    let mouse = getMouseCoords(canvas, e)
    prtcls.forEach(e => {
        if (cursorInRect(mouse.x, mouse.y, e.x, e.y, e.edge, e.edge)) {
            e.selected = true
            e.offset = getOffsetCoords(mouse, e)
        } else {
            e.selected = false
        }
    })
})

canvas.addEventListener('mouseup', e => {
    prtcls.forEach(e => e.selected = false)
})



// =============================================================
//                          MAIN LOOP
// =============================================================

function animate() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = 'white'
    console.log("prtcls", prtcls);
    prtcls.forEach(e => {
        e.draw(ctx)
    })

    window.requestAnimationFrame(animate)
}

animate()

