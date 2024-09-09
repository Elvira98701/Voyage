import gsap from "gsap";

export const cursor = () => {
  const cursor = document.querySelector(".banner__image");
  const banner = document.querySelector(".banner");
  const header = document.querySelector(".header");
  const mouse = {
    x: 0,
    y: 0,
  };
  let isMoving = false;

  const updateCoordinates = (e) => {
    mouse.x = e.clientX / 25;
    mouse.y = e.clientY / 25;
    isMoving = true;
  };

  const stopMoving = () => {
    isMoving = false;
  };

  const animateCursor = () => {
    if (isMoving) {
      gsap.to(cursor, {
        duration: 0.5,
        x: mouse.x,
        y: mouse.y,
        ease: "power4.out",
      });
    }

    requestAnimationFrame(animateCursor);
  };

  animateCursor();

  banner.addEventListener("mousemove", updateCoordinates);
  banner.addEventListener("mousedown", stopMoving);
  banner.addEventListener("mouseup", updateCoordinates);

  header.addEventListener("mousemove", updateCoordinates);
  header.addEventListener("mousedown", stopMoving);
  header.addEventListener("mouseup", updateCoordinates);
};
