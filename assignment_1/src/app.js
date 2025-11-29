/**
 * Main Application Entry Point
 */

import { fetchEventsByCity, fetchEventById } from './api.js';
import { showLoading, hideLoading, showError, renderEvents, showEventModal, initModalListeners } from './dom.js';

// Store fetched events for reference
let currentEvents = [];

/**
 * Handle form submission
 * @param {Event} e - Form submit event
 */
const handleSearch = async (e) => {
    e.preventDefault();

    // Get form values
    const cityInput = document.getElementById('cityInput');
    const categorySelect = document.getElementById('categorySelect');
    
    const city = cityInput.value.trim();
    const category = categorySelect.value;

    // Validation
    if (!city) {
        showError('Please enter a city name');
        return;
    }

    // Show loading state
    showLoading();

    try {
        // Fetch events
        const result = await fetchEventsByCity(city, category);
        
        // Store events
        currentEvents = result.events;

        // Render events
        renderEvents(result.events, city);

        console.log(`Successfully loaded ${result.events.length} events`);

    } catch (error) {
        console.error('Search error:', error);
        
        // Show user-friendly error message
        let errorMessage = 'Unable to load events. ';
        
        if (error.message.includes('No events found')) {
            errorMessage = `No events found in ${city}. Try another city or category.`;
        } else if (error.message.includes('timeout')) {
            errorMessage = 'Request timed out. Please check your connection and try again.';
        } else if (error.message.includes('HTTP Error')) {
            errorMessage = 'Server error. Please try again later.';
        } else {
            errorMessage += error.message || 'Please try again.';
        }

        showError(errorMessage);
    } finally {
        hideLoading();
    }
};

/**
 * Handle showing event details
 * @param {CustomEvent} e - Custom event with eventId
 */
const handleShowEventDetails = async (e) => {
    const { eventId } = e.detail;

    // Find event in current events
    const event = currentEvents.find(evt => evt.id === eventId);

    if (event) {
        // Show modal with existing data
        showEventModal(event);
    } else {
        // Fetch event details if not found (fallback)
        try {
            const result = await fetchEventById(eventId);
            showEventModal(result.event);
        } catch (error) {
            console.error('Error loading event details:', error);
            showError('Unable to load event details');
        }
    }
};

/**
 * Initialize application
 */
const init = () => {
    console.log('Initializing Event Finder app...');

    // Get form element
    const searchForm = document.getElementById('searchForm');

    // Add form submit listener
    if (searchForm) {
        searchForm.addEventListener('submit', handleSearch);
        console.log('Search form listener attached');
    } else {
        console.error('Search form not found!');
    }

    // Initialize modal listeners
    initModalListeners();

    // Listen for custom event to show details
    document.addEventListener('showEventDetails', handleShowEventDetails);

    // Add example cities for user convenience
    const cityInput = document.getElementById('cityInput');
    cityInput?.setAttribute('placeholder', 'e.g., Toronto, Vancouver, Montreal, Saskatoon');

    console.log('Event Finder app initialized successfully!');
};

// Initialize app when DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Export for testing (optional)
export { handleSearch, handleShowEventDetails };