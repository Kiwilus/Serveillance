# Serveillance

Serveillance monitors your server’s health, usage, and logs in real time.

## Backend

The backend is built with **FastAPI** and runs using **Uvicorn**.

The FastAPI application and its API routes are located in `main.py`. The actual system information requests are handled in `calls.py` using `psutil`.

For example, `psutil` can be used to retrieve information such as CPU usage and other system statistics.

The API runs on:

```text
http://localhost:8000
```

## Frontend

The frontend is built with **React**, **TypeScript**, and **Vite**.

It communicates with the FastAPI backend through HTTP requests and displays the data provided by the API.

The frontend runs on:

```text
http://localhost:5173
```

## Docker

The project is fully configured to run with Docker. The backend and frontend each have their own Dockerfile and are started together using Docker Compose.

To start the entire application, run:

```bash
docker compose up --build
```

Docker will build and start both the backend and frontend containers automatically.

Once everything has started, the application is available at:

```text
Frontend:
http://localhost:5173

Backend API:
http://localhost:8000
```

To stop the containers:

```bash
docker compose down
```

## Running Without Docker

### Backend

Create and activate a Python virtual environment:

```bash
python -m venv .venv
source .venv/bin/activate
```

Install the dependencies:

```bash
pip install -r requirements.txt
```

Start the FastAPI server with Uvicorn:

```bash
uvicorn main:app --reload
```

The backend will then be available at:

```text
http://localhost:8000
```

### Frontend

Navigate to the frontend directory:

```bash
cd frontend
```

Install the dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

The frontend will then be available at:

```text
http://localhost:5173
```
