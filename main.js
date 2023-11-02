function preload() { //funçao para carregar imagens, video, audio, gifs e outros

}

function setup() { //funçao para criar qualquer objeto na tela iniciando com um canvas

    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tintColor = "";
}

function draw() { //funçao para trazer os objetos na tela

    image(video, 0, 0, 640, 480);
    tint(tintColor);
}
function takeSnapshot(){ //botao de tirar foto
    save('studentName.png');
}

function filterTint(){ //aplicaçao de filtro
    tintColor = document.getElementById("colorName").value;
}