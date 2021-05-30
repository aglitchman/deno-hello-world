
function error(status, err) {
  return new Response(err, {
    status: status,
    headers: {
      "content-type": "text/plain; charset=UTF-8",
    },
  });
}

async function handleRequest(request) {
  const { pathname, searchParams } = new URL(request.url);

  if (pathname == "/") {
    return new Response(
      `<link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.4/tailwind.min.css" rel="stylesheet">
      <div class="px-3 py-3">
        <h2>Hello, World!</h2>
        <pre>${ JSON.stringify(request.headers, null, ' ') }</pre>
      </div>`,
      {
        headers: {
          "content-type": "text/html; charset=UTF-8",
          "cache-control": "public, max-age=10",
        },
      }
    );
  }

  return new Response(`Hello, World! #2`, {
    headers: {
      "content-type": "text/html; charset=UTF-8",
    },
  });
}

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
