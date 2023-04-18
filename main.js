var canvas = document.getElementById("id")
var ctx = canvas.getContext("2d")

function funcao() {
    
    
}
function funcaos() {
    ctx.strokeStyle = document.getElementById("aid").value




}
function funssao() {
    ctx.lineWidth = document.getElementById("id1").value




}
function cleanscreen() {
    ctx.clearRect(0, 0, 1100, 600)





}
canvas.addEventListener("mouseout", stop)
canvas.addEventListener("mouseup", stop)
canvas.addEventListener("mousedown", start)
canvas.addEventListener("mousemove", draw)

var bandeirinha = false
function start(event) {
    bandeirinha = true
    ctx.beginPath()
    var x = event.clientX - canvas.offsetLeft
    var y = event.clientY - canvas.offsetTop
    ctx.moveTo(x,y)
    
}
function stop() {
    bandeirinha = false


}
function draw(event) {
    if(bandeirinha == true){
        var x = event.clientX - canvas.offsetLeft
        var y = event.clientY - canvas.offsetTop
        ctx.lineTo(x,y)
        ctx.stroke()

    }


}
