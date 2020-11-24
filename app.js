particlesJS.load('particles-js', 'assets/particles.json', function () {
    console.log('callback - particles.js config loaded');
});

window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

function changeContent(newContent){
    let activeContent = document.querySelector('.active');
    activeContent.classList.remove('active');
    activeContent.classList.add('hidden');

    let newContainer = document.querySelector(`.${newContent}`);
    newContainer.classList.remove('hidden');
    newContainer.classList.add('active');
}