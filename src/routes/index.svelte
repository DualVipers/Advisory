<script context="module">
    export const load = async ({ fetch }) => {
        const allAdvisoryFiles = import.meta.glob("./advisories/*.md");
        const iterableAdvisoryFiles = Object.entries(allAdvisoryFiles);

        const allAdvisories = await Promise.all(
            iterableAdvisoryFiles.map(async ([path, resolver]) => {
                const { metadata } = await resolver();
                const advisoryPath = path.slice(2, -3);

                return {
                    meta: metadata,
                    path: advisoryPath,
                };
            })
        );

        let advisories = {};

        allAdvisories.forEach((advisory) => {
            const year = new Date(advisory.meta.publish_date).getFullYear();
            if (!advisories[year]) {
                advisories[year] = [];
            }

            advisories[year].push(advisory);
        });

        for (const year in advisories) {
            advisories[year] = advisories[year].sort((a, b) => {
                return new Date(b.meta.date) - new Date(a.meta.date);
            });
        }

        return {
            props: {
                advisories,
            },
        };
    };
</script>

<script>
    import { MetaTags } from "svelte-meta-tags";

    export let advisories;
</script>

<MetaTags
    title="Dual Vipers Advisory"
    description="The Dual Vipers Security Advisory"
    openGraph={{
        title: "Dual Vipers Advisory",
        description: "The Dual Vipers Security Advisory",
        site_name: "Dual Vipers Advisories",
    }}
    twitter={{
        site: "@dual_vs",
        cardType: "summary",
        title: "Dual Vipers Advisory",
        description: "The Dual Vipers Security Advisory",
    }}
/>

{#if Object.entries(advisories).length <= 0}
    <h1 class="text-3xl mb-2">No Advisories Posted :)</h1>
{/if}

{#each Object.entries(advisories) as [year, advisoriesThatYear]}
    <div class="mb-4">
        <h1 class="text-3xl mb-2">{year}:</h1>
        {#each advisoriesThatYear as advisory}
            <p class="text-lg mb-2">
                <a href={advisory.path}>
                    {advisory.meta.id} | {advisory.meta.name}
                </a>
            </p>
        {/each}
    </div>
{/each}
