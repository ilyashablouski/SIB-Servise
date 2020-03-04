/**
 * Define variables
 */
const infoButton = document.querySelector('.header-nav-info');
// const catalogButton = document.querySelector('.header-nav-catalog');
const photoIconButton = document.querySelector('.min-photo');
const dropdownBlock = document.querySelector('.dropdown-block');


// Define functions
/**
 * Open/close element through display
 */
function openInfoElement() {
  dropdownBlock.classList.toggle('is-show');
}

// DOM loaded
window.addEventListener('DOMContentLoaded', () => {
  // Close pop-up if clicked other areas
  $(document).mouseup(function(e) { // событие клика по веб-документу
    const div = $('.pop-up-js'); // тут указываем class элемента
    if (!div.is(e.target) && // если клик был не по нашему блоку
      div.has(e.target).length === 0) { // и не по его дочерним элементам
      dropdownBlock.classList.remove('is-show'); // скрываем его
      console.log('Yes');
    }
  });

  infoButton.addEventListener('click', openInfoElement);

  photoIconButton.addEventListener('click', openInfoElement);
});


// function showModalFirst() {
//   event.preventDefault();
//   document.body.classList.add('overflow-hidden');
//   modalNodeOther.classList.remove('modal-container_close');
// }

// /**
//   Show first modal node's definition
//  */
// function showModalFirst() {
//   event.preventDefault();
//   document.body.classList.add('overflow-hidden');
//   modalNodeOther.classList.remove('modal-container_close');
// }

// /**
//   Show second modal node's definition
//  */
// function showModalSecond() {
//   event.preventDefault();
//   document.body.classList.add('overflow-hidden');
//   modalNodeUpdate.classList.remove('modal-container_close');
// }

// /**
//  * Close second modal node's definition
//  *
//  * @param {object} currentNode -текущий элемент
//  */
// function closeModal(currentNode) {
//   event.preventDefault();
//   document.body.classList.remove('overflow-hidden');
//   currentNode.closest('.we-modal').classList.add('modal-container_close');
// }

// DOM loaded
// window.addEventListener('DOMContentLoaded', () => {
//   /**
//    * Add styles to nav with scroll
//    */
//   window.addEventListener('scroll', function() {
//     if (window.pageYOffset >= 44) {
//       stickNode.classList.add('localnav-sticking');
//     } else {
//       stickNode.classList.remove('localnav-sticking');
//     }
//   });

//   /**
//   Dilocation and call events
//  */
//   mainNode.addEventListener('click', (event) => {
//     const target = event.target;
//     if (target.classList.contains('button-modal-1')) {
//       showModalFirst();
//     } else if (target.classList.contains('button-modal-2')) {
//       showModalSecond();
//     } else {
//       return;
//     }
//   });

//   // Overlay close areas
//   mainModalNode.addEventListener('click', (event) => {
//     const target = event.target;
//     if (target.classList.contains('close-button') ||
//         target.classList.contains('overlay')) {
//       closeModal(target);
//     } else {
//       return;
//     }
//   });
// });
