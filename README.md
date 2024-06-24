# Pet Viewer Application

## Table of Contents

1. [Introduction](#introduction)
2. [Libraries Used](#libraries-used)
3. [Project Structure](#project-structure)
4. [Data Flow](#data-flow)
5. [Setup and Installation](#setup-and-installation)
6. [Usage](#usage)


## Introduction

The Pet Viewer Application is a simple React-based project designed to list pets and view their details. This project aims to demonstrate the use of React hooks, React Router for navigation, Material-UI for UI components, and Axios for data fetching.

## Libraries Used

1. **React**: A JavaScript library for building user interfaces.
2. **React Router**: A collection of navigational components that compose declaratively with your application.
3. **Material-UI**: A popular React UI framework that provides a comprehensive set of components.
4. **Axios**: A promise-based HTTP client for the browser and Node.js.
5. **Mocky**: An online service used to create mock APIs.

## Project Structure

```
pet-viewer/
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── PetList.js
│   │   ├── PetDetails.js
│   ├── services/
│   │   ├── petService.js
│   ├── App.js
│   ├── index.js
├── README.md
├── package.json
```

## Data Flow

1. **Fetching Data**:
   - The data is fetched from a mock server using Axios in the `fetchPets` function located in `petService.js`.
   - The data is cached to prevent multiple requests.

2. **State Management**:
   - The `PetList` component maintains the state for the list of pets and the selected pet using React hooks (`useState` and `useEffect`).

3. **Navigation**:
   - React Router is used to navigate between the Pet List and Pet Details components. The `useNavigate` hook from React Router v6 is used for programmatic navigation.

4. **Displaying Data**:
   - The `PetList` component displays a dropdown list of pets.
   - Upon selecting a pet and clicking the "View Details" button, the user is navigated to the `PetDetails` component.
   - The `PetDetails` component fetches the details of the selected pet and displays them.

## Setup and Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/pet-viewer.git
   cd pet-viewer
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

## Usage

1. **Home Page**:
   - Displays a welcome message and a link to view the list of pets.

2. **Pet List**:
   - Dropdown to select a pet.
   - Button to view details of the selected pet.

3. **Pet Details**:
   - Displays the details of the selected pet including name, type, breed, weight, and color.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# Pet-Viewer
