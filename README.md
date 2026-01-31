# IT23255456

**IT3040-ITPM Assignment 1**
**Student Registration Number: IT23255456


# SwiftTranslator Test Automation Suite

This project contains automated tests for the SwiftTranslator Singlish to Sinhala conversion system using Playwright.

## Project Overview

This test suite validates the functionality of the SwiftTranslator web application by testing:
- 24 positive functional scenarios
- 10 negative functional scenarios  
- 1 UI-related test scenario

## Prerequisites

Before running the tests, ensure you have the following installed:
- Node.js (version 16 or higher)
- npm (comes with Node.js)

## Installation

### Clone or Download the Repository

- If you have the project as a zip file, extract it.
- Open it in VScode

### Install Dependencies: Install the Playwright framework and necessary browser binaries by running

- npm install
- npx playwright install

### You can execute the test suite using the following commands

- npx playwright test

## Configuration

Test timeouts and settings can be modified in `playwright.config.js`:
- Default timeout: 60 seconds
- Expect timeout: 10 seconds
- Retries: 0 (can be increased for flaky tests)
- Workers: 1 (sequential execution)

## Troubleshooting

### Tests Failing

1. **Network Issues**: Ensure stable internet connection
2. **Site Changes**: Website structure may have changed - verify selectors
3. **Timeout Errors**: Increase timeout values in config or test files

### Installation Issues

1. **Node.js Version**: Ensure you're using Node.js 16+
   ```bash
   node --version
   ```

2. **Clear Cache**: If having npm issues
   ```bash
   npm cache clean --force
   npm install
   ```

### Browser Issues

If Playwright browsers aren't working:
```bash
npx playwright install --force chromium
```

## Test Results

Test results are saved in the `test-results/` directory:
- HTML report: `test-results/html-report/`
- JSON results: `test-results/test-results.json`
- Screenshots/Videos: `test-results/artifacts/`

## Notes

- Tests run sequentially (workers: 1) to avoid conflicts
- Each test waits 2 seconds between executions for stability
- Screenshots and videos are captured only on failure
- All tests use the same base URL configured in `playwright.config.js`