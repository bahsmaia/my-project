document.addEventListener("DOMContentLoaded", function() {
    const btnExpandir = document.querySelector(".btn-expandir");
    const sidebar = document.querySelector(".sidebar");
    const menuItems = document.querySelectorAll("ul li.item-menu");

    btnExpandir.addEventListener("click", function() {
        sidebar.classList.toggle("expandir");
    });

    menuItems.forEach(function(item) {
        item.addEventListener("click", function() {
            // Remove a classe ativo de todos os itens
            menuItems.forEach(function(menuItem) {
                menuItem.classList.remove("ativo");
            });
            // Adiciona a classe ativo ao item clicado
            item.classList.add("ativo");
        });
    });

    // Carregar as animações
    var anim1 = lottie.loadAnimation({
        container: document.getElementById('lottie1'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'https://lottie.host/a8d837bf-f53c-44a9-ac38-89a10bea62ff/AED9Pe29cS.json'
    });

    var anim2 = lottie.loadAnimation({
        container: document.getElementById('lottie2'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'https://lottie.host/bcc4a533-79f0-4dca-a31b-41aa24b2746e/YhvtBMR1Rd.json'
    });

    var anim3 = lottie.loadAnimation({
        container: document.getElementById('lottie3'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'https://lottie.host/ca043d56-1d85-4ef0-990a-a8cd772f7665/D1fTVglEg5.json'
    });

    var anim4 = lottie.loadAnimation({
        container: document.getElementById('lottie4'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'https://lottie.host/57124dde-ce2b-4669-afda-bc216da2032b/y13ygYAY78.json'
    });

    // Adicionar eventos de hover para as animações
    document.getElementById('lottie1').addEventListener('mouseenter', function() {
        anim1.play();
    });
    document.getElementById('lottie1').addEventListener('mouseleave', function() {
        anim1.stop();
    });

    document.getElementById('lottie2').addEventListener('mouseenter', function() {
        anim2.play();
    });
    document.getElementById('lottie2').addEventListener('mouseleave', function() {
        anim2.stop();
    });

    document.getElementById('lottie3').addEventListener('mouseenter', function() {
        anim3.play();
    });
    document.getElementById('lottie3').addEventListener('mouseleave', function() {
        anim3.stop();
    });

    document.getElementById('lottie4').addEventListener('mouseenter', function() {
        anim4.play();
    });
    document.getElementById('lottie4').addEventListener('mouseleave', function() {
        anim4.stop();
    });
});

const canvas = document.getElementById('smokeCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particlesArray = [];
const colors = ['#8600ff', '#00ffdc'];

// Função para criar uma nova partícula
function Particle(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 20 + 10; // Tamanho aleatório entre 10 e 30
    this.speedX = Math.random() * 3 - 1.5; // Velocidade de -1.5 a 1.5
    this.speedY = Math.random() * 3 - 1.5;
    this.color = colors[Math.floor(Math.random() * colors.length)];
}

// Método para desenhar a partícula
Particle.prototype.draw = function() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
};

// Método para atualizar a posição da partícula
Particle.prototype.update = function() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.1; // Gradualmente reduzir o tamanho
};

// Função para adicionar novas partículas
function addParticles(event) {
    const x = event.x;
    const y = event.y;
    for (let i = 0; i < 5; i++) {
        particlesArray.push(new Particle(x, y));
    }
}

// Função para animar as partículas
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();

        // Remover partículas quando se tornam muito pequenas
        if (particlesArray[i].size <= 0.2) {
            particlesArray.splice(i, 1);
            i--;
        }
    }
    requestAnimationFrame(animate);
}

window.addEventListener('mousemove', addParticles);
animate();

