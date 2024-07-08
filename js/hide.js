document.addEventListener('scroll', function() {
    const welcomePhrase = document.querySelector('.welcomephrase');
    const scrollValue = 485; 

    if (window.scrollY > scrollValue) {
      welcomePhrase.classList.add('hidden');
    } else {
      welcomePhrase.classList.remove('hidden');
    }
  });