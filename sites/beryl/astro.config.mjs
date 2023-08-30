import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { default as tailwindConfig } from '@harmony/styles/tailwind.config.cjs';


// https://astro.build/config
export default defineConfig({
    integrations: [
        tailwind({
            // Example: Provide a custom path to a Tailwind config file
            configFile: tailwindConfig
        }),
    ],
});
