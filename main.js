const GITHUB_PR_HREF = /github.com\/.*\/.*\/(pull\/.*\/(files|commits))|compare/;

function hideWhitespaces() {
  const url = new URL(location);
  if (!url.href.match(GITHUB_PR_HREF)) return;
  if (url.searchParams.get('w')) return;

  url.searchParams.set("w", "1");
  window.history.replaceState(null, null, url.toString());
  location.reload();
}

function onLocationChange(callback) {
  let prevURL = document.location.href;

  new MutationObserver((mutations) => {
    mutations.forEach(() => {
      if (prevURL !== location.href) {
        prevURL = location.href;
        callback();
      }
    });
  }).observe(
    document.querySelector("body"),
    { childList: true, subtree: true },
  );
}

(function main() {
  hideWhitespaces();
  window.addEventListener('load', () => {
    onLocationChange(hideWhitespaces);
  });
})();