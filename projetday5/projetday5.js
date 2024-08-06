let container = document.querySelector('.container');
let btn = document.querySelector('.start-btn');
let scoreContainer = document.querySelector('.score');
let timeContainer = document.querySelector('.time')

btn.onclick = function (){
    let score = 0;
    let time = 10;
    container.innerHTML = "";

    let interval = setInterval(function showTarget(){
        let target = document.createElement('img');
        target.id = "target";
        target.src = "https://e7.pngegg.com/pngimages/971/560/png-clipart-slime-rancher-atomega-zooming-secretary-puddle-miscellaneous-blue-thumbnail.png"
        container.appendChild(target);
        target.style.top = Math.random() * (500 - target.offsetHeight) + 'px';
        target.style.top = Math.random() * (600 - target.offsetWidth) + 'px';

        //faire disparaitre la cible
        setTimeout(function (){
            target.remove();
        }, 2000);

        //qnd on clique sur le target
        target.onclick = function (){
            score += 1;
            target.style.display = 'none';
        }
        time -= 1;

        //afficher les infos
        scoreContainer.innerHTML = `score : ${score}`
        timeContainer.innerHTML = `time : ${time}`

        //fin du jeu = temps ecoule
        if(time === 0){
            clearInterval(interval);
            container.innerHTML = "Game Over"
        }

    }, 1000);
}
