const moments = new Swiper(".moments-stack", {
        effect: "cards",

        grabCursor: true,
        loop: false,

        speed: 700,

        cardsEffect: {
                perSlideOffset: 8,
                perSlideRotate: 1,
                rotate: true,
                slideShadows: false,
        },
});


// CONTACT PAGE - email

const form = document.getElementById('form');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", "18f1d405-e2ea-4a90-b592-ecf139f4993a");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("Success! Your message has been sent.");
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});