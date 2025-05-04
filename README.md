# Task Flow Builder

A simple interface for building business processes with tasks represented as interconnected blocks.

## Features

- Drag-and-drop task nodes.
- Editable task names via input fields or sidebar.
- Connect tasks with smoothstep edges.
- Persistent state using Redux Toolkit and `redux-persist`.
- Responsive and modern UI with Tailwind CSS.

## Tech Stack

- **[React](https://reactjs.org)** ⚛️ - UI library.
- **[Redux Toolkit](https://redux-toolkit.js.org)** 🛠️ - Easy Redux for state.
- **[React Flow](https://reactflow.dev)** 🌐 - Flowchart builder.
- **[TypeScript](https://www.typescriptlang.org)** 📜 -  Typed JavaScript.
- **[Tailwind CSS](https://tailwindcss.com)** 🎨 - CSS framework.
- **[Vite](https://vitejs.dev)** 🚀 - Fast build tool.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/olehronin/task-flow-builder.git
   ```
2. Navigate to the project directory:
   ```bash
   cd task-flow-builder
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

   Open `http://localhost:3000` or `http://192.168.0.120:3000` in your browser.

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the project for production.
- `npm run lint`: Runs ESLint.
- `npm run preview`: Previews the production build.

## Project Structure

- `src/components/`: React components.
- `src/store/`: Redux store, slices, and persist configuration.
- `src/types/`: TypeScript type definitions.
- `src/styles/`: Global CSS and Tailwind configuration.
