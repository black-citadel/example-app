# Example App

The OpenTelemetry example app demonstrates how to instrument a simple Node.js application with OpenTelemetry to collect and export trace data to a backend such as Jaeger or Zipkin. This app can serve as a starting point for implementing OpenTelemetry in your own applications.

# Running the example app

```bash
docker-compose up --build
```

# Test
```bash
for i in {1..100}; do curl -s -w "\nTime taken: %{time_total}\n" -o /dev/null -X POST http://localhost:8000/register; sleep 0.1; done
```