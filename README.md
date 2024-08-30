# Olympic Dashboard

## Project Overview

This project is an Angular-based web application that displays Olympic data, including the number of medals won by different countries across various years. The application provides an interactive dashboard and detailed country views, allowing users to explore Olympic participation and achievements.

This project is part of my fullstack developer course at OpenClassrooms

## Features

- Home Dashboard: Displays an overview of the total number of participating countries and Olympic events.
- Country View: Detailed statistics for each country, including the total number of medals, athletes, and years of participation.
- Responsive Design: Ensures a smooth experience on both desktop and mobile devices.

## Prerequisites

Before you begin, ensure you meet the following requirements:

- Node.js and npm (Node Package Manager) installed on your local machine.
- Angular CLI installed globally (npm install -g @angular/cli).

## Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/olympic-dashboard.git
cd olympic-dashboard
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
ng serve
```

Open your browser and navigate to http://localhost:4200/ to view the application.

## Usage

- Home Page: Provides a summary of the number of participating countries and Olympic events.
- Country Details: Click on a country in the dashboard to view detailed statistics, including participation by year and total medals won.
- Error Handling: If the application detects a network issue, it will redirect to a custom disconnected page.
