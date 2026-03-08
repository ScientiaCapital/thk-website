/**
 * THK Enterprises - Contact Form Handler
 * Integrates with Formspree for form submission
 */

// Formspree endpoint - replace with your actual form ID
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

/**
 * Handle form submission
 * @param {Event} event - Form submit event
 */
async function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const btn = form.querySelector('button[type="submit"]');
  const originalText = btn.textContent;

  // Disable button and show loading state
  btn.textContent = 'Sending...';
  btn.disabled = true;

  // Collect form data
  const formData = new FormData(form);

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      // Success
      btn.textContent = 'Message Sent!';
      btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
      form.reset();

      // Reset button after delay
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.disabled = false;
      }, 3000);
    } else {
      // Error from Formspree
      const data = await response.json();
      throw new Error(data.error || 'Form submission failed');
    }
  } catch (error) {
    console.error('Form submission error:', error);

    // Show error state
    btn.textContent = 'Error - Try Again';
    btn.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';

    // Reset button after delay
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
      btn.disabled = false;
    }, 3000);
  }
}

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} - Whether email is valid
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Real-time form validation
 * @param {HTMLFormElement} form - Form element to validate
 */
function setupValidation(form) {
  const emailInput = form.querySelector('input[type="email"]');

  if (emailInput) {
    emailInput.addEventListener('blur', () => {
      if (emailInput.value && !isValidEmail(emailInput.value)) {
        emailInput.style.borderColor = '#ef4444';
      } else {
        emailInput.style.borderColor = '';
      }
    });
  }
}

/**
 * Initialize form handling
 */
export function initForm() {
  const form = document.querySelector('.contact-form');

  if (form) {
    form.addEventListener('submit', handleSubmit);
    setupValidation(form);
  }
}

// Make handleSubmit available globally for inline onclick (fallback)
window.handleSubmit = handleSubmit;

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initForm);
} else {
  initForm();
}
