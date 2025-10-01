// Código de navegação para apresentação de slides
document.addEventListener('DOMContentLoaded', function() {
    // Lista de slides em ordem
    const slides = [
        'introducao.html',
        'tetraedro_fogo.html',
        'tipos_combustao.html',
        'reacoes_quimicas.html',
        'experimento_vela.html',
        'aplicacoes.html',
        'impactos_alternativas.html',
        'conclusao.html'
    ];
    
    // Obtém o nome do arquivo atual
    const currentPath = window.location.pathname;
    const currentFile = currentPath.substring(currentPath.lastIndexOf('/') + 1);
    
    // Encontra o índice do slide atual
    const currentIndex = slides.indexOf(currentFile);
    
    // Cria os controles de navegação
    const navControls = document.createElement('div');
    navControls.style.position = 'fixed';
    navControls.style.bottom = '20px';
    navControls.style.right = '20px';
    navControls.style.zIndex = '1000';
    navControls.style.display = 'flex';
    navControls.style.gap = '10px';
    
    // Botão para slide anterior
    const prevButton = document.createElement('button');
    prevButton.innerHTML = '&larr; Anterior';
    prevButton.style.padding = '10px 15px';
    prevButton.style.backgroundColor = '#E94560';
    prevButton.style.color = 'white';
    prevButton.style.border = 'none';
    prevButton.style.borderRadius = '5px';
    prevButton.style.cursor = 'pointer';
    prevButton.style.fontFamily = 'Montserrat, sans-serif';
    prevButton.style.fontSize = '14px';
    prevButton.style.transition = 'background-color 0.3s';
    
    prevButton.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#F9C74F';
    });
    
    prevButton.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#E94560';
    });
    
    // Botão para próximo slide
    const nextButton = document.createElement('button');
    nextButton.innerHTML = 'Próximo &rarr;';
    nextButton.style.padding = '10px 15px';
    nextButton.style.backgroundColor = '#E94560';
    nextButton.style.color = 'white';
    nextButton.style.border = 'none';
    nextButton.style.borderRadius = '5px';
    nextButton.style.cursor = 'pointer';
    nextButton.style.fontFamily = 'Montserrat, sans-serif';
    nextButton.style.fontSize = '14px';
    nextButton.style.transition = 'background-color 0.3s';
    
    nextButton.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#F9C74F';
    });
    
    nextButton.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#E94560';
    });
    
    // Botão de tela cheia
    const fullscreenButton = document.createElement('button');
    fullscreenButton.innerHTML = '<i style="font-size: 14px;">&#x26F6;</i>';
    fullscreenButton.style.padding = '10px 15px';
    fullscreenButton.style.backgroundColor = '#4D908E';
    fullscreenButton.style.color = 'white';
    fullscreenButton.style.border = 'none';
    fullscreenButton.style.borderRadius = '5px';
    fullscreenButton.style.cursor = 'pointer';
    fullscreenButton.style.fontFamily = 'Montserrat, sans-serif';
    fullscreenButton.style.transition = 'background-color 0.3s';
    
    fullscreenButton.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#16213E';
    });
    
    fullscreenButton.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#4D908E';
    });
    
    // Adiciona os botões ao controle de navegação
    navControls.appendChild(prevButton);
    navControls.appendChild(nextButton);
    navControls.appendChild(fullscreenButton);
    
    // Adiciona o controle de navegação ao corpo do documento
    document.body.appendChild(navControls);
    
    // Configura os eventos de clique dos botões
    prevButton.addEventListener('click', function() {
        if (currentIndex > 0) {
            window.location.href = slides[currentIndex - 1];
        }
    });
    
    nextButton.addEventListener('click', function() {
        if (currentIndex < slides.length - 1) {
            window.location.href = slides[currentIndex + 1];
        }
    });
    
    // Função para alternar modo de tela cheia
    function toggleFullScreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.log(`Erro ao tentar entrar em modo de tela cheia: ${err.message}`);
            });
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    }
    
    fullscreenButton.addEventListener('click', toggleFullScreen);
    
    // Desativa o botão anterior no primeiro slide
    if (currentIndex === 0) {
        prevButton.disabled = true;
        prevButton.style.opacity = '0.5';
        prevButton.style.cursor = 'not-allowed';
    }
    
    // Desativa o botão próximo no último slide
    if (currentIndex === slides.length - 1) {
        nextButton.disabled = true;
        nextButton.style.opacity = '0.5';
        nextButton.style.cursor = 'not-allowed';
    }
    
    // Adiciona navegação por teclado
    document.addEventListener('keydown', function(event) {
        // Seta esquerda ou PageUp para slide anterior
        if ((event.key === 'ArrowLeft' || event.key === 'PageUp') && currentIndex > 0) {
            window.location.href = slides[currentIndex - 1];
        }
        
        // Seta direita ou PageDown para próximo slide
        if ((event.key === 'ArrowRight' || event.key === 'PageDown') && currentIndex < slides.length - 1) {
            window.location.href = slides[currentIndex + 1];
        }
        
        // F11 para alternar modo de tela cheia
        if (event.key === 'F11') {
            toggleFullScreen();
            event.preventDefault();
        }
        
        // Tecla 'f' como alternativa para tela cheia
        if (event.key === 'f' || event.key === 'F') {
            toggleFullScreen();
        }
    });
    
    // Adiciona indicador de progresso
    const progressContainer = document.createElement('div');
    progressContainer.style.position = 'fixed';
    progressContainer.style.bottom = '10px';
    progressContainer.style.left = '50%';
    progressContainer.style.transform = 'translateX(-50%)';
    progressContainer.style.width = '200px';
    progressContainer.style.height = '4px';
    progressContainer.style.backgroundColor = '#16213E';
    progressContainer.style.borderRadius = '2px';
    progressContainer.style.zIndex = '1000';
    
    const progressIndicator = document.createElement('div');
    progressIndicator.style.height = '100%';
    progressIndicator.style.width = ((currentIndex + 1) / slides.length * 100) + '%';
    progressIndicator.style.backgroundColor = '#E94560';
    progressIndicator.style.borderRadius = '2px';
    progressIndicator.style.transition = 'width 0.3s';
    
    progressContainer.appendChild(progressIndicator);
    document.body.appendChild(progressContainer);
    
    // Adiciona contador de slides
    const slideCounter = document.createElement('div');
    slideCounter.style.position = 'fixed';
    slideCounter.style.bottom = '20px';
    slideCounter.style.left = '20px';
    slideCounter.style.color = '#FFFFFF';
    slideCounter.style.fontSize = '14px';
    slideCounter.style.fontFamily = 'Montserrat, sans-serif';
    slideCounter.style.zIndex = '1000';
    slideCounter.textContent = `Slide ${currentIndex + 1} de ${slides.length}`;
    
    document.body.appendChild(slideCounter);
});
