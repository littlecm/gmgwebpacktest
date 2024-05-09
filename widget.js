import React from 'react';
import ReactDOM from 'react-dom';
import Component from './app/component'; // Adjust the path as needed
import './app/styles.css'; // Assuming your styles are set up to be importable like this

async function checkDealershipStatus(apiUrl) {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.length > 0) {
            const { Expired, Status } = data[0];
            console.log(`Checking status: Expired - ${Expired}, Status - ${Status}`); // Debugging output
            // Check if the widget should be displayed
            return Expired === 'Expired' || Status === 'Paused';
        }
        return false;
    } catch (error) {
        console.error('Failed to fetch dealership data:', error);
        return false; // Assume not to show the widget on error
    }
}

function renderWidget(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        const url = container.getAttribute('data-url');
        const sheet = container.getAttribute('data-sheet');
        const make = container.getAttribute('data-make');
        const model = container.getAttribute('data-model');
        const fullUrl = `${url}?sheet=${encodeURIComponent(sheet)}&Make=${encodeURIComponent(make)}&Model=${encodeURIComponent(model)}`;

        checkDealershipStatus(fullUrl).then(shouldDisplayWidget => {
            if (shouldDisplayWidget) {
                ReactDOM.render(<Component />, container);
            } else {
                console.log('Conditions not met for displaying the widget.');
            }
        });
    } else {
        console.error('Container not found');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderWidget('gmg-digital-updating-specials-widget');
});

// Optionally export the render function for manual initialization
export { renderWidget };
