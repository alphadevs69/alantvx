import playlists from "../data/index.js";

export async function onRequest(context) {
  let path = context.params.playlist || "";

  path = Array.isArray(path)
    ? path.join("/")
    : path;

  path = path
    .replace(/^\/+|\/+$/g, "")
    .toLowerCase();

  // homepage & static file normal
  if (
    !path ||
    path === "index.html" ||
    path.includes(".")
  ) {
    return await context.next();
  }
const request = context.request;

const accept =
  request.headers.get("accept") || "";

const secFetchDest =
  request.headers.get("sec-fetch-dest") || "";

const secFetchMode =
  request.headers.get("sec-fetch-mode") || "";

// Browser asli
const isBrowser =
  secFetchDest === "document" ||
  secFetchMode === "navigate";
const ua =
  request.headers.get("user-agent") || "";

const lowerUA = ua.toLowerCase();

// Downloader umum
const isDownloader =
  lowerUA.includes("idm") ||
  lowerUA.includes("internet download manager") ||
  lowerUA.includes("adm") ||
  lowerUA.includes("advanced download manager") ||
  lowerUA.includes("wget") ||
  lowerUA.includes("curl") ||
  lowerUA.includes("python") ||
  lowerUA.includes("aria2");

// OTT / Android player
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
// Browser buka playlist → redirect homepage
// Browser asli → homepage
if (isBrowser && !isPlayer) {
  return Response.redirect(
    "https://alantvid.pages.dev/",
    302
  );
}
  // Downloader block
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
  // playlist tidak ada
  if (!playlists[path]) {
    return Response.redirect(
      "https://alantvid.pages.dev/",
      302
    );
  }

  // langsung kirim playlist
  return new Response(playlists[path], {
    status: 200,
    headers: {
      "Content-Type":
        "application/vnd.apple.mpegurl; charset=utf-8",

      "Access-Control-Allow-Origin":
        "*",

      "Cache-Control":
        "no-cache"
    }
  });
}
