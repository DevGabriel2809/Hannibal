document.addEventListener('DOMContentLoaded', function () {
    const firstSeason = document.getElementById('season1');
    if (firstSeason){
        firstSeason.classList.add('active')
    }
})

function toggleEpisodes(season) {
    for (let i = 1; i <= 3; i++) {
        const element = document.getElementById(`season${i}`);
        if (i === season) {
            element.classList.toggle('active');
        } else {
            element.classList.remove('active');
        }
    }
}

function loadEpisode(link) {
    document.getElementById('videoPlayer').src = link;
    
}

// Trocar poster

document.addEventListener('DOMContentLoaded', () => {
    const hbposter = document.getElementById('hbposter')
    const season1btn = document.getElementById('temp1')
    const season2btn = document.getElementById('temp2')
    const season3btn = document.getElementById('temp3')

    // Função pra mudar o poster
    function changePosterWithFade(seasonNumber){
        hbposter.classList.add('fade-out'); // Inicia o fade-out
        setTimeout(() =>{
            hbposter.src = `imgs/Hannnibal-temp${seasonNumber}.jpg`;
            hbposter.alt = `Hannibal Season ${seasonNumber} Poster`;
            hbposter.classList.remove('fade-out')
        }, 200)
        
    }

    // Adicionar um event listener aos 'botoes'

    season1btn.addEventListener('click', () =>{
        changePosterWithFade(1)
    });

    season2btn.addEventListener('click', () =>{
        changePosterWithFade(2)
    });

    season3btn.addEventListener('click', () =>{
        changePosterWithFade(3)
    });
})


document.addEventListener("DOMContentLoaded", () => {
    const poster = document.getElementById("poster");
    const sidebar = document.querySelector(".sidebar");
    const placeholder = document.getElementById("poster-placeholder");

    function movePoster() {
        if (window.innerWidth < 500) {
            if (!placeholder.contains(poster)) {
                placeholder.appendChild(poster);
            }
        } else {
            if (!sidebar.contains(poster)) {
                sidebar.appendChild(poster);
            }
        }
    }

    window.addEventListener("resize", movePoster);
    movePoster(); // Chamada inicial

    });