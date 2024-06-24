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
   git clone [https://github.com/sourabh707/Pet-Viewer.git]
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

1. **Pet List**:
   - Dropdown to select a pet.
   - Button to view details of the selected pet.

2. **Pet Details**:
   - Displays the details of the selected pet including name, type, breed, weight, and color.




