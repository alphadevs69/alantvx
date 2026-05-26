import playlists from "../data/index.js";

const HOMEPAGE = "https://alantvid.pages.dev/";

const browserAllowedPaths = [
  "",
  "index.html",
  "style.css",
  "script.js",
  "nyawits.png",
  "app.apk",
  "favicon.ico"
];

export async function onRequest(context) {
  const request = context.request;

  let path = context.params.playlist || "";

  path = Array.isArray(path)
    ? path.join("/")
    : path;

  path = path
    .replace(/^\/+|\/+$/g, "")
    .toLowerCase();

  const ua = request.headers.get("user-agent") || "";
  const secFetchDest = request.headers.get("sec-fetch-dest") || "";
  const secFetchMode = request.headers.get("sec-fetch-mode") || "";
  const lowerUA = ua.toLowerCase();

  const isBrowser =
    secFetchDest === "document" ||
    secFetchMode === "navigate";

  const isDownloader =
    lowerUA.includes("idm") ||
    lowerUA.includes("internet download manager") ||
    lowerUA.includes("adm") ||
    lowerUA.includes("advanced download manager") ||
    lowerUA.includes("wget") ||
    lowerUA.includes("curl") ||
    lowerUA.includes("python") ||
    lowerUA.includes("aria2") ||
    lowerUA.includes("postman") ||
    lowerUA.includes("axios");

  const isPlayer =
    lowerUA.includes("ott") ||
    lowerUA.includes("navigator") ||
    lowerUA.includes("iptv") ||
    lowerUA.includes("tivimate") ||
    lowerUA.includes("vlc") ||
    lowerUA.includes("kodi") ||
    lowerUA.includes("exoplayer") ||
    lowerUA.includes("exo") ||
    lowerUA.includes("dalvik") ||
    lowerUA.includes("lavf") ||
    lowerUA.includes("okhttp");

  if (isDownloader) {
    return new Response("Forbidden", {
      status: 403,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store"
      }
    });
  }

  if (browserAllowedPaths.includes(path)) {
    return await context.next();
  }

  if (isBrowser && !isPlayer) {
    return Response.redirect(HOMEPAGE, 302);
  }

  if (!playlists[path]) {
    return Response.redirect(HOMEPAGE, 302);
  }

  return new Response(playlists[path], {
    status: 200,
    headers: {
      "Content-Type": "application/vnd.apple.mpegurl; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "no-cache",
      "X-Content-Type-Options": "nosniff"
    }
  });
}
