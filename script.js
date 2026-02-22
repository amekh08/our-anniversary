/**
 * Romantic Anniversary Site
 * - Cute alert helper
 * - Typewriter effect for love letter
 * - (Password check & redirect live in index.html; modal in love.html)
 */

(function () {
  'use strict';

  /**
   * Show a cute alert (uses native alert for simplicity; style is in the message).
   * Can be replaced with a custom modal if you add one.
   */
  window.showCuteAlert = function (message) {
    if (typeof message !== 'string') message = 'Something went wrong 💕';
    alert(message);
  };

  /**
   * Typewriter effect: reveal text character by character.
   * @param {HTMLElement} el - Element containing the full text to type out.
   */
  window.runTypewriter = function (el) {
    if (!el || !el.textContent) return;

    var fullText = el.textContent.trim();
    el.textContent = '';
    el.style.visibility = 'visible';

    var i = 0;
    var speed = 45;

    function type() {
      if (i < fullText.length) {
        el.textContent += fullText.charAt(i);
        i += 1;
        setTimeout(type, speed);
      } else {
        // Remove cursor after a short delay
        el.classList.remove('typewriter');
      }
    }

    type();
  };
})();
