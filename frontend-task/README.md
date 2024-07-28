# Frontend Task: Data Fetcher Utility

## Features

- Fetches data from the Bored API 15 times.
- Displays data in a table format.
- Provides buttons to:
  - Download JSON
  - Download CSV
  - Print to Console

## Prerequisites

- [Node.js](https://nodejs.org/)
- [cors-anywhere](https://github.com/Rob--W/cors-anywhere/)

## Roadblocks

I ran into a cors error similar to this [post](https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe). Due to the limited time, the solution may be suboptimal but you'll have to run the cors-proxy server before starting the application.

### 1. Setting Up the Project

1. Navigate to the project directory and install the dependencies\*

```sh
npm install
```

2. In the terminal, start the cors-proxy server (see Roadblocks for more inforamtion)

```sh
node node_modules/cors-anywhere/server.js --port 8080 --disable-rate-limits"
```

3. In another terminal or tab, start the live server

```sh
live-server
```

or

```sh
npm start
```
