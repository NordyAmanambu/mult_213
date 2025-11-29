/**
 * DOM Manipulation and UI Functions
 */

// Get DOM elements
const elements = {
    eventsGrid: document.getElementById('eventsGrid'),
    loadingIndicator: document.getElementById('loadingIndicator'),
    errorMessage: document.getElementById('errorMessage'),
    resultsHeader: document.getElementById('resultsHeader'),
    resultsTitle: document.getElementById('resultsTitle'),
    resultsCount: document.getElementById('resultsCount'),
    eventModal: document.getElementById('eventModal'),
    modalBody: document.getElementById('modalBody')
};

/**
 * Show loading indicator
 */
export const showLoading = () => {
    elements.loadingIndicator.classList.remove('hidden');
    elements.errorMessage.classList.add('hidden');
    elements.resultsHeader.classList.add('hidden');
    elements.eventsGrid.innerHTML = '';
};

/**
 * Hide loading indicator
 */
export const hideLoading = () => {
    elements.loadingIndicator.classList.add('hidden');
};

/**
 * Show error message
 * @param {string} message - Error message to display
 */
export const showError = (message) => {
    elements.errorMessage.classList.remove('hidden');
    elements.errorMessage.querySelector('.error-text').textContent = message;
    elements.resultsHeader.classList.add('hidden');
    hideLoading();
};

/**
 * Hide error message
 */
export const hideError = () => {
    elements.errorMessage.classList.add('hidden');
};

/**
 * Format date string
 * @param {string} dateString - ISO date string
 * @param {string} timeString - Time string
 * @returns {string} - Formatted date
 */
const formatDate = (dateString, timeString) => {
    const date = new Date(dateString);
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    
    if (timeString) {
        return `${formattedDate} at ${timeString}`;
    }
    
    return formattedDate;
};

/**
 * Get event image URL
 * @param {Array} images - Array of event images
 * @returns {string} - Image URL or placeholder
 */
const getEventImage = (images) => {
    if (images && images.length > 0) {
        // Find the best resolution image
        const bestImage = images.find(img => img.width >= 640) || images[0];
        return bestImage.url;
    }
    return 'https://via.placeholder.com/640x360?text=No+Image+Available';
};

/**
 * Get event category
 * @param {Object} classifications - Event classifications
 * @returns {string} - Category name
 */
const getEventCategory = (classifications) => {
    if (classifications && classifications.length > 0) {
        return classifications[0].segment.name || 'Event';
    }
    return 'Event';
};

/**
 * Get price range
 * @param {Array} priceRanges - Price ranges array
 * @returns {string} - Formatted price range
 */
const getPriceRange = (priceRanges) => {
    if (priceRanges && priceRanges.length > 0) {
        const min = priceRanges[0].min;
        const max = priceRanges[0].max;
        const currency = priceRanges[0].currency || 'USD';
        
        if (min === max) {
            return `${currency} $${min.toFixed(2)}`;
        }
        
        return `${currency} $${min.toFixed(2)} - $${max.toFixed(2)}`;
    }
    return 'Price not available';
};

/**
 * Create event card element
 * @param {Object} event - Event data
 * @returns {HTMLElement} - Event card element
 */
const createEventCard = (event) => {
    const card = document.createElement('article');
    card.className = 'event-card';
    card.setAttribute('data-event-id', event.id);

    const imageUrl = getEventImage(event.images);
    const category = getEventCategory(event.classifications);
    const venue = event._embedded?.venues?.[0];
    const venueName = venue?.name || 'Venue TBA';
    const city = venue?.city?.name || 'City TBA';
    const date = event.dates?.start?.localDate;
    const time = event.dates?.start?.localTime;
    const formattedDate = date ? formatDate(date, time) : 'Date TBA';
    const priceRange = getPriceRange(event.priceRanges);

    card.innerHTML = `
        <img src="${imageUrl}" alt="${event.name}" class="event-image" loading="lazy">
        <div class="event-content">
            <span class="event-category">${category}</span>
            <h3 class="event-name">${event.name}</h3>
            <p class="event-date">📅 ${formattedDate}</p>
            <p class="event-venue">📍 ${venueName}, ${city}</p>
            <p class="event-price">💵 ${priceRange}</p>
        </div>
    `;

    return card;
};

