import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
    integrations: [react()],
    // image: {
    //     domains: ["liamwebwright.co.uk"],
    // },
    output: "hybrid",
    adapter: netlify(),
});
