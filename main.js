(function main() {
  window.addEventListener('load', () => {
    const url = new URL(location);
    if (url.searchParams.get('w')) return;

    url.searchParams.set("w", "1");
    window.history.replaceState(null, null, url.toString());
    location.reload();
  });
})();