/**
 * Render events to the grid
 * @param {Array} events - Array of events
 * @param {string} city - City name searched
 */
export const renderEvents = (events, city) => {
    hideLoading();
    hideError();

    // Show results header
    elements.resultsHeader.classList.remove('hidden');
    elements.resultsTitle.textContent = `Events in ${city}`;
    elements.resultsCount.textContent = `Found ${events.length} event${events.length !== 1 ? 's' : ''}`;

    // Clear existing events
    elements.eventsGrid.innerHTML = '';

    // Create and append event cards
    events.forEach(event => {
        const card = createEventCard(event);
        elements.eventsGrid.appendChild(card);
    });

    // Add click listeners to cards
    addEventCardListeners();
};

/**
 * Create modal content for event details
 * @param {Object} event - Event data
 * @returns {string} - HTML string for modal content
 */
const createModalContent = (event) => {
    const imageUrl = getEventImage(event.images);
    const category = getEventCategory(event.classifications);
    const venue = event._embedded?.venues?.[0];
    const venueName = venue?.name || 'Venue TBA';
    const address = venue?.address?.line1 || '';
    const city = venue?.city?.name || '';
    const state = venue?.state?.name || '';
    const postalCode = venue?.postalCode || '';
    const fullAddress = `${address}, ${city}, ${state} ${postalCode}`.trim();
    
    const date = event.dates?.start?.localDate;
    const time = event.dates?.start?.localTime;
    const formattedDate = date ? formatDate(date, time) : 'Date TBA';
    const priceRange = getPriceRange(event.priceRanges);
    const ticketUrl = event.url;

    return `
        <img src="${imageUrl}" alt="${event.name}" class="modal-image">
        <span class="event-category">${category}</span>
        <h2 class="modal-title">${event.name}</h2>
        
        <div class="modal-info">
            <div class="info-item">
                <span class="info-label">📅 Date:</span>
                <span class="info-value">${formattedDate}</span>
            </div>
            <div class="info-item">
                <span class="info-label">📍 Venue:</span>
                <span class="info-value">${venueName}</span>
            </div>
            <div class="info-item">
                <span class="info-label">🏢 Address:</span>
                <span class="info-value">${fullAddress || 'Address TBA'}</span>
            </div>
            <div class="info-item">
                <span class="info-label">💵 Price Range:</span>
                <span class="info-value">${priceRange}</span>
            </div>
            ${event.info ? `
            <div class="info-item">
                <span class="info-label">ℹ️ Info:</span>
                <span class="info-value">${event.info}</span>
            </div>
            ` : ''}
        </div>

        <a href="${ticketUrl}" target="_blank" rel="noopener noreferrer" class="btn-tickets">
            🎫 Get Tickets
        </a>
    `;
};

/**
 * Show event modal
 * @param {Object} event - Event data
 */
export const showEventModal = (event) => {
    elements.modalBody.innerHTML = createModalContent(event);
    elements.eventModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
};

/**
 * Hide event modal
 */
export const hideEventModal = () => {
    elements.eventModal.classList.add('hidden');
    document.body.style.overflow = ''; // Restore scrolling
};

/**
 * Add click listeners to event cards
 */
const addEventCardListeners = () => {
    const cards = document.querySelectorAll('.event-card');
    
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const eventId = card.getAttribute('data-event-id');
            // Dispatch custom event to fetch and show details
            document.dispatchEvent(new CustomEvent('showEventDetails', { detail: { eventId } }));
        });
    });
};

/**
 * Initialize modal close functionality
 */
export const initModalListeners = () => {
    // Close button
    const closeBtn = document.querySelector('.modal-close');
    closeBtn?.addEventListener('click', hideEventModal);

    // Click outside modal to close
    elements.eventModal?.addEventListener('click', (e) => {
        if (e.target === elements.eventModal) {
            hideEventModal();
        }
    });

    // ESC key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !elements.eventModal.classList.contains('hidden')) {
            hideEventModal();
        }
    });
};