document.addEventListener("DOMContentLoaded", () => {
    const timestampInput = document.querySelector("#timestamp");
    if (timestampInput) {
        timestampInput.value = new Date().toISOString();
    }

    const benefitButtons = document.querySelectorAll(".benefit-link");
    const closeButtons = document.querySelectorAll(".close-modal");
    const modals = document.querySelectorAll(".membership-modal");

    benefitButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const modalId = button.dataset.modal;
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.showModal();
            }
        });
    });

    closeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const modal = button.closest("dialog");
            if (modal) {
                modal.close();
            }
        });
    });

    modals.forEach((modal) => {
        let mouseDownOnBackdrop = false;

        modal.addEventListener("mousedown", (event) => {
            mouseDownOnBackdrop = event.target === modal;
        });

        modal.addEventListener("click", (event) => {
            if (event.target === modal && mouseDownOnBackdrop) {
                modal.close();
            }
            mouseDownOnBackdrop = false;
        });
    });
});