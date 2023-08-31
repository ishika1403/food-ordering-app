# Food Ordering Project

Welcome to the Food Ordering Project! This is a web application built using Next.js for placing food orders.

## Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/): Make sure you have Node.js installed on your system.

## Getting Started

Follow these steps to set up and run the project locally:

### Clone Repository

1. Clone repository using the command below:

   ```sh
   git clone git@github.com:ishika1403/food-ordering-app.git
   ```

### Install Dependencies

1. Change your working directory to the project folder:

   ```sh
   cd <project_folder>
   ```

2. Install project dependencies using npm:

   ```sh
    npm install
   ```

3. Populate environment variables from `.env.example`

### Run Development Server

1. Start the development server

   ```sh
   npm run dev
   ```

2. Open your web browser and go to http://localhost:3000 to access the application.

## Project Structure

```plaintext
food-ordering-project/
├── src/                 # Main application source code
│   ├── app/             # NextJS pages using App Router
│   ├── components/      # Reusable React components
│   ├── redux/           # Redux-related code
│   │   ├── features     # Contains redux toolkit slices
│   │   ├── provider.js    # Redux provider wrapper component
│   │   ├── store.js       # Redux store configuration
│
└── ...                  # Other project-related files
```

## App Features

This section outlines the key features and functionality of the Food Ordering app.

All pages are server rendered with react server components and fetched data is cached upon subsequent requests. For more info check out [NextJS docs](https://nextjs.org/docs/app/building-your-application/caching)

- **Sign In:**

  - Users can sign in using demo username and password.
  - Username : `johndoe` | Password : `demo`

- **Landing Page:**
  - Lists all restaurants.
  - Provides 3-level filter options based on rating, city, and cuisine.
  - Filters restaurants based on selected criteria.
- **Favourites Feature:**

  - Users can add restaurants to favourites from the landing page.
  - Accessible only when signed in.
  - Favourite restaurant data is stored locally in the Redux store.

- **Menu Page:**

  - Clicking on the menu button under a restaurant navigates to the restaurant's menu.
  - Users can add food items to the cart from the menu page.
  - Add to Cart feature is accessible only when signed in.

- **Navbar Navigation:**

  - Users can navigate to Favourites and Cart pages from the navbar.
  - Navigation to Cart and Favourites is accessible only when signed in.
  - If not signed in, redirection to the sign-in page occurs.
  - Users can also sign in or sign out using the button provided in the navbar.

- **Cart Functionality:**
  - Users can add food items to the cart.
  - Cart allows adding items from the same restaurant only.
  - Data related to the cart is stored locally in the Redux store.

Please note that the application's functionality depends on user authentication. Certain features like adding to favourites, adding to cart, and accessing specific pages are only accessible to signed-in users. Redirection occurs when attempting to access these features without signing in.
