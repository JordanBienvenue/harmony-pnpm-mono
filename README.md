##  pnmp Monorepo workspace with astro + tailwindcss

 This project showcases an Astro site that utilizes a Tailwind CSS component library, all managed within a PNPM workspace. This setup allows you to efficiently develop and collaborate on web projects while enjoying hot reload functionality.

## Project Structure


`/packages`
: Contains the Tailwind CSS component library and other common shareable items .
 
`/sites`
: Contains the Astro site that uses components from the library.

`pnpm-workspace.yaml`
: Configuration file for the PNPM workspace setup.



## Commands

1. Install PNPM globally (if not already installed):  `npm install -g pnpm`
2. Install dependencies: `pnpm install`
3.  Start the Astro site: `pnpm --filter beryl dev  `


