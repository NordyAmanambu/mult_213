// API Configuration
const API_KEY = '7tlmGglNfRI6ZzZmwvMa0PV1KOYaMOTI';
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2';

/**
 * Fetch events by city and category
 */
export const fetchEventsByCity = async (city, category = '') => {
    try {
        let url = `${BASE_URL}/events.json?apikey=${API_KEY}&city=${encodeURIComponent(city)}&size=20`;
        
        if (category) {
            url += `&classificationName=${encodeURIComponent(category)}`;
        }

        console.log('Fetching events from:', url);

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);

        const response = await fetch(url, {
            signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();

        if (!data._embedded || !data._embedded.events) {
            throw new Error('No events found for this search criteria');
        }

        return {
            success: true,
            events: data._embedded.events,
            page: data.page,
            totalEvents: data.page.totalElements
        };

    } catch (error) {
        console.error('Error fetching events:', error);

        if (error.name === 'AbortError') {
            throw new Error('Request timeout - please try again');
        }

        throw error;
    }
};

/**
 * Fetch single event details by ID
 */
export const fetchEventById = async (eventId) => {
    try {
        const url = `${BASE_URL}/events/${eventId}.json?apikey=${API_KEY}`;

        console.log('Fetching event details from:', url);

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();

        return {
            success: true,
            event: data
        };

    } catch (error) {
        console.error('Error fetching event details:', error);
        throw error;
    }
};