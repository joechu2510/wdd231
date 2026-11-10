const url = 'data/members.json';
const cards = document.querySelector('#cards');
const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');

async function getMembersData() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        displayMembers(data);
    } catch (error) {
        console.error('Error fetching members data:', error);
    }
}

const displayMembers = (members) => {
    cards.innerHTML = '';
    
    members.forEach((member) => {
        const section = document.createElement('section');

        const portrait = document.createElement('img');
        portrait.setAttribute('src', member.image);
        portrait.setAttribute('alt', `Logo de ${member.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '150');
        portrait.setAttribute('height', '100');

        const name = document.createElement('h3');
        name.textContent = member.name;

        const address = document.createElement('p');
        address.textContent = member.address;

        const phone = document.createElement('p');
        phone.textContent = member.phone;

        const website = document.createElement('p');
        const webLink = document.createElement('a');
        webLink.setAttribute('href', member.website);
        webLink.setAttribute('target', '_blank');
        webLink.textContent = member.website;
        website.appendChild(webLink);

        const description = document.createElement('p');
        description.textContent = member.description;

        section.appendChild(portrait);
        section.appendChild(name);
        section.appendChild(address);
        section.appendChild(phone);
        section.appendChild(website);
        section.appendChild(description);

        cards.appendChild(section);
    });
};

gridButton.addEventListener('click', () => {
    cards.classList.add('grid');
    cards.classList.remove('list');
    gridButton.classList.add('active');
    listButton.classList.remove('active');
});

listButton.addEventListener('click', () => {
    cards.classList.add('list');
    cards.classList.remove('grid');
    listButton.classList.add('active');
    gridButton.classList.remove('active');
});

getMembersData();