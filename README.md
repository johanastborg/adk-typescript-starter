# ADK TypeScript Starter

This is a starter project for building agents using the [Google Agent Development Kit (ADK)](https://github.com/google/adk) in TypeScript. It includes a simple example agent that can tell the current time in a specified city.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

## Getting Started

1.  **Clone the repository** (if you haven't already):
    ```bash
    git clone https://github.com/johanastborg/adk-typescript-starter.git
    cd adk-typescript-starter
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Set up your environment**:
    Create a `.env` file in the root directory and add your Google Cloud project details or any other required configuration.

## Usage

This project uses the `adk` CLI tool from `@google/adk-devtools`. You can interact with your agent using `npx`.

### Run the Agent in the Terminal

To run the default `agent.ts` directly in your terminal:

```bash
npx adk run agent.ts
```

### Start the Web Interface

To start the ADK web interface and interact with your agents in a browser:

```bash
npx adk web
```

### Start the API Server

To start the ADK API server:

```bash
npx adk api_server
```

## Project Structure

- `agent.ts`: The main implementation of your agent using the ADK `LlmAgent` and `FunctionTool`.
- `package.json`: Project dependencies and metadata.
- `.env`: Environment variables (API keys, project IDs).

## License

This project is licensed under the ISC License.
