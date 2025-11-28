# Employee Task Tracker

A single-page frontend web application built using React and Tailwind CSS.  
It was created as an assignment to demonstrate handling mock employee data, task filtering, task creation, and basic frontend-only state management.

## Overview

The app simulates a small task tracker that allows users to:
- View employees and their assigned tasks
- Filter tasks by status (All / Pending / In Progress / Completed)
- Add new tasks using a modal
- Update the status of existing tasks through a dropdown
- View a small dashboard summary with total tasks and completion percentage
- Search employees by name

The entire app runs on the frontend using mock JSON data.  
All updates are saved to **localStorage**, so data persists after page refresh.

## Features

- **Employee & Task View**  
  Displays employees with total task count and their tasks.

- **Status Filter**  
  Filters tasks by status dynamically.

- **Add Task Modal**  
  Allows selecting an employee and entering a task title.

- **Edit Task Status**  
  Each task has a dropdown to change its status.

- **Dashboard Summary**  
  Shows:
  - Total tasks
  - Completed tasks
  - Completion percentage
  - Number of employees

- **Employee Search**  
  Filters the employee list by name.

- **LocalStorage Persistence**  
  Saves all updates automatically.

## Tech Stack

- React (Vite)
- Tailwind CSS
- JavaScript
- LocalStorage
- Mock JSON (`src/data/employees.json`)

## Getting Started

```bash
npm install
npm run dev
