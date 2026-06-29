document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('inquiryForm');
    const responseMessage = document.getElementById('responseMessage');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Wannan yana hana shafin sake buɗewa (refresh)

        // Karbar bayanai daga form
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;

        // Nuna sakon godiya
        responseMessage.textContent = `Thank you, ${name}! We have received your inquiry: "${message}". We will get back to you soon.`;
        
        // Share form din bayan an gama
        form.reset();
    });
});
                          
