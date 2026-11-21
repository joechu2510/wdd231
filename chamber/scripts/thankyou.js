document.addEventListener("DOMContentLoaded", () => {
    const summaryContainer = document.querySelector("#application-summary");
    if (!summaryContainer) return;

    const params = new URLSearchParams(window.location.search);

    const firstName = params.get("firstName") || "Not provided";
    const lastName = params.get("lastName") || "Not provided";
    const email = params.get("email") || "Not provided";
    const phone = params.get("phone") || "Not provided";
    const organization = params.get("organization") || "Not provided";
    const rawTimestamp = params.get("timestamp");

    let formattedDate = "Not provided";
    if (rawTimestamp) {
        const dateObj = new Date(rawTimestamp);
        formattedDate = Number.isNaN(dateObj.getTime())
            ? rawTimestamp
            : dateObj.toLocaleString();
    }

    summaryContainer.innerHTML = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email Address:</strong> ${email}</p>
        <p><strong>Mobile Phone:</strong> ${phone}</p>
        <p><strong>Business / Organization:</strong> ${organization}</p>
        <p><strong>Submitted Timestamp:</strong> ${formattedDate}</p>
    `;
});