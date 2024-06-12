
---

# Cheeseria App

Welcome to Cheeseria! This is a simple React application designed to showcase a list of cheeses available for purchase. Users can add cheeses to their cart and see the total price of the selected items.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)

## Features

- Displays a list of cheeses fetched from an API.
- Users can add cheeses to their cart.
- The total price of the items in the cart is displayed.
- Responsive and modern UI with Material-UI.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/cheeseria-app.git
   cd cheeseria-app
   ```

2. **Install the dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3000`.

## Usage

1. **Navigate to the application in your browser:**

   ```
   http://localhost:3000
   ```

2. **Explore the list of cheeses:**

   - Browse through the list of available cheeses.
   - Click on the shopping cart icon to add a cheese to your cart.

3. **View the total price:**

   - The total price of the selected items will be displayed at the top of the page.

## Testing

To run the unit tests, use the following command:

```bash
npm test
```

This will execute the tests using Jest and React Testing Library.


## Docker
### Using Docker Compose
Build and start the containers

```sh
docker-compose up
```
The API will be running at http://localhost:3001.

### Using Dockerfile
Build the Docker image:
```sh
docker build -t cheeseria-ui .

## Folder Structure

.
cheeseria-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── CheeseItem.tsx
│   │   ├── CheeseList.tsx
│   ├── hooks/
│   │   └── useCheeses.ts
│   ├── pages/
│   │   └── ExplorePage.tsx
│   ├── styles/
│   │   └── useStyles.ts
│   ├── types.ts
│   ├── App.tsx
│   ├── index.tsx
│   ├── theme.ts
│   ├── setupTests.ts
├── tests/
│   ├── CheeseItem.test.tsx
│   ├── CheeseList.test.tsx
│   ├── useCheeses.test.ts
├── package.json
├── tsconfig.json
└── README.md
```

### File Descriptions

- **`public/index.html`**: The main HTML file.
- **`src/components/`**: Contains the React components (`CheeseItem.tsx`, `CheeseList.tsx`).
- **`src/hooks/`**: Contains custom hooks (`useCheeses.ts`).
- **`src/pages/`**: Contains the React components for pages (`ExplorePage.tsx`).
- **`src/styles/`**: Contains styling (`useStyles.ts`).
- **`src/types.ts`**: Contains TypeScript types.
- **`src/App.tsx`**: The main application component.
- **`src/index.tsx`**: Entry point of the React application.
- **`src/theme.ts`**: Contains the Material-UI theme configuration.
- **`src/setupTests.ts`**: Setup file for Jest and React Testing Library.
- **`tests/`**: Contains unit tests for components and hooks.
- **`package.json`**: Contains project metadata and dependencies.
- **`tsconfig.json`**: TypeScript configuration file.
- **`README.md`**: Project documentation.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static typing.
- **Material-UI**: A popular React UI framework.
- **Jest**: A delightful JavaScript testing framework.
- **React Testing Library**: A library for testing React components.
- **axios**: Promise based HTTP client for the browser and node.js.