# Olympic Dashboard
## Project Overview

This project is an Angular-based web application that displays Olympic data, including the number of medals won by different countries across various years. The application provides an interactive dashboard and detailed country views, allowing users to explore Olympic participation and achievements.

# Features

- Home Dashboard: Displays an overview of the total number of participating countries and Olympic events.
- Country View: Detailed statistics for each country, including the total number of medals, athletes, and years of participation.
- Responsive Design: Ensures a smooth experience on both desktop and mobile devices.
- Error Handling: Custom error pages and alerts for issues such as network disconnections.

# Prerequisites

Before you begin, ensure you have met the following requirements:

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

## Project Structure

- src/app/core: Contains core services and models used throughout the application.
- src/app/pages: Contains components for different pages like Home, Not Found, and Disconnected.
- src/app/country: Contains components related to the detailed view of Olympic data by country.
- src/assets: Static assets like images, styles, and JSON data files.

## Usage

- Home Page: Provides a summary of the number of participating countries and Olympic events.
- Country Details: Click on a country in the dashboard to view detailed statistics, including participation by year and total medals won.
- Error Handling: If the application detects a network issue, it will redirect to a custom disconnected page.

## Error Handling

The application includes an error interceptor that catches HTTP errors and redirects users to a custom error page when a network issue is detected.

## Contributing

If you would like to contribute to this project:

1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Make your changes and commit them (git commit -m 'Add new feature').
4. Push to the branch (git push origin feature-branch).
5. Submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any inquiries or issues, please reach out to [your email] or open an issue on the GitHub repository.
