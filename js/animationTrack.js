document.addEventListener('DOMContentLoaded', () => {
    const vid1 = document.querySelector(".vid1");
    const welcoming = document.querySelector(".welcoming");
    const future = document.querySelector(".future");
    const xb = document.querySelector(".xb");
    const lc = document.querySelector(".lc");
    const blue = document.querySelector(".blue");
    const how = document.querySelector(".how");

    window.addEventListener("scroll", () => {
        let vid1Bottom = vid1.getBoundingClientRect().bottom;
        let futureLeft = future.getBoundingClientRect().left;
        let xbLeft = xb.getBoundingClientRect().left;
        let lcLeft = lc.getBoundingClientRect().left;
        let windowHeight = window.innerHeight;
        let windowWidth = window.innerWidth;

        if (vid1Bottom <= windowHeight) {
            welcoming.classList.add('appear');
        }
        if(futureLeft <= windowWidth)
        {
            future.classList.add('appear');
        }
        if(xbLeft <= windowWidth)
        {
            xb.classList.add('appear');
        }
        if(lcLeft <= windowWidth)
        {
            lc.classList.add('appear');
        }
        if (windowHeight >= blue.getBoundingClientRect().bottom) {
            how.classList.add('PopUp');
      }
        

    });
});