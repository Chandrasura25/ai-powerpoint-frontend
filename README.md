## **Frontend README.md**

# AI-Powered PowerPoint Generator - Frontend

Welcome to the frontend of the AI-Powered PowerPoint Generator. This application is crafted using Next.js and Tailwind CSS, providing a seamless interface for users to input topics, configure parameters, and download AI-generated PowerPoint presentations.

## Prerequisites

Ensure you have the following installed:

- **Node.js**: Version 16 or higher
- **Package Manager**: NPM or Yarn

## Setup Instructions

Follow these steps to set up the project:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Chandrasura25/ai-powerpoint-frontend.git
   cd ai-powerpoint-frontend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   - Create a `.env.local` file in the root directory:
     ```env
     NEXT_PUBLIC_API_URL=http://localhost:8000
     ```
   - Update `http://localhost:8000` with your backend API URL if hosted elsewhere.

## Running the Frontend

To start the frontend server, execute:

1. **Start Development Server**:
   ```bash
   npm run dev
   ```

2. Access the frontend at `http://localhost:3000`.

## Key Features

- **Topic Input**: Enter a topic for the AI to generate a presentation.
- **Parameter Configuration**: Customize the number of slides and layout preferences.
- **Download Option**: Obtain the generated presentation as a `.pptx` file.

## Project Structure Overview

- **`app/page.tsx`**: Contains the main user interface.
- **`globals.css`**: Includes Tailwind CSS styles.
- **`tailwind.config.js`**: Configuration file for Tailwind CSS.

## Dependencies

This project relies on the following packages:

- `next`
- `react`
- `react-dom`
- `tailwindcss`
- `autoprefixer`
- `postcss`
- `shadcn/ui`

---

## License

This project is open-source and available under the MIT License.

---

## **How to Use Both Frontend and Backend Together**

To integrate the frontend with the backend, follow these steps:

1. **Start the Backend Server**:
   ```bash
   cd ai-powerpoint-backend
   uvicorn main:app --reload
   ```

2. **Start the Frontend Development Server**:
   ```bash
   cd ai-powerpoint-frontend
   npm run dev
   ```

3. **Access the Application**:
   Open your browser and navigate to `http://localhost:3000` to interact with the web interface.
