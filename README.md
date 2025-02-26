## **Frontend README.md**

```markdown
# AI-Powered PowerPoint Generator - Frontend

This is the frontend for the AI-Powered PowerPoint Generator. It is built using Next.js and Tailwind CSS. The frontend allows users to input a topic, set parameters, and download a generated PowerPoint presentation.

## Prerequisites

- Node.js 16 or higher
- NPM or Yarn

## Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Chandrasura25/ai-powerpoint-frontend.git
   cd ai-powerpoint-frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   - Create a `.env.local` file in the root directory:
     ```env
     NEXT_PUBLIC_API_URL=http://localhost:8000
     ```
   - Replace `http://localhost:8000` with the URL of your backend API if it's hosted elsewhere.

## Running the Frontend

1. Start the development server:
   ```bash
   npm run dev
   ```

2. The frontend will be available at `http://localhost:3000`.

## Features

- Input a topic for the AI-generated presentation.
- Set parameters such as the number of slides and preferred layout.
- Download the generated `.pptx` file.

## Project Structure

- `app/page.tsx`: Main page with the user interface.
- `globals.css`: Tailwind CSS styles.
- `tailwind.config.js`: Tailwind CSS configuration.

## Dependencies

- `next`
- `react`
- `react-dom`
- `tailwindcss`
- `autoprefixer`
- `postcss`
- `shadcn/ui`

---

## License

This project is licensed under the MIT License.
```

---

## **How to Use Both Together**

1. Start the backend server first:
   ```bash
   cd ai-powerpoint-backend
   uvicorn main:app --reload
   ```

2. Start the frontend development server:
   ```bash
   cd ai-powerpoint-frontend
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000` to use the web interface.
