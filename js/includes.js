async function inject(selector, url) {
    const el = document.querySelector(selector);
    if (!el) return;

    const res = await fetch(url, { cache: "no-cache" });
    if (!res.ok) {
        el.innerHTML = `<!-- Failed to load ${url}: ${res.status} -->`;
        return;
    }
    el.innerHTML = await res.text();
}

document.addEventListener("DOMContentLoaded", async () => {
    await inject("#site-header", "includes/header.html");
    await inject("#site-footer", "includes/footer.html");
});