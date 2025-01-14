# Email Writer

The **Email Writer** is a user-friendly interface that allows users to generate quick email replies effortlessly. It features options for selecting different tones and provides a modern UI to enhance the user experience.

## Features

- **User-Friendly Interface**: Intuitive design built with Material-UI (MUI).
- **Tone Selector**: Choose from Formal, Professional, or Friendly tones.
- **Copy to Clipboard**: Easily copy generated email replies.
- **Dynamic Theme**: Toggle between Dark Mode and Light Mode.
- **Responsive Design**: Fully responsive for mobile and desktop.

## Tech Stack

- **React**: Frontend library.
- **Material-UI (MUI)**: For UI components and styling.
- **Axios**: For making API requests to the backend.
- **Vite**: For faster builds and development.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/email-writer-frontend.git
   cd email-writer-frontend
   ```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The app will be available at http://localhost:5173.

## Usage
Enter the email content into the text area.
Select a tone from the dropdown menu (optional).
Click on Generate Reply.
View the generated reply and copy it to the clipboard as needed.

## Scripts
npm run dev: Starts the development server.
npm run build: Builds the app for production.

## Folder Structure
email-writer-frontend/
├── public/            # Static files
├── src/
│   ├── components/    # Reusable components
│   ├── pages/         # App pages
│   ├── App.jsx        # Main App component
│   ├── main.jsx       # Entry point
│   └── styles/        # Custom styling
├── .env               # Environment variables
├── package.json       # Project dependencies and scripts
└── vite.config.js     # Vite configuration

## Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch: git checkout -b feature/your-feature.
Commit your changes: git commit -m 'Add some feature'.
Push to the branch: git push origin feature/your-feature.
Open a pull request.

## License
This project is licensed under the MIT License.
