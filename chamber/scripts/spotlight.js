const membersUrl = "data/members.json";
const spotlightContainer = document.querySelector("#spotlight-container");

async function getSpotlightMembers() {
  try {
    const response = await fetch(membersUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const members = await response.json();

    const qualifiedMembers = members.filter(
      (member) => member.membership === 2 || member.membership === 3,
    );

    displaySpotlights(qualifiedMembers);
  } catch (error) {
    console.error("Error fetching members for spotlights:", error);
  }
}

function displaySpotlights(members) {
  spotlightContainer.innerHTML = "";

  const shuffled = members.sort(() => 0.5 - Math.random());
  const selectedMembers = shuffled.slice(0, 3);
  selectedMembers.forEach((member) => {
    const card = document.createElement("div");
    card.classList.add("spotlight-card");

    let membershipName =
      member.membership === 3 ? "Gold Member" : "Silver Member";

    card.innerHTML = `
            <img src="${member.image}" alt="${member.name} Logo" loading="lazy">
            <h3>${member.name}</h3>
            <p class="membership-level ${membershipName.toLowerCase().split(" ")[0]}">${membershipName}</p>
            <p>📍 ${member.address}</p>
            <p>📞 ${member.phone}</p>
            <p><a href="${member.website}" target="_blank">Visit Website</a></p>
        `;

    spotlightContainer.appendChild(card);
  });
}
getSpotlightMembers();
