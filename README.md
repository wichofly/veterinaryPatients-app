# Vet Patients App

## Overview

This project is a Veterinary Patient App where users can add, edit, view, and delete patient information. It's built using React and various modern tools for state management, form handling, and notifications.

## Features

- **Patient Management**: Users can add new patients, edit existing ones, and delete patients from the system.
- **Patient List**: Displays all patients with details like name, caretaker, symptoms, email, and more.
- **Patient Form**: A user-friendly form for adding and editing patient information with validation.
- **Notifications**: Toast notifications (via `react-toastify`) are used to inform users about actions like adding, updating, and deleting patients.
- **Persistent State**: The app uses zustand for state management with persist middleware to save patient data across sessions.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Zustand**: A small, fast, and scalable state management tool used here to manage patient data and actions like adding, updating, and deleting patients.
- **react-hook-form**: Efficient and simple form handling with easy-to-implement validation.
- **react-toastify**: For displaying toast notifications, such as success or error messages.
- **Tailwind CSS**: Utility-first CSS framework used for styling.
- **UUID**: A library to generate unique identifiers for each patient.
- **devtools and persist middleware**: These are used with Zustand to enhance the developer experience and ensure persistent state storage.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/wichofly/veterinaryPatients-app.git
   ```

2. Navigate to the project directory:

   ```
   cd veterinaryPatients-app
   ```

3. Install the dependencies:

   ```
   npm install
   ```

4. Start the development server:

   ```
   npm run dev
   ```

## Explanation of Key Technologies

- [Zustand](https://www.npmjs.com/package/zustand#typescript-usage):
  It is used for managing the state of the app. In this project, it stores patient data and supports actions like adding, editing, and deleting patients. The `devtools` middleware allows you to use browser dev tools for debugging state, and `persist` middleware ensures the state is saved to local storage, keeping patient data even after refreshing the page. Additionally, it eliminates the need of complex patterns like Custom Hook, Reducers and Context. Zustand provides an intuitive API that simplifies state logic.

- [react-hook-form](https://www.react-hook-form.com/):
  It simplifies handling form submissions and validation. It reduces re-renders compared to traditional React forms. The `register` method is used to link input fields to the form state, and it also provides validation rules. Validation messages (like "Patient name is required") are displayed when the user interacts with the form.

- [react-toasty](https://www.npmjs.com/package/react-toastify):
  It is used for showing toast notifications for actions like adding, updating, or deleting patients. It's a simple way to provide users with feedback about their interactions with the app. For example, when a patient is added, a success toast with a message like "Patient Added" appears at the top of the screen.

## Deploy in Vercel

[Veterinary Patients App](https://veterinary-patients-app.vercel.app/)
