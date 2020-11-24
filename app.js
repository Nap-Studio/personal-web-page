particlesJS.load('particles-js', 'assets/particles.json', function () {
    console.log('callback - particles.js config loaded');
});

window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

function changeContent(newContent) {
    let activeContent = document.querySelector('.active');
    activeContent.classList.remove('active');
    activeContent.classList.add('hidden');

    let newContainer = document.querySelector(`.${newContent}`);
    newContainer.classList.remove('hidden');
    newContainer.classList.add('active');
}

function changeDetails(index) {
    let infoText = document.querySelector('.info-container p');
    switch (index) {
        case 1:
            infoText.innerHTML = "Amazonia | 2018"
            break;
        case 2:
            infoText.innerHTML = "Road To Aztlan | 2019"
            break;
        default:
            infoText.innerHTML = "I Want To Be a Beer | 2017"
            break;
    }
}

function revertDetails() {
    let infoText = document.querySelector('.info-container p');
    infoText.innerHTML = "My Work"
}