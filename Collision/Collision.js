window.onload=()=>{
    let canvas = document.getElementById("my-canvas")
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.stroke();
}