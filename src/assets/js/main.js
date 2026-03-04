let toggleColor = document.querySelector(".color-mode");
toggleColor.document.addEventListener("click", () =>{
  document.documentElement.classList.toggle("dark-theme")
});



// document.addEventListener('DOMContentLoaded', () => {
//   // Functions to open and close a modal
//   function openModal($el) {
//     $el.classList.add('is-active');
//   }

//   function closeModal($el) {
//     $el.classList.remove('is-active');
//   }

//   function closeAllModals() {
//     (document.querySelectorAll('.modal') || []).forEach(($modal) => {
//       closeModal($modal);
//     });
//   }

//   // Add a click event on buttons to open a specific modal
//   (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
//     const modal = $trigger.dataset.target;
//     const $target = document.getElementById(modal);

//     $trigger.addEventListener('click', () => {
//       openModal($target);
//     });
//   });

//   // Add a click event on various child elements to close the parent modal
//   (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
//     const $target = $close.closest('.modal');

//     $close.addEventListener('click', () => {
//       closeModal($target);
//     });
//   });

//   // Add a keyboard event to close all modals
//   document.addEventListener('keydown', (event) => {
//     if(event.key === "Escape") {
//       closeAllModals();
//     }
//   });
// });



//   // Tab JS
//   document.querySelectorAll("#nav li").forEach(function(navEl) {
//     navEl.onclick = function() { toggleTab(this.id, this.dataset.target); }
//   });

//   function toggleTab(selectedNav, targetId) {
//     var navEls = document.querySelectorAll("#nav li");

//     navEls.forEach(function(navEl) {
//       if (navEl.id === selectedNav) {
//         navEl.classList.add("is-active");
//       } else {
//         if (navEl.classList.contains("is-active")) {
//           navEl.classList.remove("is-active");
//         }
//       }
//     });

//     var tabs = document.querySelectorAll(".tab-pane");

//     tabs.forEach(function(tab) {
//       if (tab.id === targetId) {
//         tab.style.display = "block";
//       } else {
//         tab.style.display = "none";
//       }
//     });
//   }