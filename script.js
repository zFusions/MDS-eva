const bouton = document.getElementById('monBouton'); 
bouton.addEventListener('click', () => {
    const audio = new Audio('nuclear-fart-1.mp3');
    audio.play();
    alert('Je t\'avais dit de ne pas cliquer !!! 😱'); 
});
