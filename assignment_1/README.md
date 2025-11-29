# Event Finder - Ticketmaster API Integration

A modern, responsive web application that allows users to search for upcoming events in cities across North America using the Ticketmaster Discovery API.

## 🎯 Project Overview

This project demonstrates asynchronous JavaScript techniques, API integration, and dynamic DOM manipulation to create an interactive event search application.

## ✨ Features

- **Event Search**: Search for events by city name and category
- **Dynamic Content**: Results update without page refresh
- **Event Details**: Click any event to view detailed information
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Error Handling**: Graceful error messages for API failures
- **Loading States**: Visual feedback during data fetching
- **Modal Windows**: Elegant event detail views
- **Direct Ticketing**: Links to purchase tickets on Ticketmaster

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and accessibility features
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**:
  - `async/await` for API calls
  - ES6 modules
  - Arrow functions
  - Template literals
  - Promises
  - DOM manipulation
- **Ticketmaster Discovery API**: Event data source
- **Git**: Version control

## 📁 File Structure

```
assignment_1/
├── src/
│   ├── api.js          # API fetch functions
│   ├── app.js          # Main application logic
│   └── dom.js          # DOM manipulation functions
├── index.html          # Main HTML structure
├── style.css           # Stylesheet
├── .gitignore         # Git ignore rules
├── README.md          # This file
└── package.json       # Project metadata
```

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for API calls
- Code editor (VS Code recommended)
- Git installed

### Installation

1. **Clone or download the repository**

```bash
git clone 
cd assignment_1
```

2. **Open in browser**

Simply open `index.html` in your browser:
- Double-click the file, or
- Right-click → Open with → Browser
- Or use a local server (recommended):

```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server
```

3. **Start searching for events!**

## 📖 Usage

1. **Enter a city name** (e.g., Toronto, Vancouver, Montreal)
2. **Select a category** (optional):
   - Music
   - Sports
   - Arts & Theatre
   - Family
   - Film
3. **Click "Search Events"**
4. **Browse results** - Click any event for more details
5. **Get tickets** - Click the "Get Tickets" button to purchase

## 🔌 API Endpoints Used

### Endpoint 1: Search Events by City
```
GET https://app.ticketmaster.com/discovery/v2/events.json
Parameters: city, classificationName, apikey
```

### Endpoint 2: Get Event Details
```
GET https://app.ticketmaster.com/discovery/v2/events/{id}.json
Parameters: apikey
```

## 🎨 Design Features

- **Color Scheme**: Blue and red inspired by Ticketmaster branding
- **Typography**: Clean, modern sans-serif fonts
- **Responsive Grid**: Auto-adapting event cards
- **Smooth Animations**: Hover effects and modal transitions
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation

## 🧪 JavaScript Features Demonstrated

### Modern ES6+ Syntax
```javascript
// Arrow functions
const getEvents = async (city) => { /* ... */ };

// Template literals
const html = `${event.name}`;

// Destructuring
const { name, dates, _embedded } = event;

// Async/await
const data = await fetchEventsByCity(city);
```

### Async Programming
```javascript
// Promise-based API calls
export const fetchEventsByCity = async (city, category) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

// Error handling
try {
    const result = await fetchEvents();
} catch (error) {
    showError(error.message);
}
```

### DOM Manipulation
```javascript
// Dynamic element creation
const card = document.createElement('article');
card.innerHTML = `${event.name}`;
container.appendChild(card);

// Event listeners
form.addEventListener('submit', handleSearch);
```

## 🔧 Error Handling

The application handles various error scenarios:

- **No events found**: Friendly message suggesting alternative searches
- **Network errors**: Timeout handling and connection failure messages
- **API errors**: HTTP status code handling
- **Empty inputs**: Form validation before submission

## 📱 Responsive Design

Breakpoints:
- **Desktop**: 1200px+ (3-column grid)
- **Tablet**: 768px - 1199px (2-column grid)
- **Mobile**: < 768px (1-column grid, stacked form)

## 🔐 API Key

**Current API Key**: `7tlmGglNfRI6ZzZmwvMa0PV1KOYaMOTI`

⚠️ **Note**: This is a demo key. For production, store API keys securely using environment variables.

## 🐛 Known Issues

- API rate limits may apply (5,000 requests/day for free tier)
- Some events may not have complete information
- Images vary in quality depending on event organizers

## 🚀 Future Enhancements

- [ ] Add date range filtering
- [ ] Implement pagination for more results
- [ ] Save favorite events (localStorage)
- [ ] Share events on social media
- [ ] Map view of event locations
- [ ] Price alerts and notifications

## 📝 Git Workflow

```bash
# Check status
git status

# Add changes
git add .

# Commit with message
git commit -m "Add feature: event search functionality"

# Push to remote (if using GitHub)
git push origin main
```

## ✅ Validation

- **HTML**: Validated using [W3C Markup Validator](https://validator.w3.org/)
- **CSS**: Validated using [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
- **JavaScript**: Follows ES6+ best practices

## 📚 Resources

- [Ticketmaster Discovery API Documentation](https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/)
- [MDN Web Docs - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [MDN Web Docs - Async/Await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)

## 👤 Author

**Your Name**
- Assignment: Asynchronous JavaScript & API Integration
- Course: [Your Course Code]
- Date: [Current Date]

## 📄 License

This project is created for educational purposes.

---

**Powered by Ticketmaster API** 🎫