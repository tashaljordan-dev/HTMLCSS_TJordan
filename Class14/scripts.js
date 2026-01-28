const title = document.getElementById('title');
title.textContent = 'Dr. Jordan\'s Class 14 Page';
const picture = document.getElementById('image');
picture.addEventListener('click', () => {
  picture.innerHTML = <img scr ='images/class14_image2.jpg' alt='Class 14 Image 2'>;                
}
console.log(title);
