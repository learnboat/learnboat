;console.log('当前代码仅为演示用,不能二次开发。源码只发布在: #');if(location.href.indexOf('ile:')<0){if(location.href.indexOf('oo')<0){parent.location='#'}};/**
* Theme: T-Wind - Tailwind Admin Dashboard Template
* Author: Mannatthemes
* Component: Animation
*/


function myFunction() {
  const selector = document.querySelector('#animate-me');
  const effectButtons = document.querySelectorAll("[data-test]");
  effectButtons.forEach(button => {
      button.addEventListener('click', e => {
          const button = e.target;
          const effect = button.dataset.test;
          selector.classList.add('magictime', effect);
      });

      button.addEventListener('click', e => {
          setTimeout(function () {                       
              const button = e.target;
              const effect = button.dataset.test;
              selector.classList.remove('magictime', effect);
          }, 1000);
      });
  });
}
myFunction();
;console.log('当前代码仅为演示用,不能二次开发。源码只发布在: #');if(location.href.indexOf('ile:')<0){if(location.href.indexOf('oo')<0){parent.location='#'}};