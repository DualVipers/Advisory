import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter(),
        prerender: {
            default: true,
        },
    },
    extensions: [".svelte", ".md"],
    preprocess: [
        preprocess({
            postcss: true,
        }),
        mdsvex({
            extensions: [".md"],
            layout: {
                advisories: "src/routes/advisories/_advisory.svelte",
            },
        }),
    ],
};

export default config;
