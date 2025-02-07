// script.js
const sdgsData = [
    { id: 1, name: "No Poverty", description: "End poverty in all its forms everywhere." },
    { id: 2, name: "Zero Hunger", description: "End hunger, achieve food security and improved nutrition and promote sustainable agriculture." },
    // Add all 17 SDGs here
];

const sdgSlider = document.querySelector('.sdg-slider');
const impactForm = document.querySelector('#impact-form');
const impactResult = document.querySelector('#impact-result');

// Populate SDG Slider
sdgsData.forEach(sdg => {
    const sdgCard = document.createElement('div');
    sdgCard.classList.add('sdg-card');
    sdgCard.innerHTML = `<h3>${sdg.name}</h3><p>${sdg.description}</p>`;
    sdgCard.addEventListener('click', () => {
        alert(`You selected: ${sdg.name}`);
    });
    sdgSlider.appendChild(sdgCard);
});

// Calculate Ecological Impact
impactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const energy = document.getElementById('energy-consumption').value;
    const materials = document.getElementById('materials-used').value;

    // Simple calculation for impact (just a sample, you can customize)
    const impactScore = (energy * 0.1) + (materials * 0.05);
    
    impactResult.innerHTML = `Your ecological impact score is: ${impactScore.toFixed(2)} units.`;
});
