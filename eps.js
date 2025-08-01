document.addEventListener('DOMContentLoaded', () => {
    const videoPlayer = document.getElementById('videoPlayer');
    const avancarBtn = document.querySelector('.avancar');
    const voltarBtn = document.querySelector('.voltar');

    // Array com todos os episódios e suas URLs
const allEpisodes = [
// Temporada 1
{ season: 1, episode: 1, url: 'https://etv-embed.icu/e/getembed.php?sv=mixdrop&id=30146&site=overflix&token=cfxp594cpa4to' },
{ season: 1, episode: 2, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=30147&site=overflix&token=cfxp594cpa4to' },
{ season: 1, episode: 3, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=30148&site=overflix&token=cfxp594cpa4to' },
{ season: 1, episode: 4, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=30149&site=overflix&token=cfxp594cpa4to' },
{ season: 1, episode: 5, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=30150&site=overflix&token=cfxp594cpa4to' },
{ season: 1, episode: 6, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=30151&site=overflix&token=cfxp594cpa4to' },
{ season: 1, episode: 7, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=30152&site=overflix&token=cfxp594cpa4to' },
{ season: 1, episode: 8, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=30153&site=overflix&token=cfxp594cpa4to' },
{ season: 1, episode: 9, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=30154&site=overflix&token=cfxp594cpa4to' },
{ season: 1, episode: 10, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=30155&site=overflix&token=cfxp594cpa4to' },
{ season: 1, episode: 11, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=30156&site=overflix&token=cfxp594cpa4to' },
{ season: 1, episode: 12, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=30157&site=overflix&token=cfxp594cpa4to' },
{ season: 1, episode: 13, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=30158&site=overflix&token=cfxp594cpa4to' },
// Temporada 2
{ season: 2, episode: 1, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=30159&site=overflix&token=cfxp594cpa4to' },
{ season: 2, episode: 2, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=30160&site=overflix&token=cfxp594cpa4to' },
{ season: 2, episode: 3, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=30161&site=overflix&token=cfxp594cpa4to' },
{ season: 2, episode: 4, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=30162&site=overflix&token=cfxp594cpa4to' },
{ season: 2, episode: 5, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=30163&site=overflix&token=cfxp594cpa4to' },
{ season: 2, episode: 6, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=30164&site=overflix&token=cfxp594cpa4to' },
{ season: 2, episode: 7, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=30165&site=overflix&token=cfxp594cpa4to' },
{ season: 2, episode: 8, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=30166&site=overflix&token=cfxp594cpa4to' },
{ season: 2, episode: 9, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=30167&site=overflix&token=cfxp594cpa4to' },
{ season: 2, episode: 10, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=30168&site=overflix&token=cfxp594cpa4to' },
{ season: 2, episode: 11, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=30169&site=overflix&token=cfxp594cpa4to' },
{ season: 2, episode: 12, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=30170&site=overflix&token=cfxp594cpa4to' },
{ season: 2, episode: 13, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=30171&site=overflix&token=cfxp594cpa4to' },
// Temporada 3
{ season: 3, episode: 1, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=30172&site=overflix&token=cfxp594cpa4to' },
{ season: 3, episode: 2, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=30173&site=overflix&token=cfxp594cpa4to' },
{ season: 3, episode: 3, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=30174&site=overflix&token=cfxp594cpa4to' },
{ season: 3, episode: 4, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=30175&site=overflix&token=cfxp594cpa4to' },
{ season: 3, episode: 5, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=30176&site=overflix&token=cfxp594cpa4to' },
{ season: 3, episode: 6, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=30177&site=overflix&token=cfxp594cpa4to' },
{ season: 3, episode: 7, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=30178&site=overflix&token=cfxp594cpa4to' },
{ season: 3, episode: 8, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=30179&site=overflix&token=cfxp594cpa4to' },
{ season: 3, episode: 9, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=30180&site=overflix&token=cfxp594cpa4to' },
{ season: 3, episode: 10, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=30181&site=overflix&token=cfxp594cpa4to' },
{ season: 3, episode: 11, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=30182&site=overflix&token=cfxp594cpa4to' },
{ season: 3, episode: 12, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=30183&site=overflix&token=cfxp594cpa4to' },
{ season: 3, episode: 13, url: 'https://etv-embed.icu/e/getembed.php?sv=filemoon&id=30184&site=overflix&token=cfxp594cpa4to' },
];

    let currentEpisodeIndex = -1; // -1 significa que nenhum episódio foi carregado ainda

    // Função global para carregar um episódio no player
    window.loadEpisode = (url) => {
        videoPlayer.src = url;

        // Atualiza índice
        currentEpisodeIndex = allEpisodes.findIndex(episode => episode.url === url);

        // Tenta encontrar o título com base na URL nos botões existentes
        const buttons = document.querySelectorAll('button');
        let foundTitle = null;

        buttons.forEach(button => {
            const epInfo = button.querySelector('.ep-info');
            const onclickAttr = button.getAttribute('onclick');

            if (onclickAttr && onclickAttr.includes(url) && epInfo) {
                foundTitle = epInfo.innerText;
            }
        });

        if (foundTitle) {
            document.getElementById('titulo-episodio').innerText = foundTitle;
        }

        updateNavigationButtons();
    };


    // Função para atualizar o estado dos botões "Próximo" e "Anterior"
    function updateNavigationButtons() {
        if (currentEpisodeIndex <= 0) {
            voltarBtn.disabled = true; // Desabilita se for o primeiro episódio ou nenhum
            voltarBtn.style.opacity = '0.5';
            voltarBtn.style.cursor = 'not-allowed';
        } else {
            voltarBtn.disabled = false;
            voltarBtn.style.opacity = '1';
            voltarBtn.style.cursor = 'pointer';
        }

        if (currentEpisodeIndex >= allEpisodes.length - 1) {
            avancarBtn.disabled = true; // Desabilita se for o último episódio
            avancarBtn.style.opacity = '0.5';
            avancarBtn.style.cursor = 'not-allowed';
        } else {
            avancarBtn.disabled = false;
            avancarBtn.style.opacity = '1';
            avancarBtn.style.cursor = 'pointer';
        }
    }

    // Event listener para o botão "Próximo"
    avancarBtn.addEventListener('click', () => {
        if (currentEpisodeIndex < allEpisodes.length - 1) {
            currentEpisodeIndex++;
            window.loadEpisode(allEpisodes[currentEpisodeIndex].url);
        }
    });

    // Event listener para o botão "Anterior"
    voltarBtn.addEventListener('click', () => {
        if (currentEpisodeIndex > 0) {
            currentEpisodeIndex--;
            window.loadEpisode(allEpisodes[currentEpisodeIndex].url);
        }
    });

    // Inicializa o estado dos botões ao carregar a página
    updateNavigationButtons();
});

