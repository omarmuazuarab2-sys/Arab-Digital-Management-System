/**
 * Arab Digital Management System - Advanced Inquiry Handler
 * Features: Input Validation, Loading Animation, and Dynamic Feedback
 */
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('inquiryForm');
    const responseMessage = document.getElementById('responseMessage');
    const submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        // 1. Loading State: Give user visual feedback
        const originalBtnText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Capture user input
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // 2. Advanced Validation: Ensure no empty fields
        if (!name || !email || !message) {
            showResponse('Please fill in all fields correctly.', 'red');
            resetButton();
            return;
        }

        // 3. Simulating an API Call (Professional feature)
        try {
            await new Promise(resolve => setTimeout(resolve, 1500)); // Simulating network delay

            // Success feedback
            showResponse(`Thank you, ${name}! Your inquiry has been sent successfully.`, '#28a745');
            form.reset();
        } catch (error) {
            showResponse('Something went wrong. Please try again later.', 'red');
        } finally {
            resetButton(originalBtnText);
        }
    });

    // Helper: Function to show styled messages
    function showResponse(text, color) {
        responseMessage.textContent = text;
        responseMessage.style.color = color;
        responseMessage.style.opacity = '1';
        
        // Auto-fade out after 5 seconds
        setTimeout(() => {
            responseMessage.style.opacity = '0';
        }, 5000);
    }

    // Helper: Reset button state
    function resetButton(text = 'Send Message') {
        submitBtn.textContent = text;
        submitBtn.disabled = false;
    }
});
        
