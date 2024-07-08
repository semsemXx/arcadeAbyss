window.addEventListener('scroll', function() {
    requestAnimationFrame(() => {
    const scrollPosition = window.scrollY;
    const scrollcontainer = document.querySelector('.scroll_container');
    const topscrollcontainer = scrollcontainer.getBoundingClientRect().top;
    const scrollPercent = scrollPosition / (topscrollcontainer-220);

    const startColor = [255,255,255]; 
    const endColor = [50, 7, 103];

    const currentColor = startColor.map((start, index) => {
        const end = endColor[index];
        return Math.round(start + (end - start) * scrollPercent);
    });

    const colorString = `rgb(${currentColor.join(',')})`;

    document.querySelectorAll('.color-change').forEach(element => {
        element.style.color = colorString;
    });
})})