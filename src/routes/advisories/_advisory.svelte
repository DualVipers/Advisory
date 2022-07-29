<script>
    import { MetaTags } from "svelte-meta-tags";

    export let id;
    export let name;
    export let short;
    export let cve_id;
    export let cvss_score;
    export let cvss_vector;
    export let versions;
    export let patched;
    export let publish_date;

    id = id || "No ID";

    name = name || "No Name";
    short = short || "No Short Description";
    cve_id = cve_id || "No CVE";
    cvss_score = cvss_score || "No CVSS Score";
    cvss_vector = cvss_vector || "No CVSS Vector";
    versions = versions || "No Versions Affected";
    patched = patched || "No Patches";
    publish_date = publish_date || "1970-01-01";

    let score_text = "";

    let score = parseInt(cvss_score);

    if (score) {
        if (score == 0.0) {
            score_text = "None | ";
        } else if (score <= 3.9) {
            score_text = "Low | ";
        } else if (score <= 6.9) {
            score_text = "Medium | ";
        } else if (score <= 8.9) {
            score_text = "High | ";
        } else {
            score_text = "Critical | ";
        }
    }
</script>

<MetaTags
    title="{id} | {name} | Dual Vipers Advisory"
    description={short}
    openGraph={{
        title: `${id} | ${name} | Dual Vipers Advisory`,
        description: short,
        site_name: "Dual Vipers Advisories",
    }}
    twitter={{
        site: "@dual_vs",
        cardType: "summary",
        title: `${id} | ${name} | Dual Vipers Advisory`,
        description: short,
    }}
/>

{#if cve_id != "No CVE"}
    <h1 hidden id="cve-hidden">CVE: {cve_id}</h1>
    <h1 hidden id="date-publish-hidden">Date Published: {publish_date}</h1>
    <h1 hidden id="description-hidden">Description: {short}</h1>
{/if}

<p class="text-xl mb-1"><a href="/">&lt;- Return</a></p>

<h1 class="text-4xl mb-4">{id} | {name}:</h1>

<grid>
    <div class="grid grid-cols-2 mb-2 w-fit">
        <p class="text-lg">ID:</p>
        <p class="text-lg">{id}</p>
        <p class="text-lg">Name:</p>
        <p class="text-lg">{name}</p>
        <p class="text-lg">Short Description:</p>
        <p class="text-lg">{short}</p>
        <p class="text-lg">Date Published:</p>
        <p class="text-lg">{publish_date}</p>
        <p class="text-lg">CVE ID:</p>
        <p class="text-lg">{cve_id}</p>
        <p class="text-lg">CVSS Score:</p>
        <p class="text-lg">{score_text}{cvss_score}</p>
        <p class="text-lg">CVSS Vector:</p>
        <p class="text-lg">{cvss_vector}</p>
        <p class="text-lg">Affected Versions:</p>
        <p class="text-lg">{versions}</p>
        <p class="text-lg">Patched Versions:</p>
        <p class="text-lg">{patched}</p>
    </div>
</grid>

<h1 style="font-size: 2rem;" class="text-3xl mb-4">Description:</h1>

<markdown>
    <slot />
</markdown>

<!-- Needed to quiet annnoying unused css errors -->
{#if false}
    <markdown>
        <!-- svelte-ignore a11y-missing-content -->
        <h1 />
        <!-- svelte-ignore a11y-missing-content -->
        <h2 />
        <!-- svelte-ignore a11y-missing-content -->
        <h3 />
        <p />
    </markdown>
{/if}

<style>
    markdown {
        font-size: 1.125rem;
        line-height: 1.5rem;
    }

    markdown :global(h1) {
        font-size: 1.875rem;
        line-height: 2.25rem;
    }

    markdown :global(h2) {
        font-size: 1.5rem;
        line-height: 2rem;
    }

    markdown :global(h3) {
        font-size: 1.25rem;
        line-height: 1.75rem;
    }

    markdown :global(p) {
        font-size: 1.125rem;
        line-height: 1.5rem;
    }

    grid :global(p) {
        padding: 4px;
        border: 2px solid rgb(34 197 94 / var(--tw-text-opacity));
    }
</style>
