import tvid from "../data/tvid.js";
// import jpn from "../data/jpn.js";
// import kor from "../data/kor.js";

const HOMEPAGE = "https://alantvid.pages.dev/";

const playlists = {
  tvid,
  // jpn,
  // kor
};

export async function onRequest(context) {
  const request = context.request;

  let name = context.params.playlist || "";

  name = Array.isArray(name)
    ? name.join("/")
    : name;

  name = name
    .replace(/^\/+|\/+$/g, "")
    .toLowerCase();

  // Biarkan homepage & static file normal
  if (
    !name ||
    name === "index.html" ||
    name.includes(".")
  ) {
    return await context.next();
  }

  const ua =
    request.headers.get("user-agent") || "";

  const accept =
    request.headers.get("accept") || "";

  const secFetchDest =
    request.headers.get("sec-fetch-dest") || "";

  const secFetchMode =
    request.headers.get("sec-fetch-mode") || "";

  const lowerUA = ua.toLowerCase();

  // Downloader block
  const isDownloader =
    lowerUA.includes("idm") ||
    lowerUA.includes("internet download manager") ||
    lowerUA.includes("adm") ||
    lowerUA.includes("advanced download manager") ||
    lowerUA.includes("wget") ||
    lowerUA.includes("curl") ||
    lowerUA.includes("python") ||
    lowerUA.includes("aria2") ||
    lowerUA.includes("httpie");

  // Browser detection
  const isBrowser =
    secFetchDest === "document" ||
    secFetchMode === "navigate" ||
    accept.includes("text/html");

  // Playlist tidak ada
  if (!playlists[name]) {
    return new Response("Playlist not found", {
      status: 404,
      headers: {
        "Content-Type":
          "text/plain; charset=utf-8",

        "Cache-Control":
          "no-store"
      }
    });
  }

  // Block downloader
  if (isDownloader) {
    return new Response("Forbidden", {
      status: 403,
      headers: {
        "Content-Type":
          "text/plain; charset=utf-8",

        "Cache-Control":
          "no-store"
      }
    });
  }

  // Browser redirect homepage
  if (isBrowser) {
    return Response.redirect(HOMEPAGE, 302);
  }

  // Ambil playlist internal
  const playlist = playlists[name];

  return new Response(playlist, {
    status: 200,
    headers: {
      "Content-Type":
        "application/vnd.apple.mpegurl; charset=utf-8",

      "Access-Control-Allow-Origin":
        "*",

      "Cache-Control":
        "no-cache",

      "X-Content-Type-Options":
        "nosniff"
    }
  });
}
