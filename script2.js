

let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

let w = canvas.width;
let h = canvas.height;

let hsl = (h, s, l) => `hsl(${h},${s}%,${l}%)`


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
        context.strokeStyle = this.activeColor2
        context.strokeRect(this.x, this.y, this.edge, this.edge)

        if (this.selected) {
            context.lineWidth = 1;
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


let prtcls = new Array(5).fill().map(() => new Square(Math.random() * w, Math.random() * h, 30, hsl(160, 100, 50)));

function increaseFigures() {
    prtcls.push(new Square(Math.random() * w, Math.random() * h, 30, hsl(160, 100, 50)));
    console.log(prtcls, "prtcls")
}

function animate() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = 'white'

    prtcls.forEach(e => {
        e.draw(ctx)
    })
    window.requestAnimationFrame(animate)
}

animate();