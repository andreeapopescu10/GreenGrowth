// Example SDG Data - You can add more SDGs to this array
const sdgsData = [
    { id: 1, name: "No Poverty", description: "End poverty in all its forms everywhere." },
    { id: 2, name: "Zero Hunger", description: "End hunger, achieve food security and improved nutrition and promote sustainable agriculture." },
    { id: 3, name: "Good Health and Well-being", description: "Ensure healthy lives and promote well-being for all at all ages." },
    { id: 4, name: "Quality Education", description: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all." },
    { id: 5, name: "Gender Equality", description: "Achieve gender equality and empower all women and girls." },
    // Add the rest of SDGs here if needed
];

// Selecting the container where we will display SDGs
const sdgContainer = document.querySelector('.sdg-cards-container');

// Function to generate SDG cards
function createSDGCards() {
    sdgsData.forEach(sdg => {
        // Create card element for each SDG
        const card = document.createElement('div');
        card.classList.add('sdg-card');
        card.innerHTML = `
            <h3>${sdg.name}</h3>
            <p>${sdg.description}</p>
        `;
        // Adding click event to each SDG card
        card.addEventListener('click', () => {
            alert(`Learn more about: ${sdg.name}\n\nDescription: ${sdg.description}`);
        });
        
        // Append the card to the container
        sdgContainer.appendChild(card);
    });
}

// Call the function to create SDG cards when the page loads
createSDGCards();
