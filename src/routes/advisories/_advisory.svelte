<script>
    export let id = "No ID";
    export let name = "No Name";
    export let cve_id = "No CVE";
    export let cvss_score = "No CVSS Score";
    export let cvss_vector = "No CVSS Score";
    export let versions = "No Versions Affected";
    export let patched = "No Patches";
    export let publish_date = "1970-01-01";
</script>

<p class="text-xl mb-1"><a href="/">&lt;- Return</a></p>

<h1 class="text-4xl mb-4">{id} | {name}:</h1>

<grid>
    <div class="grid grid-cols-2 mb-2 w-fit">
        <p class="text-lg">ID:</p>
        <p class="text-lg">{id}</p>
        <p class="text-lg">Name:</p>
        <p class="text-lg">{name}</p>
        <p class="text-lg">Date Published:</p>
        <p class="text-lg">{publish_date}</p>
        <p class="text-lg">CVE ID:</p>
        <p class="text-lg">{cve_id}</p>
        <p class="text-lg">CVSS Score:</p>
        <p class="text-lg">{cvss_score}</p>
        <p class="text-lg">CVSS Vector:</p>
        <p class="text-lg">{cvss_vector}</p>
        <p class="text-lg">CVE-ID:</p>
        <p class="text-lg">{cve_id}</p>
        <p class="text-lg">Versions Affected:</p>
        <p class="text-lg">{versions}</p>
        <p class="text-lg">Patched Versions:</p>
        <p class="text-lg">{patched}</p>
    </div>
</grid>

<h1 style="font-size: 2rem;" class="text-3xl mb-4">Description:</h1>

<markdown>
    <slot />
</markdown>

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
