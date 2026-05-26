export async function onRequest() {
  const playlist = `#EXTM3U

#EXTINF:-1 tvg-name="Test Channel" group-title="TV",Test Channel
https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8
`;

  return new Response(playlist, {
    status: 200,
    headers: {
      "Content-Type": "application/vnd.apple.mpegurl",
      "Cache-Control": "no-store"
    }
  });
}