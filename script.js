const bouton = document.getElementById('monBouton'); 
bouton.addEventListener('click', () => {
    alert('Je t\'avais dit de ne pas cliquer !!! 😱'); 
    const audio = new Audio('nuclear-fart-1.mp3');
    audio.play();
});
