# TODO App (Example React App)

- Problem: We want to rebuild a basic version of Trello

## Components

Entire UI from the Assignment description
```
<Header title="Welcome to My Website!" message="Thanks for visiting my site." />
<TodoList todos={[
  { id: 1, text: "Complete React assignment", completed: false },
  { id: 2, text: "Study for math test", completed: false },
  { id: 3, text: "Do laundry", completed: true }
]} />
<Card title="My Card Title" subtitle="My Card Subtitle" content="This is the content of my card." image="https://example.com/my-image.jpg" />
<Footer message="Contact me at contact@mywebsite.com" />
```

- `Header` Component
  - Take in `title` and `message` properties
- `TodoList` Component
  - Takes in an array of `todo` objects
  - Display the todos, using `Card` Components
- `Card` Component
  - `title` - Displayed at the top (Required)
  - `subtitle` - (Optional)
  - `content` - (Optional)
  - `image` - (Optional)
- `Footer` Component
  - `message` - Message to Display

## Data Models

- Anything beyond primitive values (booleans, strings, numbers)
- `TODO` Object / Model:
  - `id` - A Unique Number
  - `text` - Some text to display (Ex. "Get Furnace Fixed")
  - `completed` - Boolean indicating completion
  - `state` - (Optional) Different States
  - `color` - (Optional)
  - `deadline` - (Optional)
  - `assigned_to` - (Optional) Who is doing it?

## Development Tasks

- [] Build the HTML Template for the `Header` component
- [] Build the HTML Template for the `Footer` component
- [] Define the `TODO` model / JSON
- [] Build the HTML Template for the `Card` component
- [] Build the HTML Template for the `TODOList` component
- [] Implement each User Action / Workflow

## Data Transformation / Key User Workflows

- User Actions:
  - Add a new TODO
  - Edit it:
    - Change the `text`
    - Mark as `completed`
    - Change the `color`
    - Delete it

### Adding a New TODO

- Creating a new TODO object
- Pushing into our todos array
  
### Mark it as Completed

- Toggle the checkbox
- Does the card get moved to a different pile?
