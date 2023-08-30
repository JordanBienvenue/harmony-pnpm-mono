# Project Setup Guide

Welcome to the mono-repo project setup guide. In this guide, we'll walk you through the steps to set up the project on your local machine.

## Prerequisites

Before you begin, make sure you have the following tools installed on your system:

- Node.js 
- PNPM : `npm install -g pnpm`


## Step 1: Clone the Repository

1. Open a terminal window.

2. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/JordanBienvenue/harmony-pnpm-mono.git
   cd harmony-pnpm-mono

    ```

## Step 2: Install Dependencies

1. Install the dependencies for the project:

   ```bash
   pnpm install
   ```

## Step 3: Start the Project

1. Start the project:

   ```bash
   pnpm --filter <siteName> dev
   ```

   Example - `pnpm --filter beryl dev`

2. Open a browser window and navigate to `http://localhost:3000` to view the project.

3. build 
   
      ```bash
      pnpm --filter <siteName> build
      ```
   
      Example - `pnpm --filter beryl build`
## Project Structure


`/packages`
: Contains the Tailwind CSS component library and other common shareable items .
 
`/sites`
: Contains the Astro site that uses components from the library.

`pnpm-workspace.yaml`
: Configuration file for the PNPM workspace setup.


## Commands
import private package to site

```bash
pnpm add <package-name> --filter <site-name> --workspace
```