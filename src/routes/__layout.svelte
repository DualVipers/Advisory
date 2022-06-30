<script>
    import "../app.css";

    import { onMount } from "svelte";

    let text = "";

    onMount(() => {
        const interval = setInterval(() => {
            text = text == "" ? "_" : "";
        }, 750);

        return () => {
            clearInterval(interval);
        };
    });
</script>

<div class="bg-black text-green-500 w-full" style="min-height: 100vh;">
    <div class="w-full flex flex-row items-center justify-between">
        <div class="justify-self-start">
            <h1 class="text-4xl">Dual Vipers Security Advisories</h1>
        </div>
        <div class="justify-self-end">
            <button
                class="rounded-full bg-green-500 text-black p-1"
                onclick="location.href='/VDP.html';"
                type="button">VDP</button
            >
            <button
                class="rounded-full bg-green-500 text-black p-1"
                onclick="location.href='mailto:bugs@dualvs.com';"
                type="button">Submit Vulnerability</button
            >
        </div>
    </div>

    <hr class="border-green-500 border-1 mt-2 mb-4" />

    <slot />

    <!--Blinker-->
    <p class="text-lg" style="line-height: 1rem;">{text}</p>
</div>
