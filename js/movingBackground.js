document.addEventListener('DOMContentLoaded', () => {
    let x = 0, y = 0, targetX = 0, targetY = 0;
    const limitX = 0;
    const limitY = 600;
    const point1 = document.querySelector(".point1");
    const circle1 = document.querySelector(".circle1");
    const initialTopPoint1 = 750;
    const initialTopCircle1 = 720;

    const point2 = document.querySelector(".point2");
    const circle2 = document.querySelector(".circle2");
    const initialTopPoint2 = 675;
    const initialTopCircle2 = 645;

    const point3 = document.querySelector(".point3");
    const circle3 = document.querySelector(".circle3");
    const initialTopPoint3 = 605;
    const initialTopCircle3 = 575;

    const cd = document.querySelector(".CD");
    const initialTopCD = 200;

    const arrowContainer = document.querySelector(".arrow-container");
    const initialTopArrow = 10 ;

    let isWithinBounds1 = true; 
    let isWithinBounds2 = true; 
    let isWithinBounds3 = true; 
    let isWithinBoundsCD = true; 
    let isWithinBoundsArrow = true; 




    const updateBackgroundPosition = () => {
        x += (targetX - x) * 1;
        y += (targetY - y) * 1;

        const boundedX = Math.max(-limitX, Math.min(x, limitX));
        const boundedY = Math.max(-limitY, Math.min(y, limitY));

        document.documentElement.style.setProperty('--background-position-x', -boundedX + 'px');
        document.documentElement.style.setProperty('--background-position-y', -boundedY + 'px');

        const newTopPoint1 = initialTopPoint1 - targetY + 30;
        const newTopCircle1 = initialTopCircle1 - targetY + 30;

        if (newTopPoint1 <= 180) {
            isWithinBounds1 = false;
        } else if (targetY <= initialTopPoint1 - 160) {
            isWithinBounds1 = true;
        }

        if (isWithinBounds1) {
            point1.style.top = `${newTopPoint1}px`;
            circle1.style.top = `${newTopCircle1}px`;
        }

        const newTopPoint2 = initialTopPoint2 - targetY ;
        const newTopCircle2 = initialTopCircle2 - targetY ;

        if (newTopPoint2 <= 80) {
            isWithinBounds2 = false;
        } else if (targetY <= initialTopPoint2 - 60) {
            isWithinBounds2 = true;
        }

        if (isWithinBounds2) {
            point2.style.top = `${newTopPoint2}px`;
            circle2.style.top = `${newTopCircle2}px`;
        }

        const newTopPoint3 = initialTopPoint3 - targetY ;
        const newTopCircle3 = initialTopCircle3 - targetY ;

        if (newTopPoint3 <= 50) {
            isWithinBounds3 = false;
        } else if (targetY <= initialTopPoint3 - 30) {
            isWithinBounds3 = true;
        }

        if (isWithinBounds3) {
            point3.style.top = `${newTopPoint3}px`;
            circle3.style.top = `${newTopCircle3}px`;
        }

        const newTopCD = initialTopCD - targetY + 30;

        if (newTopCD <= -265) {
            isWithinBoundsCD = false;
        } else if (targetY <= initialTopCD + 285) {
            isWithinBoundsCD = true;
        }

        if (isWithinBoundsCD) {
            cd.style.top = `${newTopCD}px`;
        }

        const newTopArrow = initialTopArrow - targetY + 30;

        if (newTopArrow <= -300) {
            isWithinBoundsArrow = false;
        } else if (targetY <= initialTopArrow + 320) {
            isWithinBoundsArrow = true;
        }

        if (isWithinBoundsArrow) {
            arrowContainer.style.top = `${newTopArrow}px`;
        }

        requestAnimationFrame(updateBackgroundPosition);
    };

    const onMouseMove = (event) => {
        targetX = event.clientX;
        targetY = event.clientY;
    };

    document.addEventListener('mousemove', onMouseMove);
    updateBackgroundPosition();
});
