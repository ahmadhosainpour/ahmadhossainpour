let main = document.getElementById("main");
let img = document.getElementById("img");
let width = "1920px";
let height = "636";

let zoom = 1;
let zoomingSpeed = 0.09;
const feature = img.getBoundingClientRect().width;

document.addEventListener("wheel", (e) => {

  if (e.deltaY > 0) {
    img.style.transform = `scale(${(zoom += zoomingSpeed)})`;
    main.style.overflow = "hidden";
    
  } else if (e.deltaY < 0) {
    if (img.getBoundingClientRect().width != feature) {
      img.style.transform = `scale(${(zoom -= zoomingSpeed)})`;
      main.style.overflow = "hidden";
    }
  }
});


let isDown = false;
let startY;
let scrollTOP;

main.addEventListener('mousedown', (e) => {
  isDown = true;
  main.classList.add('active');
  startY = e.pageY - main.offsetTop;
  scrollTOP = main.scrollTop;
});
main.addEventListener('mouseleave', () => {
  isDown = false;
  main.classList.remove('active');
});
main.addEventListener('mouseup', () => {
  isDown = false;
  main.classList.remove('active');
});
main.addEventListener('mousemove', (e) => {
  if(!isDown) return;
   e.preventDefault();
  const y= e.pageY - main.offsetTop
  const walk = (y - startY) * 5 ; //scroll-fast
  main.scrollTop= scrollTOP - walk;
  console.log(walk);
});
let startX;
let scrollLeft

main.addEventListener('mousedown', (e) => {
  isDown = true;
  main.classList.add('active');
  startX = e.pageX - main.offsetLeft;
  scrollLeft = main.scrollLeft;
});
main.addEventListener('mouseleave', () => {
  isDown = false;
  main.classList.remove('active');
});
main.addEventListener('mouseup', () => {
  isDown = false;
  main.classList.remove('active');
});
main.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - main.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  main.scrollLeft = scrollLeft - walk;
  console.log(walk);
});