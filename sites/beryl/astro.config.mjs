import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { tailwindConfig } from "@harmony/shared-styles";

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind({
			configFile: tailwindConfig,
		}),
	],
});
