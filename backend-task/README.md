# Data Fetcher Utility

This utility script fetches data from the Bored API a specified number of times and provides options to save the data in JSON or CSV format, or print it to the console.

## Features

- Accepts command line arguments
- Fetches data from the Bored API.
- Outputs data in three formats:
  - JSON file
  - CSV file
  - Console output

## Prerequisites

- [Node.js](https://nodejs.org/)

## Usage

Run the script from the command line using Node.js, specifying the number of times to fetch data and the output format.

### Command Line Options

- `-n`: Specifies the number of times to call the API.
- `-f`: Specifies the format to retrieve the data. Options are `json`, `csv`, or `console`.
- `-h`: Displays help information.

### Examples

1. **Fetch data 5 times and save as JSON:**

```sh
node activity -n 5 -f json
```

2. **Fetch data 3 times and save as CSV**:

```sh
node activity -n 3 -f csv
```

3. **Fetch data 10 times and print to console**:

```sh
node activity -n 3 -f console
```
