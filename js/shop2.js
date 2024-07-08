document.addEventListener('DOMContentLoaded', () => {
    let x = 0, y = 0, targetX = 0, targetY = 0;
    const limitX = 0;
    const limitY = 600;


    const updateBackgroundPosition = () => {
        x += (targetX - x) * 1;
        y += (targetY - y) * 1;

        const boundedX = Math.max(-limitX, Math.min(x, limitX));
        const boundedY = Math.max(-limitY, Math.min(y, limitY));

        document.documentElement.style.setProperty('--background-position-x', -boundedX + 'px');
        document.documentElement.style.setProperty('--background-position-y', -boundedY + 'px');

        requestAnimationFrame(updateBackgroundPosition);
    };

    const onMouseMove = (event) => {
        targetX = event.clientX;
        targetY = event.clientY;
    };

    document.addEventListener('mousemove', onMouseMove);
    updateBackgroundPosition();
});
