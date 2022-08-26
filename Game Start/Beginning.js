window.onload=()=>{
    console.log("Page loaded - loader load");
    let canvas = document.getElementById("my-canvas")
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.stroke();

    var img = new Image();
    img.onload = function() {
        ctx.drawImage(img, 0, 0, 600, 400);
    };
    img.src = 'Background.png';
}