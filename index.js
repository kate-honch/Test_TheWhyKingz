const nextBtn = document.querySelector('.main_btn__next');
const prevBtn = document.querySelector('.main_btn__prev');
const nextBtnCircle = document.querySelector('.main_btn__next_circle');
const prevBtnCircle = document.querySelector('.main_btn__prev_circle');
const nextSlider = document.querySelector('.main_slider__container_next');
const prevSlider = document.querySelector('.main_slider__container');


nextBtn.addEventListener('click', () => {
  prevSlider.classList.remove('active'); 
  nextSlider.classList.add('active');
  nextBtnCircle.classList.add('active');
  prevBtnCircle.classList.remove('active'); 
});

prevBtn.addEventListener('click', () => {
  prevSlider.classList.add('active'); 
  prevSlider.classList.add('active');
  nextSlider.classList.remove('active');
  prevBtnCircle.classList.add('active');
  nextBtnCircle.classList.remove('active');
});

