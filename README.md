# Swiss Testing Night - Test Automation Tools

## Overview

This repository is dedicated to the Swiss Testing Night event, focusing on testing a System Under Test (SUT) using different Test Automation (TA) tools, including Selenium, Cypress, and Playwright. The SUT used for this demonstration is derived from the [Tab Tracker](https://github.com/codyseibert/tab-tracker) repository by Cody Seibert.

## Repository Structure

### Installation and Setup

Before running the tests, ensure you have the necessary dependencies installed:

#### `install_dependencies.bat`

This batch file installs the required dependencies for the project, including the necessary Node.js packages and libraries. For that you need to have [Node Js](https://nodejs.org/en/) installed: You must at least have **NODE version 8.2.1**


```bash
install_dependencies.bat
```

### Starting the Application

To start the System Under Test (SUT), use the following batch file:

#### `start_application.bat`

This batch file initializes and runs the Tab Tracker application.

```bash
start_application.bat
```

### Running Test Suites

We have test suites written in different Test Automation (TA) tools: Selenium, Cypress, and Playwright. You can run them individually or in sequence using the following batch files:

#### `run_selenium.bat`

This batch file executes the test suite using Selenium.

```bash
run_selenium.bat
```

#### `run_cypress.bat`

This batch file executes the test suite using Cypress.

```bash
run_cypress.bat
```

#### `run_playwright.bat`

This batch file executes the test suite using Playwright.

```bash
run_playwright.bat
```

Each batch file runs a set of predefined test cases for the SUT, using the respective TA tool.

## Getting Started

1. Clone this repository to your local machine:

```bash
git clone https://github.com/your-username/swiss-testing-night-ta-tools.git
```

2. Navigate to the project directory:

```bash
cd swiss-testing-night-ta-tools
```

3. Install dependencies:

```bash
install_dependencies.bat
```

4. Start the application:

```bash
start_application.bat
```

5. Run the desired test suite:

```bash
run_selenium.bat
run_cypress.bat
run_playwright.bat
```


