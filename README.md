# TradeGuard

TradeGuard is a prototype dashboard for managing funded trading accounts and planning a compliant account-copying workflow.

## Current status

- Dashboard UI: demo data only.
- Add-account flow: local browser state only; it does not persist.
- Replication switch: visual simulation only; it does not send orders.
- Broker connections: not implemented.
- `/api/health`: server health endpoint.

**Do not enter broker passwords, API secrets, or real account credentials.** No live trading or order routing is implemented.

## Requirements

- Node.js 20 or newer

## Run locally

```bash
npm start
```

Open http://localhost:3000

Health check: http://localhost:3000/api/health

## Deploy on Railway

1. Push this repository to GitHub.
2. In Railway, create a new project and deploy from the GitHub repository.
3. Railway detects the Node project and runs `npm start`.
4. Generate a public domain in the service settings.
5. Confirm `/api/health` returns JSON with `"status":"ok"`.

## Planned next steps

1. Add authentication and user roles.
2. Add a database for account metadata and configurations.
3. Implement broker adapters only after obtaining approved API access and confirming each firm's terms.
4. Add paper-trading / sandbox tests and risk controls before any live order-routing feature.

Never store broker credentials in frontend code, GitHub, or unencrypted database fields.
