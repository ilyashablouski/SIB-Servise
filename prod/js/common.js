// /**
//  * Define variables
//  */
// const infoButton = document.querySelector('.header-nav-info');
// // const catalogButton = document.querySelector('.header-nav-catalog');
// const dropdownBlock = document.querySelector('.dropdown-block');
// const tableElement = document.querySelector('.scheme-table');
// const popupElements = document.querySelectorAll('.pop-up-js-window');


// // Define functions
// /**
//  * Open/close element
//  */
// function openInfoElement() {
//   dropdownBlock.classList.toggle('is-show');
// }

// /**
//  * Open/close pop-up
//  *
//  * @param {object} target
//  */
// function showPopup(target) {
//   // If we in photo-icon element
//   if (target.classList.contains('photo-icon')) {
//     const popupWindow = target.parentElement.nextElementSibling;
//     popupWindow.classList.toggle('is-show');
//   // If we in photo-icon__inner element
//   } else if (target.classList.contains('photo-icon__inner')) {
//     const popupWindow = target.parentElement.parentElement.nextElementSibling;
//     popupWindow.classList.toggle('is-show');
//   }
// }

// // DOM loaded
// window.addEventListener('DOMContentLoaded', () => {
//   // Close pop-up if clicked other areas
//   $(document).mouseup(function(e) { // Document click event
//     const $popupElement = $('.pop-up-js'); // Element's class
//     if (!$popupElement.is(e.target) && // Not our block
//       $popupElement.has(e.target).length === 0) { // Not sons
//       for (const elem of popupElements) {
//         elem.classList.remove('is-show');
//       }
//     }
//   });

//   // Call open info element event
//   infoButton.addEventListener('click', openInfoElement);

//   /**
//    * Dilocation and call events
//    */
//   tableElement.addEventListener('click', (event) => {
//     const target = event.target;

//     showPopup(target);
//   });
// });
