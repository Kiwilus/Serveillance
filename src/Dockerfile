FROM python:3.14

WORKDIR /app

RUN python -m venv .venv

COPY requirements.txt .

RUN .venv/bin/pip install --no-cache-dir -r requirements.txt

COPY . .

CMD [".venv/bin/uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
