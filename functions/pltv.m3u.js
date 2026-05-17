export async function onRequest(context) {

  const request = context.request;
  const url = new URL(request.url);

  const ua = request.headers.get("user-agent") || "";

  const homepage = "https://alantvid.pages.dev/";

  //s
  if (url.pathname.endsWith(".js")) {
    return new Response("Not found", {
      status: 404
    });
  }

  // User-Agent g
  const allowedAgents = [
    "VLC",
    "Kodi",
    "TiviMate",
    "OTT",
    "ExoPlayer",
    "Lavf",
    "IPTV",
    "Dalvik",
    "NSPlayer",
    "MXPlayer"
  ];

  const isAllowed = allowedAgents.some(agent =>
    ua.toLowerCase().includes(agent.toLowerCase())
  );

  // Semua selain player redirect
  if (!isAllowed) {
    return Response.redirect(homepage, 302);
  }

  // Playlist
  const playlist = `#EXTM3U url-tvg="https://raw.githubusercontent.com/apistech/project/refs/heads/main/ApisTECH.xml,https://raw.githubusercontent.com/AqFad2811/epg/refs/heads/main/indonesia.xml,https://raw.githubusercontent.com/AqFad2811/epg/refs/heads/main/epg.xml,https://raw.githubusercontent.com/AqFad2811/epg/refs/heads/main/unifitv.xml" refresh="3600"

#EXTINF:-1 group-title="Nasional " tvg-id="MTATV.id" tvg-logo="https://urfan.id/logo/mtatv.png",MTA TV
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/mtatv

#EXTINF:-1 group-title="Nasional " tvg-id="TVRI.id" tvg-logo="https://urfan.id/logo/tvri.png",TVRI Nasional
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://dens.tv/
https://stream.urfan.id/tvri

#EXTINF:-1 group-title="Nasional " tvg-id="RCTI.id" tvg-logo="https://urfan.id/logo/rcti.png",RCTI
#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=d386001215594043a8995db796ad9e9c:3404792cb4c804902acdc6ca65c1a298
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://visionplus.id/
https://d2xz2v5wuvgur6.cloudfront.net/out/v1/997ce8767b604fae9fce05379b3b8b3a/index.mpd

#EXTINF:-1 group-title="Nasional " tvg-id="MNCTV.id" tvg-logo="https://urfan.id/logo/mnctv.png",MNCTV
#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=c3004565365a42d08e3bde39a516d64e:dbfdc0967cfbbed01dba730c99d9c14a
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://visionplus.id/
https://d2xz2v5wuvgur6.cloudfront.net/out/v1/d6b026ad50f14b7f9af5ddd5450007d4/index.mpd

#EXTINF:-1 group-title="Nasional " tvg-id="GTV.id" tvg-logo="https://urfan.id/logo/gtv.png",GTV
#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=036e85de0bb448eeb21d39ab300da48e:4c6f9b15dfab2a169b2b78a498c4d77d
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://visionplus.id/
https://d2tjypxxy769fn.cloudfront.net/out/v1/b8b9b1d5f80f45649b4a3619291551ab/index.mpd

#EXTINF:-1 group-title="Nasional " tvg-id="iNews.id" tvg-logo="https://urfan.id/logo/inews.png",iNews
#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=8ee7df15ff584967a3eb7b885bafc71e:9a297bf2200eee7dee21b9ace9f57c77
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://visionplus.id/
https://d2tjypxxy769fn.cloudfront.net/out/v1/7b0404cd6a8a4a908123f10774854e46/index.mpd

#EXTINF:-1 group-title="Nasional " tvg-id="SCTV.id" tvg-logo="https://urfan.id/logo/sctv.png",SCTV
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://dens.tv/
https://stream.urfan.id/sctv

#EXTINF:-1 group-title="Nasional " tvg-id="Indosiar.id" tvg-logo="https://urfan.id/logo/indosiar.png",Indosiar
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://dens.tv/
https://stream.urfan.id/indosiar

#EXTINF:-1 group-title="Nasional " tvg-id="MOJI.id" tvg-logo="https://urfan.id/logo/moji.png",Moji
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://dens.tv/
https://stream.urfan.id/moji

#EXTINF:-1 group-title="Nasional " tvg-id="ANTV.id" tvg-logo="https://urfan.id/logo/antv.png",ANTV
#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=251c384e846841abafa1f7c723d57e66:e45b06a38cd261b74c5160f0912c042f
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://visionplus.id/
https://d84q7nw4qf3j3.cloudfront.net/out/v1/0a6c6b1534444ab4bd903af8761e6747/index.mpd

#EXTINF:-1 group-title="Nasional " tvg-id="TV One.id" tvg-logo="https://urfan.id/logo/tvone.png",tvOne
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://dens.tv/
https://stream.urfan.id/tvone

#EXTINF:-1 group-title="Nasional " tvg-id="TransTV.id" tvg-logo="https://urfan.id/logo/transtv.png",Trans TV
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://20.detik.com/
https://stream.urfan.id/transtv

#EXTINF:-1 group-title="Nasional " tvg-id="Trans7.id" tvg-logo="https://urfan.id/logo/trans7.png",Trans 7
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://20.detik.com/
https://stream.urfan.id/trans7

#EXTINF:-1 group-title="Nasional " tvg-id="CNN Indonesia.id" tvg-logo="https://urfan.id/logo/cnnid.png",CNN Indonesia
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://20.detik.com/
https://stream.urfan.id/cnnid

#EXTINF:-1 group-title="Nasional " tvg-id="CNBC Indonesia.id" tvg-logo="https://urfan.id/logo/cnbcid.png",CNBC Indonesia
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://20.detik.com/
https://stream.urfan.id/cnbcid

#EXTINF:-1 group-title="Nasional " tvg-id="Metro TV.id" tvg-logo="https://urfan.id/logo/metrotv.png",Metro TV
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://dens.tv/
https://stream.urfan.id/metrotv

#EXTINF:-1 group-title="Nasional " tvg-id="magnachannel.id" tvg-logo="https://urfan.id/logo/magna.png",Magna Channel
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://dens.tv/
https://stream.urfan.id/magna

#EXTINF:-1 group-title="Nasional " tvg-id="Kompas TV.id" tvg-logo="https://urfan.id/logo/kompastv.png",Kompas TV
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://dens.tv/
https://stream.urfan.id/kompastv

#EXTINF:-1 group-title="Nasional " tvg-id="NET TV.id" tvg-logo="https://urfan.id/logo/mdtv.png",MDTV
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://dens.tv/
https://stream.urfan.id/mdtv

#EXTINF:-1 group-title="Nasional " tvg-id="Rajawali TV.id" tvg-logo="https://urfan.id/logo/rtv.png",RTV
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://dens.tv/
https://stream.urfan.id/rtv

#EXTINF:-1 group-title="Nasional " tvg-id="Nusantara TV.id" tvg-logo="https://urfan.id/logo/nusantaratv.png",Nusantara TV
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://dens.tv/
https://stream.urfan.id/ntv

#EXTINF:-1 group-title="Nasional " tvg-id="GARUDATV.id" tvg-logo="https://urfan.id/logo/garudatv.png",Garuda TV
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/garudatv

#EXTINF:-1 group-title="Nasional " tvg-id="BTV.id" tvg-logo="https://urfan.id/logo/btv.png",BTV
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://dens.tv/
https://stream.urfan.id/btv

#EXTINF:-1 group-title="Nasional " tvg-id="bsatu.id" tvg-logo="https://urfan.id/logo/bsatu.png",Berita Satu
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://dens.tv/
https://stream.urfan.id/beritasatu

#EXTINF:-1 group-title="Nasional " tvg-id="Daai TV.id" tvg-logo="https://urfan.id/logo/daaitv.png",DAAI TV
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/daaitvsd

#EXTINF:-1 group-title="Nasional " tvg-id="Daai TV.id" tvg-logo="https://urfan.id/logo/daaitv.png",DAAI TV HD
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/daaitvhd

#EXTINF:-1 group-title="Nasional " tvg-id="Indonesiana TV.id"" tvg-logo="https://urfan.id/logo/indonesiana.png",Indonesiana TV
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/indonesiana

#EXTINF:-1 group-title="Nasional " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png"
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/tv


###################################
######## DAERAH  ########
###################################

#EXTINF:-1 group-title="Daerah " tvg-id="SriwijayaTV" tvg-logo="https://urfan.id/logo/dotid.png",Sriwijaya TV
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://sriwijayatv.siar.us/live/sriwijayatv.m3u8

#EXTINF:-1 group-title="Daerah " tvg-id="DavikaTV" tvg-logo="https://urfan.id/logo/dotid.png",Davika TV
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://5bf7b725107e5.streamlock.net/davika/davika/playlist.m3u8

#EXTINF:-1 group-title="Daerah " tvg-id="SAMPITTV" tvg-logo="https://urfan.id/logo/sampittv.png",Sampit TV
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/sampittv

#EXTINF:-1 group-title="Daerah " tvg-id="RBTV" tvg-logo="https://urfan.id/logo/rbtv.png",RBTV Jogja
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
http://live.rbtvjogja.tv/481e185e-72e3-49f6-ad37-e495f911c9e4_output_0.m3u8

#EXTINF:-1 group-title="Daerah " tvg-id="DMTV" tvg-logo="https://urfan.id/logo/dmtv.png",DMTV Malang
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/dmtv

#EXTINF:-1 group-title="Daerah " tvg-id="JakTV.id" tvg-logo="https://urfan.id/logo/jaktv.png",JakTV
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://dens.tv/
https://stream.urfan.id/jaktv

#EXTINF:-1 group-title="Daerah " tvg-id="TVRI.id" tvg-logo="https://urfan.id/logo/tvridaerah.png",TVRI Yogyakarta
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://ott-balancer.tvri.go.id/live/eds/Jogjakarta/hls/Jogjakarta.m3u8

#EXTINF:-1 group-title="Daerah " tvg-id="TVRI.id" tvg-logo="https://urfan.id/logo/tvridaerah.png",TVRI Jawa Tengah
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://ott-balancer.tvri.go.id/live/eds/Jateng/hls/Jateng.m3u8

#EXTINF:-1 group-title="Daerah " tvg-id="TVRI.id" tvg-logo="https://urfan.id/logo/tvridaerah.png",TVRI Bali
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://ott-balancer.tvri.go.id/live/eds/Bali/hls/Bali.m3u8

#EXTINF:-1 group-title="Daerah " tvg-id="TVRI.id" tvg-logo="https://urfan.id/logo/tvridaerah.png",TVRI Jakarta
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://ott-balancer.tvri.go.id/live/eds/DKI/hls/DKI.m3u8

#EXTINF:-1 group-title="Daerah " tvg-id="TVRI.id" tvg-logo="https://urfan.id/logo/tvridaerah.png",TVRI Jawa Barat
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://ott-balancer.tvri.go.id/live/eds/Jabar/hls/Jabar.m3u8

#EXTINF:-1 group-title="Daerah " tvg-id="TVRI.id" tvg-logo="https://urfan.id/logo/tvridaerah.png",TVRI Jawa Timur
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://ott-balancer.tvri.go.id/live/eds/Jatim/hls/Jatim.m3u8

#EXTINF:-1 group-title="Daerah " tvg-id="TVRI.id" tvg-logo="https://urfan.id/logo/tvridaerah.png",TVRI Aceh
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://ott-balancer.tvri.go.id/live/eds/Aceh/hls/Aceh.m3u8

#EXTINF:-1 group-title="Daerah " tvg-id="TVRI.id" tvg-logo="https://urfan.id/logo/tvridaerah.png",TVRI Bengkulu
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://ott-balancer.tvri.go.id/live/eds/Bengkulu/hls/Bengkulu.m3u8

#EXTINF:-1 group-title="Daerah " tvg-id="TVRI.id" tvg-logo="https://urfan.id/logo/tvridaerah.png",TVRI Gorontalo
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://ott-balancer.tvri.go.id/live/eds/Gorontalo/hls/Gorontalo.m3u8

#EXTINF:-1 group-title="Daerah " tvg-id="TVRI.id" tvg-logo="https://urfan.id/logo/tvridaerah.png",TVRI Jambi
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://ott-balancer.tvri.go.id/live/eds/Jambi/hls/Jambi.m3u8

#EXTINF:-1 group-title="Daerah " tvg-id="TVRI.id" tvg-logo="https://urfan.id/logo/tvridaerah.png",TVRI Kalimantan Barat
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://ott-balancer.tvri.go.id/live/eds/Kalbar/hls/Kalbar.m3u8

#EXTINF:-1 group-title="Daerah " tvg-id="TVRI.id" tvg-logo="https://urfan.id/logo/tvridaerah.png",TVRI Kalimantan Selatan
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://ott-balancer.tvri.go.id/live/eds/Kalsel/hls/Kalsel.m3u8

#EXTINF:-1 group-title="Daerah " tvg-id="TVRI.id" tvg-logo="https://urfan.id/logo/tvridaerah.png",TVRI Kalimantan Timur
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://ott-balancer.tvri.go.id/live/eds/Kaltim/hls/Kaltim.m3u8

#EXTINF:-1 group-title="Daerah " tvg-id="TVRI.id" tvg-logo="https://urfan.id/logo/tvridaerah.png",TVRI Kalimantan Tengah
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://ott-balancer.tvri.go.id/live/eds/Kalteng/hls/Kalteng.m3u8

#EXTINF:-1 group-title="Daerah " tvg-id="TVRI.id" tvg-logo="https://urfan.id/logo/tvridaerah.png",TVRI Lampung
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://ott-balancer.tvri.go.id/live/eds/Lampung/hls/Lampung.m3u8

#EXTINF:-1 group-title="Daerah " tvg-id="TVRI.id" tvg-logo="https://urfan.id/logo/tvridaerah.png",TVRI Ambon
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://ott-balancer.tvri.go.id/live/eds/Ambon/hls/Ambon.m3u8

#EXTINF:-1 group-title="Daerah " tvg-id="TVRI.id" tvg-logo="https://urfan.id/logo/tvridaerah.png",TVRI Nusa Tenggara Barat
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://ott-balancer.tvri.go.id/live/eds/NTB/hls/NTB.m3u8

#EXTINF:-1 group-title="Daerah " tvg-id="TVRI.id" tvg-logo="https://urfan.id/logo/tvridaerah.png",TVRI Nusa Tenggara Timur
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://ott-balancer.tvri.go.id/live/eds/NTT/hls/NTT.m3u8

#EXTINF:-1 group-title="Daerah " tvg-id="TVRI.id" tvg-logo="https://urfan.id/logo/tvridaerah.png",TVRI Papua
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://ott-balancer.tvri.go.id/live/eds/Papua/hls/Papua.m3u8

#EXTINF:-1 group-title="Daerah " tvg-id="TVRI.id" tvg-logo="https://urfan.id/logo/tvridaerah.png",TVRI Papua Barat
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://ott-balancer.tvri.go.id/live/eds/Pabar/hls/Pabar.m3u8

#EXTINF:-1 group-title="Daerah " tvg-id="TVRI.id" tvg-logo="https://urfan.id/logo/tvridaerah.png",TVRI Riau
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://ott-balancer.tvri.go.id/live/eds/Riau/hlstl/Riau.m3u8

#EXTINF:-1 group-title="Daerah " tvg-id="TVRI.id" tvg-logo="https://urfan.id/logo/tvridaerah.png",TVRI Sulawesi Barat
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://ott-balancer.tvri.go.id/live/eds/Sulbar/hls/Sulbar.m3u8

#EXTINF:-1 group-title="Daerah " tvg-id="TVRI.id" tvg-logo="https://urfan.id/logo/tvridaerah.png",TVRI Sulawesi Selatan
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://ott-balancer.tvri.go.id/live/eds/Sulsel/hls/Sulsel.m3u8

#EXTINF:-1 group-title="Daerah " tvg-id="TVRI.id" tvg-logo="https://urfan.id/logo/tvridaerah.png",TVRI Sulawesi Tengah
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://ott-balancer.tvri.go.id/live/eds/Sulteng/hls/Sulteng.m3u8

#EXTINF:-1 group-title="Daerah " tvg-id="TVRI.id" tvg-logo="https://urfan.id/logo/tvridaerah.png",TVRI Sulawesi Tenggara
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://ott-balancer.tvri.go.id/live/eds/Sultra/hls/Sultra.m3u8

#EXTINF:-1 group-title="Daerah " tvg-id="TVRI.id" tvg-logo="https://urfan.id/logo/tvridaerah.png",TVRI Sulawesi Utara
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://ott-balancer.tvri.go.id/live/eds/Sulut/hls/Sulut.m3u8

#EXTINF:-1 group-title="Daerah " tvg-id="TVRI.id" tvg-logo="https://urfan.id/logo/tvridaerah.png",TVRI Sumatera Barat
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://ott-balancer.tvri.go.id/live/eds/Sumbar/hls/Sumbar.m3u8

#EXTINF:-1 group-title="Daerah " tvg-id="TVRI.id" tvg-logo="https://urfan.id/logo/tvridaerah.png",TVRI Sumatera Selatan
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://ott-balancer.tvri.go.id/live/eds/Sumsel/hls/Sumsel.m3u8

#EXTINF:-1 group-title="Daerah " tvg-id="TVRI.id" tvg-logo="https://urfan.id/logo/tvridaerah.png",TVRI Sumatera Utara
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://ott-balancer.tvri.go.id/live/eds/Sumut/hls/Sumut.m3u8

#EXTINF:-1 group-title="Daerah " tvg-id="TVRI.id" tvg-logo="https://urfan.id/logo/tvridaerah.png",TVRI Bangka Belitung
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://ott-balancer.tvri.go.id/live/eds/Babel/hls/Babel.m3u8

#EXTINF:-1 group-title="Daerah " tvg-logo="https://urfan.id/logo/pktv.png",PK TV
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://ams.juraganstreaming.com:5443/LiveApp/streams/pktv.m3u8

#EXTINF:-1 group-title="Daerah " tvg-logo="https://urfan.id/logo/banjartv.png",Banjar TV
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://banjartv.siar.us/banjartv/live/playlist.m3u8

#EXTINF:-1 group-title="Daerah " tvg-logo="https://urfan.id/logo/elshinta.png",Elshinta TV
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://dens.tv/
https://stream.urfan.id/elshinta

#EXTINF:-1 group-title="Daerah " tvg-logo="https://urfan.id/logo/tvdesa.png",TV Desa
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://5bf7b725107e5.streamlock.net/mytvdesa/mytvdesa/playlist.m3u8

#EXTINF:-1 group-title="Daerah " tvg-logo="https://urfan.id/logo/ficom.png",FICOM CHANNEL
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://v3.siar.us/ficomchannel/live/playlist.m3u8

#EXTINF:-1 group-title="Daerah " tvg-id="madutv.id" tvg-logo="https://urfan.id/logo/madutv.png",Madu TV
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://re1.siar.us/madutv/hd720/playlist.m3u8

#EXTINF:-1 group-title="Daerah " tvg-id="InspiraTV.id" tvg-logo="https://urfan.id/logo/inspiratv.png",Inspira TV Bandung
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/inspiratv

#EXTINF:-1 group-title="Daerah " tvg-id="SangajiTV.id" tvg-logo="https://urfan.id/logo/sangajitv.png",Sangaji TV Jogja
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/sangajitv

#EXTINF:-1 group-title="Daerah " tvg-id="TATV.id" tvg-logo="https://urfan.id/logo/tatv.png",TATV Solo
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/tatv

#EXTINF:-1 group-title="Daerah " tvg-id="tvku.id" tvg-logo="https://urfan.id/logo/tvku.png",TVKU Semarang
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/tvku

#EXTINF:-1 group-title="Daerah " tvg-logo="https://urfan.id/logo/tvtabalong.png",TV Tabalong
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/tvtabalong

#EXTINF:-1 group-title="Daerah " tvg-id="UGTV.id" tvg-logo="https://urfan.id/logo/ugtv.png",UGTV
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://cdn.gunadarma.ac.id/streams/ugtv/ingestugtv.m3u8

#EXTINF:-1 group-title="Daerah " tvg-id="JTV.id" tvg-logo="https://urfan.id/logo/jtv.png",JTV Surabaya
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://63b2dc7196c38.streamlock.net/JTVSURABAYA/_definst_/myStream/index.m3u8

#EXTINF:-1 group-title="Daerah " tvg-logo="https://urfan.id/logo/kstv.png",Kilisuci TV
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://5bf7b725107e5.streamlock.net:443/kstv/kstv/playlist.m3u8

#EXTINF:-1 group-title="Daerah " tvg-id="saktitv.id" tvg-logo="https://urfan.id/logo/saktitv.png",Sakti TV Madiun
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://saktitv.siar.us/saktitv/live/playlist.m3u8

#EXTINF:-1 group-title="Daerah " tvg-logo="https://urfan.id/logo/lingkartv.png",Lingkar TV Pati
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/lingkartv

#EXTINF:-1 group-title="Daerah " tvg-logo="https://urfan.id/logo/bantentv.png",Banten TV
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://5bf7b725107e5.streamlock.net:443/bantentv/bantentv/playlist.m3u8

#EXTINF:-1 group-title="Daerah " tvg-logo="https://urfan.id/logo/jogjatv.png",Jogja TV
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.jogjatv.co.id/jtvlive/stream/index.m3u8

#EXTINF:-1 group-title="Daerah " tvg-id="dutatv.id" tvg-logo="https://urfan.id/logo/dutatv.png",Duta TV
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://dutatv.siar.us/dutatv/live/playlist.m3u8

#EXTINF:-1 group-title="Daerah " tvg-logo="https://urfan.id/logo/bmstv.png",BMSTV Banyumas
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://5bf7b725107e5.streamlock.net/bmstv/bmstv/playlist.m3u8

#EXTINF:-1 group-title="Daerah " tvg-id="brtv.id" tvg-logo="https://urfan.id/logo/brtv.png",BRTV
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://5bf7b725107e5.streamlock.net/brtv/brtv/playlist.m3u8

#EXTINF:-1 group-title="Daerah " tvg-id="rctv.id" tvg-logo="https://urfan.id/logo/rctv.png",RCTV Cirebon
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://v10.siar.us/rctv/live/playlist.m3u8

#EXTINF:-1 group-title="Daerah " tvg-id="Bandung TV.id" tvg-logo="https://urfan.id/logo/bandungtv.png",Bandung TV
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
http://202.150.153.254:443/bandungtvWEBSITE.m3u8

#EXTINF:-1 group-title="Daerah " tvg-logo="https://urfan.id/logo/bungotv.png",Bungo TV
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://5bf7b725107e5.streamlock.net/bungotv/bungotv/playlist.m3u8

#EXTINF:-1 group-title="Daerah " tvg-logo="https://urfan.id/logo/jitv.png",JITV Jogja
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/jitv

#EXTINF:-1 group-title="Daerah " tvg-logo="https://urfan.id/logo/nasional.png",Nasional TV
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://tv.nasionaltv.com/ntvsgp/live/tracks-v1a1/mono.m3u8

#EXTINF:-1 group-title="Daerah " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png"
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/tv


###################################
######## DAKWAH  ########
###################################

#EXTINF:-1 group-title="Dakwah " tvg-id="MTATV.id" tvg-logo="https://urfan.id/logo/mtatv.png",MTA TV
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/mtatv

#EXTINF:-1 group-title="Dakwah " tvg-id="madinahtv.id" tvg-logo="https://urfan.id/logo/madinahtv.png",Madinah TV
#EXTVLCOPT:http-user-agent=YouTV (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://youtv.id/
https://stream.urfan.id/madinah

#EXTINF:-1 group-title="Dakwah " tvg-id="AlQuran Kareem.id" tvg-logo="https://urfan.id/logo/mekahtv.png",Mekah TV
#EXTVLCOPT:http-user-agent=YouTV (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://youtv.id/
https://stream.urfan.id/mekah

#EXTINF:-1 group-title="Dakwah " tvg-id="Muhammadiyah TV.id" tvg-logo="https://urfan.id/logo/tvmu.png",tvMu
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/tvmu

#EXTINF:-1 group-title="Dakwah " tvg-id="MQTV.id" tvg-logo="https://urfan.id/logo/mqtv.png",MQTV
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/mqtv

#EXTINF:-1 group-title="Dakwah " tvg-id="TV9 NU.id" tvg-logo="https://urfan.id/logo/tv9.png",tv9 Nusantara
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/tv9

#EXTINF:-1 group-title="Dakwah " tvg-id="alwafatarim.id" tvg-logo="https://urfan.id/logo/alwafa.png",Al Wafa Tarim TV
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/alwafa

#EXTINF:-1 group-title="Dakwah " tvg-id="surautv.id" tvg-logo="https://urfan.id/logo/surautv.png",Surau TV
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/surautv

#EXTINF:-1 group-title="Dakwah " tvg-id="wesaltv.id" tvg-logo="https://urfan.id/logo/wesaltv.png",Wesal TV
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/wesaltv

#EXTINF:-1 group-title="Dakwah " tvg-id="Rodja TV.id" tvg-logo="https://urfan.id/logo/rodjatv.png",Rodja TV
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://dens.tv/
https://stream.urfan.id/rodjatv

#EXTINF:-1 group-title="Dakwah " tvg-id="Tawaf TV.id" tvg-logo="https://urfan.id/logo/tawaftv.png",Tawaf TV
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/tawaftv

#EXTINF:-1 group-title="Dakwah " tvg-id="alimantv.id" tvg-logo="https://urfan.id/logo/alimantv.png",Al-Iman TV
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/alimantv

#EXTINF:-1 group-title="Dakwah " tvg-id="artvisi.id" tvg-logo="https://urfan.id/logo/artvisi.png",ARTVISI
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/artvisi

#EXTINF:-1 group-title="Dakwah " tvg-id="MUI TV.id"  tvg-logo="https://urfan.id/logo/muitv.png",MUI TV
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/muitv

#EXTINF:-1 group-title="Dakwah " tvg-id="madanitv.id" tvg-logo="https://urfan.id/logo/madanitv.png",Madani TV
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/madanitv

#EXTINF:-1 group-title="Dakwah " tvg-id="tv10.id" tvg-logo="https://urfan.id/logo/tv10.png",TV10
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/tv10

#EXTINF:-1 group-title="Dakwah " tvg-id="insantv.id" tvg-logo="https://urfan.id/logo/insantv.png",Insan TV
#EXTVLCOPT:http-user-agent=YouTV (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://youtv.id/
https://stream.urfan.id/insantv

#EXTINF:-1 group-title="Dakwah " tvg-id="ashiiltv.id" tvg-logo="https://urfan.id/logo/ashiiltv.png",Ashiil TV
#EXTVLCOPT:http-user-agent=YouTV (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://youtv.id/
https://flv.intechmedia.net/live/ch2.m3u8

#EXTINF:-1 group-title="Dakwah " tvg-id="ahsantv.id" tvg-logo="https://urfan.id/logo/ahsantv.png",Ahsan TV
#EXTVLCOPT:http-user-agent=YouTV (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://youtv.id/
https://stream.urfan.id/ahsantv

#EXTINF:-1 group-title="Dakwah " tvg-id="muadztv.id" tvg-logo="https://urfan.id/logo/muadztv.png",Muadz TV
#EXTVLCOPT:http-user-agent=YouTV (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://youtv.id/
https://stream.urfan.id/muadztv

#EXTINF:-1 group-title="Dakwah " tvg-id="izzahtv.id" tvg-logo="https://urfan.id/logo/izzahtv.png",Izzah TV
#EXTVLCOPT:http-user-agent=YouTV (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://youtv.id/
https://flv.intechmedia.net/live/ch28.m3u8

#EXTINF:-1 group-title="Dakwah " tvg-id="hijrahtv.id" tvg-logo="https://urfan.id/logo/hijrahtv.png",Hijrah TV
#EXTVLCOPT:http-user-agent=YouTV (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://youtv.id/
https://stream.urfan.id/hijrahtv

#EXTINF:-1 group-title="Dakwah " tvg-id="niagatv.id" tvg-logo="https://urfan.id/logo/niagatv.png",Niaga TV
#EXTVLCOPT:http-user-agent=YouTV (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://youtv.id/
https://flv.intechmedia.net/live/ch10.m3u8

#EXTINF:-1 group-title="Dakwah " tvg-id="binbaztv.id" tvg-logo="https://urfan.id/logo/binbaztv.png",Binbaz TV
#EXTVLCOPT:http-user-agent=YouTV (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://youtv.id/
https://flv.intechmedia.net/live/ch22.m3u8

#EXTINF:-1 group-title="Dakwah " tvg-id="salamtv.id" tvg-logo="https://urfan.id/logo/salamtv.png",Salam TV
#EXTVLCOPT:http-user-agent=YouTV (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://youtv.id/
https://flv.intechmedia.net/live/ch12.m3u8

#EXTINF:-1 group-title="Dakwah " tvg-id="naajiyatv.id" tvg-logo="https://urfan.id/logo/naajiyatv.png",Naajiya TV
#EXTVLCOPT:http-user-agent=YouTV (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://youtv.id/
https://stream.urfan.id/naajiyatv

#EXTINF:-1 group-title="Dakwah " tvg-id="medstv.id" tvg-logo="https://urfan.id/logo/medstv.png",Meds TV
#EXTVLCOPT:http-user-agent=YouTV (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://youtv.id/
https://flv.intechmedia.net/live/ch23.m3u8

#EXTINF:-1 group-title="Dakwah " tvg-id="alfurqontv.id" tvg-logo="https://urfan.id/logo/alfurqontv.png",Al-Furqon TV
#EXTVLCOPT:http-user-agent=YouTV (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://youtv.id/
https://flv.intechmedia.net/live/ch24.m3u8

#EXTINF:-1 group-title="Dakwah " tvg-id="mgitv.id" tvg-logo="https://urfan.id/logo/mgitv.png",MGI TV
#EXTVLCOPT:http-user-agent=YouTV (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://youtv.id/
https://flv.intechmedia.net/live/ch25.m3u8

#EXTINF:-1 group-title="Dakwah " tvg-id="puldapiitv.id" tvg-logo="https://urfan.id/logo/puldapiitv.png",Puldapii TV
#EXTVLCOPT:http-user-agent=YouTV (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://youtv.id/
https://flv.intechmedia.net/live/ch15.m3u8

#EXTINF:-1 group-title="Dakwah " tvg-id="palikotv.id" tvg-logo="https://urfan.id/logo/dotid.png",Paliko TV
#EXTVLCOPT:http-user-agent=YouTV (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://youtv.id/
https://flv.intechmedia.net/live/ch31.m3u8

#EXTINF:-1 group-title="Dakwah " tvg-id="rinjanitv.id" tvg-logo="https://urfan.id/logo/dotid.png",Rinjani TV
#EXTVLCOPT:http-user-agent=YouTV (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://youtv.id/
https://stream.urfan.id/rinjanitv

#EXTINF:-1 group-title="Dakwah " tvg-id="mqhtv.id" tvg-logo="https://urfan.id/logo/dotid.png",MQH TV
#EXTVLCOPT:http-user-agent=YouTV (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://youtv.id/
https://flv.intechmedia.net/live/ch34.m3u8

#EXTINF:-1 group-title="Dakwah " tvg-id="waladtv.id" tvg-logo="https://urfan.id/logo/dotid.png",Walad TV
#EXTVLCOPT:http-user-agent=YouTV (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://youtv.id/
https://stream.urfan.id/waladtv

#EXTINF:-1 group-title="Dakwah " tvg-id="deikids.id" tvg-logo="https://urfan.id/logo/deikids.png",DeiKids TV
#EXTVLCOPT:http-user-agent=YouTV (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://youtv.id/
https://stream.urfan.id/deikids

#EXTINF:-1 group-title="Dakwah " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png"
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/tv
  

###################################
####### OLAHRAGA  #######
###################################

#EXTINF:-1 group-title="Olahraga " tvg-id="Sportstars.id" tvg-logo="https://urfan.id/logo/sportstars.png",Sportstars
#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=39c4dc6704cf4ceea2fd4863b88d8a7d:4e9d7954c2ff46759289da4fc9f018ea
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://visionplus.id/
https://d2tjypxxy769fn.cloudfront.net/out/v1/89a6e4261cd7470f83e5869e90440cff/index.mpd

#EXTINF:-1 group-title="Olahraga " tvg-id="Sportstars 2.id" tvg-logo="https://urfan.id/logo/sportstars2.png",Sportstars 2
#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=911e72adf36946afbdbb4f80782a8394:08aec548a851ba64b7172ae7f05cb91c
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://visionplus.id/
https://d3b0v7fggu5zwm.cloudfront.net/out/v1/d2c68a3dfb644808b416bd90dcc92d5f/index.mpd

#EXTINF:-1 group-title="Olahraga " tvg-id="TVRI.id" tvg-logo="https://urfan.id/logo/tvrisport.png",TVRI Sport
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://dens.tv/
https://stream.urfan.id/tvrisport

#EXTINF:-1 group-title="Olahraga " tvg-id="Sukan RTM" tvg-logo="https://urfan.id/logo/sukanrtm.png",Sukan RTM
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://rtmklik.rtm.gov.my/
https://d25tgymtnqzu8s.cloudfront.net/smil:sukan/manifest.mpd?id=4

#EXTINF:-1 group-title="Olahraga " tvg-id="dotid" tvg-logo="https://urfan.id/logo/dotid.png",T Sports 7
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://lb1-live-mv.v2h-cdn.com/hls/ffef/tsport/tsport.m3u8

#EXTINF:-1 group-title="Olahraga " tvg-id="motorvisiontv.de" tvg-logo="https://urfan.id/logo/motorvision.png",Motorvision TV
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.ads.ottera.tv/playlist.m3u8?network_id=535

#EXTINF:-1 group-title="Olahraga " tvg-id="dubaisports2.ae" tvg-logo="https://urfan.id/logo/dubaisports.png",Dubai Sports 2
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://dmitwlvvll.cdn.mangomolo.com/dubaisportshd/smil:dubaisportshd.smil/chunklist.m3u8

#EXTINF:-1 group-title="Olahraga " tvg-id="dubaisports3.ae" tvg-logo="https://urfan.id/logo/dubaisports.png",Dubai Sports 3
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://dmitwlvvll.cdn.mangomolo.com/dubaisportshd5/smil:dubaisportshd5.smil/chunklist.m3u8

#EXTINF:-1 group-title="Olahraga " tvg-logo="https://urfan.id/logo/impact.png",IMPACT! Wrestling
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://d2p372oxiwmcn1.cloudfront.net/hls/main.m3u8

#EXTINF:-1 group-title="Olahraga " tvg-logo="https://urfan.id/logo/redbull.png",Red Bull TV
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8

#EXTINF:-1 group-title="Olahraga " tvg-id=mutv.uk" tvg-logo="https://urfan.id/logo/mu.png",MUTV
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://bcovlive-a.akamaihd.net/r2d2c4ca5bf57456fb1d16255c1a535c8/eu-west-1/6058004203001/playlist.m3u8

#EXTINF:-1 group-title="Olahraga " tvg-id="realmadridtv.es" tvg-logo="https://urfan.id/logo/rm.png",Real Madrid TV
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://rmtv.akamaized.net/hls/live/2043153/rmtv-es-web/master.m3u8?hdnea=exp=1653452799~acl=/*~hmac=6fa983776826e1224ab4c19996ce92f00a1ad234617b07fd8a398160d72c19e0

#EXTINF:-1 group-title="Olahraga " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png"
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/tv


#################################
######## ANAK  ########
#################################

#EXTINF:-1 group-title="Anak " tvg-id="Kids TV.id" tvg-logo="https://urfan.id/logo/kidstv.png",Kids TV
#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=ec31647c5c3b490bbb5c840ca3e96c9e:a28271a4ba4d085efa1f7738e0f82ea1
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://visionplus.id/
https://d3b0v7fggu5zwm.cloudfront.net/out/v1/9041826689ae4f9c9619576d411fa989/index.mpd

#EXTINF:-1 group-title="Anak " tvg-id="Moonbug.id" tvg-logo="https://urfan.id/logo/moonbug.png",Moonbug Kids
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://moonbug-rokuus.amagi.tv/playlist.m3u8

#EXTINF:-1 group-title="Anak " tvg-id="cbeebies.id" tvg-logo="https://urfan.id/logo/cbeebies.png",Cbeebies
#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=736777e5823249849d71a7d41ddc35aa:f831235372e07e24fb70f7336291c549
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://visionplus.id/
https://d2xz2v5wuvgur6.cloudfront.net/out/v1/2a5668fb3b9f4e34ab7c02cdc6ef56db/index.mpd

#EXTINF:-1 group-title="Anak " tvg-id="nickjr.id" tvg-logo="https://urfan.id/logo/nickjr.png",Nick Jr
#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=c1d5f77cd96049f78b6b253540b31722:ba8d0801fe81187d35633e1d3b3855d5
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://visionplus.id/
https://d84q7nw4qf3j3.cloudfront.net/out/v1/27163af9499b4bcca2da96677b158efe/index.mpd

#EXTINF:-1 group-title="Anak " tvg-id="zoomoo.id" tvg-logo="https://urfan.id/logo/zoomoo.png",Zoo Moo
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://zoomoo-samsungau.amagi.tv/playlist.m3u8

#EXTINF:-1 group-title="Anak " tvg-id="nick.id" tvg-logo="https://urfan.id/logo/nick.png",Nick
#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=676b60c2b84b49b6b316207a590203e4:da9878a96062ea105895f310e052fa7b
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://visionplus.id/
https://d2tjypxxy769fn.cloudfront.net/out/v1/3fe6d9eb97ed455c942eb8d3d1c2c2e8/index.mpd

#EXTINF:-1 group-title="Anak " tvg-id="ebskids.kr" tvg-logo="https://urfan.id/logo/ebskids.png",EBS Kids
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://ebsonair.ebs.co.kr/ebsufamilypc/familypc1m/playlist.m3u8

#EXTINF:-1 group-title="Anak " tvg-id="My Kidz.id" tvg-logo="https://urfan.id/logo/mykidz.png",My Kidz
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://dens.tv/
https://stream.urfan.id/mykidz

#EXTINF:-1 group-title="Anak " tvg-id="pbskids.us" tvg-logo="https://urfan.id/logo/pbskids.png",PBS Kids
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://2-fss-2.streamhoster.com/pl_140/amlst:200914-1298290/playlist.m3u8

#EXTINF:-1 group-title="Anak " tvg-id="spacetoonarabic.ae" tvg-logo="https://urfan.id/logo/spacetoon.png",Spacetoon
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://shls-spacetoon-prod-dub.shahid.net/out/v1/6240b773a3f34cca95d119f9e76aec02/index.m3u8

#EXTINF:-1 group-title="Anak " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png"
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/tv


#################################
####### BERITA  #######
#################################

#EXTINF:-1 group-title="Berita " tvg-id="TVRI.id" tvg-logo="https://urfan.id/logo/tvriworld.png",TVRI World
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://ott-balancer.tvri.go.id/live/eds/TVRIWorld/hls/TVRIWorld.m3u8

#EXTINF:-1 group-title="Berita " tvg-id="France 24.id" tvg-logo="https://urfan.id/logo/france24.png",France 24
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://dens.tv/
https://stream.urfan.id/france24

#EXTINF:-1 group-title="Berita " tvg-id="NHK.id" tvg-logo="https://urfan.id/logo/nhkworld.png",NHK World Japan
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://dens.tv/
https://stream.urfan.id/nhkworld

#EXTINF:-1 group-title="Berita " tvg-id="TV5Monde.id" tvg-logo="https://urfan.id/logo/tv5monde.png",TV5 Monde
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://dens.tv/
https://stream.urfan.id/tv5monde

#EXTINF:-1 group-title="Berita " tvg-id="TRT World.id" tvg-logo="https://urfan.id/logo/trtworld.png",TRT World
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://dens.tv/
https://stream.urfan.id/trtworld

#EXTINF:-1 group-title="Berita " tvg-id="Channel News Asia.id" tvg-logo="https://urfan.id/logo/cna.png",CNA
#EXTVLCOPT:http-user-agent=mewatch/6.86.102 (Linux; Android 15;) Media3/1.6.0
https://d2e1asnsl7br7b.cloudfront.net/4c152bfc7ad2463d928bfbec0990eaeb/index.m3u8

#EXTINF:-1 group-title="Berita " tvg-id="Aljazeera.id" tvg-logo="https://urfan.id/logo/aljazeera.png",Al-Jazeera English
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://live-hls-web-aje.getaj.net/AJE/index.m3u8

#EXTINF:-1 group-title="Berita " tvg-id="Aljazeera.id" tvg-logo="https://urfan.id/logo/aljazeera.png",Al-Jazeera Arab
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://live-hls-web-aja.getaj.net/AJA/index.m3u8

#EXTINF:-1 group-title="Berita " tvg-id="wion.in" tvg-logo="https://urfan.id/logo/wion.png",WION
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://d7x8z4yuq42qn.cloudfront.net/index_7.m3u8

#EXTINF:-1 group-title="Berita " tvg-id="DW.id" tvg-logo="https://urfan.id/logo/dwtv.png",DW
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/stream05/streamPlaylist.m3u8

#EXTINF:-1 group-title="Berita " tvg-id="voa.us" tvg-logo="https://urfan.id/logo/voatv.png",Voice of America
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://voa-ingest.akamaized.net/hls/live/2033868/tvmc03/playlist.m3u8

#EXTINF:-1 group-title="Berita " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png"
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/tv


######################################
####### PENGETAHUAN  #######
######################################

#EXTINF:-1 group-title="Pengetahuan " tvg-id="crimeinvestigation.id" tvg-logo="https://urfan.id/logo/crime.png",Crime Investigation
#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=ce73b28200934af786104ce175d0dc45:b3a7b83221ed0d8fe18b8fcf92b5861a
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://visionplus.id/
https://d2xz2v5wuvgur6.cloudfront.net/out/v1/384f26c1c3b74ce09fa60bed24719b79/index.mpd

#EXTINF:-1 group-title="Pengetahuan " tvg-id="CGTN Documentary.id" tvg-logo="https://urfan.id/logo/cgtndocu.png",CGTN Documentary
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://dens.tv/
https://stream.urfan.id/cgtndoc

#EXTINF:-1 group-title="Pengetahuan " tvg-id="outdoorchannel.id" tvg-logo="https://urfan.id/logo/outdoorch.png",Outdoor Channel
#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=7efd32eb4765465c8a19aba6987770c8:733e8d3f4fb8f7ae021168d92f922645
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://visionplus.id/
https://d2tjypxxy769fn.cloudfront.net/out/v1/c169ca1dcbe249c5bf233aabc3db4a4f/index.mpd

#EXTINF:-1 group-title="Pengetahuan " tvg-id="bbcearth.id" tvg-logo="https://urfan.id/logo/bbcearth.png",BBC Earth
#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=5709bc59805c4f23b000306efea48438:1772cf06c2f5dd3980a3245cd31fd356
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://visionplus.id/
https://d84q7nw4qf3j3.cloudfront.net/out/v1/4e5b2a283adf462c8b6b55b2ef059fac/index.mpd

#EXTINF:-1 group-title="Pengetahuan " tvg-id="lovenature.id" tvg-logo="https://urfan.id/logo/lovenature.png",Love Nature
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://d18dyiwu97wm6q.cloudfront.net/playlist.m3u8

#EXTINF:-1 group-title="Pengetahuan " tvg-id="nasatv.us" tvg-logo="https://urfan.id/logo/nasatv.png",NASA TV Media
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://ntv2.akamaized.net/hls/live/2013923/NASA-NTV2-HLS/master.m3u8

#EXTINF:-1 group-title="Pengetahuan " tvg-id="nasatvpublic.us" tvg-logo="https://urfan.id/logo/nasatv.png",NASA TV Public
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://ntv1.akamaized.net/hls/live/2014075/NASA-NTV1-HLS/master.m3u8

#EXTINF:-1 group-title="Pengetahuan " tvg-id="ebs1tv.kr" tvg-logo="https://urfan.id/logo/ebs.png",EBS 1
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://ebsonairios.ebs.co.kr/groundwavetablet500k/tablet500k/playlist.m3u8

#EXTINF:-1 group-title="Pengetahuan " tvg-id="ebs2tv.kr" tvg-logo="https://urfan.id/logo/ebs.png",EBS 2
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://ebsonairios.ebs.co.kr/ebs2tablet500k/tablet500k/playlist.m3u8

#EXTINF:-1 group-title="Pengetahuan " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png"
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/tv


###################################
######### FILM  #########
###################################

#EXTINF:-1 group-title="Film " tvg-id="zeebioskop.id" tvg-logo="https://urfan.id/logo/zeebioskop.png",ZEE Bioskop
#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=398ef14ec7014ad8ae75414a7efd2a0f:99a6225691aa669f0f22677b4536705e
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://visionplus.id/
https://d2xz2v5wuvgur6.cloudfront.net/out/v1/81cb1af2ea4d4842a94f1c83957b4cd2/index.mpd

#EXTINF:-1 group-title="Film " tvg-id="Rock Action.id" tvg-logo="https://urfan.id/logo/rockact.png",Rock Action
#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=d4126f7fd6134adfbedb3a0daefd7657:920f1adcca60069c887da7f1d225607d
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://visionplus.id/
https://d84q7nw4qf3j3.cloudfront.net/out/v1/010bb28c19b64975b318d3b00f58b18b/index.mpd

#EXTINF:-1 group-title="Film " tvg-id="Thrill.id" tvg-logo="https://urfan.id/logo/thrill.png",Thrill
#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=3ffab3471a994535bdf7fc663792f08b:6e82876474df025c39ae804ba738ff17
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://visionplus.id/
https://d2tjypxxy769fn.cloudfront.net/out/v1/3c619ecc120b46e999d1eaa627cc544f/index.mpd

#EXTINF:-1 group-title="Film " tvg-id="Celestial Movies.id"" tvg-logo="https://urfan.id/logo/cm.png",Celestial Movies
#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=de4a383599bb4ec4a24f8c61f2b9a3ba:5166677d7f6797bcf459cf7c8b66dcb9
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://visionplus.id/
https://d2xz2v5wuvgur6.cloudfront.net/out/v1/fd25e662b7154c60a94f7c061573ba2d/index.mpd

#EXTINF:-1 group-title="Film " tvg-id="CCM.id" tvg-logo="https://urfan.id/logo/ccm.png",Celestial Classic Movies
#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=974d4fb195224f66a2271de806e62018:0e92ec1a28d59da80161c3541c6eb8eb
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://visionplus.id/
https://d84q7nw4qf3j3.cloudfront.net/out/v1/6bdbe6ce7f034807aba5f09bed048b05/index.mpd

#EXTINF:-1 group-title="Film " tvg-id="TVN Movies.id" tvg-logo="https://urfan.id/logo/tvnmovies.png",tvN Movies
#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=17fb563c784848f09d8a1ea88a2fa989:1d0bd94eab5d5f56a950b784d9345439
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://visionplus.id/
https://d2tjypxxy769fn.cloudfront.net/out/v1/096d5cf064294e7ea3a7f59ee2899669/index.mpd

#EXTINF:-1 group-title="Film " tvg-id="My Cinema Asia.id" tvg-logo="https://urfan.id/logo/mca.png",My Cinema Asia
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://dens.tv/
https://stream.urfan.id/mycinasia

#EXTINF:-1 group-title="Film " tvg-id="mychinemaeurope.id" tvg-logo="https://urfan.id/logo/mce.png",My Cinema Europe
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://dens.tv/
https://stream.urfan.id/mycineu

#EXTINF:-1 group-title="Film " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png"
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/tv


####################################
######## HIBURAN  ########
####################################

#EXTINF:-1 group-title="Hiburan " tvg-id="Rock Entertainment.id" tvg-logo="https://urfan.id/logo/rockent.png",Rock Entertainment
#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=a44cd51b688a458d97f534c286e58243:d62302543075463e472e23d7e947f10b
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://visionplus.id/
https://d2tjypxxy769fn.cloudfront.net/out/v1/4cae4723d4d54a7fb71020bd7939a202/index.mpd

#EXTINF:-1 group-title="Hiburan " tvg-id="Kplus.id" tvg-logo="https://urfan.id/logo/kplus.png",K+
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://indihometv.com/
https://cdn10jtedge.indihometv.com/atm/DASH/kplus/manifest.mpd

#EXTINF:-1 group-title="Hiburan " tvg-id="TVN.id" tvg-logo="https://urfan.id/logo/tvn.png",tvN
#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=2e8cbd6f664b4ace966d3edfad94c18e:cff33777777f7e61078ae2ae41ed0636
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://visionplus.id/
https://d84q7nw4qf3j3.cloudfront.net/out/v1/6dc5412d26ea4e65961c825d866f2a34/index.mpd

#EXTINF:-1 group-title="Hiburan " tvg-id="Kix.id" tvg-logo="https://urfan.id/logo/kix.png",KIX
#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=85f74e4d84834605a4b01820091ea627:c2881a45f94ec6ecbec1303f4e3b1fd6
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://visionplus.id/
https://d2tjypxxy769fn.cloudfront.net/out/v1/7a50d44c0a154dd29880c3728fb49a56/index.mpd

#EXTINF:-1 group-title="Hiburan " tvg-id="axn.id" tvg-logo="https://urfan.id/logo/axn.png",AXN
#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=2b095c9946d242cb9108e6a589a26072:8bc2cdfd0e86f7cfa935ef05978be229
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://visionplus.id/
https://d3b0v7fggu5zwm.cloudfront.net/out/v1/456143d3b12140e1a872b25f067ddb62/index.mpd

#EXTINF:-1 group-title="Hiburan " tvg-id="Arirang.id" tvg-logo="https://urfan.id/logo/arirang.png",Arirang
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://amdlive-ch01-ctnd-com.akamaized.net/arirang_1ch/smil:arirang_1ch.smil/playlist.m3u8

#EXTINF:-1 group-title="Hiburan " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png"
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/tv


##################################
######## MUSIK  ########
##################################

#EXTINF:-1 group-title="Musik " tvg-id="MatrixTV" tvg-logo="https://urfan.id/logo/matrixtv.png",Matrix TV Yogyakarta
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/matrixtv

#EXTINF:-1 group-title="Musik " tvg-id="CarubanTV" tvg-logo="https://urfan.id/logo/carubantv.png",Caruban TV Cirebon
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/carubantv

#EXTINF:-1 group-title="Musik " tvg-id="StaraTV" tvg-logo="https://urfan.id/logo/staratv.png",Stara TV Majalengka
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/staratvmaja

#EXTINF:-1 group-title="Musik " tvg-id="StaraTV" tvg-logo="https://urfan.id/logo/staratv.png",Stara TV Cianjur
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/staratvcian

#EXTINF:-1 group-title="Musik " tvg-id="StaraTV" tvg-logo="https://urfan.id/logo/staratv.png",Stara TV Malang
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/staratvmal

#EXTINF:-1 group-title="Musik " tvg-id="StaraTV" tvg-logo="https://urfan.id/logo/staratv.png",Stara TV Bandung
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/staratvban

#EXTINF:-1 group-title="Musik " tvg-id="Music TV.id" tvg-logo="https://urfan.id/logo/musictv.png",Music TV
#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=55d8bf610e3142408ecfa5295d7eba39:0774f3ae6ea32f9b4c24896f1fb5bb40
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://visionplus.id/
https://d84q7nw4qf3j3.cloudfront.net/out/v1/c20d75deb06f401aa89681a9e5054de7/index.mpd

#EXTINF:-1 group-title="Musik " tvg-id="mictv.id" tvg-logo="https://urfan.id/logo/mictv.png",MIC TV
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/mictv

#EXTINF:-1 group-title="Musik " tvg-id="tvkesehatan.id" tvg-logo="https://urfan.id/logo/imtv.png",IMTV
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://5bf7b725107e5.streamlock.net/imtv/imtv/playlist.m3u8


########################################
######## LUAR NEGERI  ########
########################################

#EXTINF:-1 group-title="Luar Negeri " tvg-id="dotid" tvg-logo="https://urfan.id/logo/dotid.png",3HD
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://lb1-live-mv.v2h-cdn.com/hls/ffae/3hd/3hd.m3u8

#EXTINF:-1 group-title="Luar Negeri " tvg-id="dotid" tvg-logo="https://urfan.id/logo/dotid.png",Amarin TV
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://lb1-live-mv.v2h-cdn.com/hls/ffad/amarin/amarin.m3u8

#EXTINF:-1 group-title="Luar Negeri " tvg-id="dotid" tvg-logo="https://urfan.id/logo/dotid.png",GMM 25
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://lb1-live-mv.v2h-cdn.com/hls/ffbf/gmm25/gmm25.m3u8

#EXTINF:-1 group-title="Luar Negeri " tvg-id="dotid" tvg-logo="https://urfan.id/logo/dotid.png",ONE HD 31
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://lb1-live-mv.v2h-cdn.com/hls/ffba/one/one.m3u8

#EXTINF:-1 group-title="Luar Negeri " tvg-id="dotid" tvg-logo="https://urfan.id/logo/dotid.png",Thairath TV
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://lb1-live-mv.v2h-cdn.com/hls/ffaf/thairath/thairath.m3u8

#EXTINF:-1 group-title="Luar Negeri " tvg-id="dotid" tvg-logo="https://urfan.id/logo/dotid.png",True4U 24
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://lb1-live-mv.v2h-cdn.com/hls/ffca/true24/true24.m3u8

#EXTINF:-1 group-title="Luar Negeri " tvg-id="dotid" tvg-logo="https://urfan.id/logo/dotid.png",TV5 HD
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://lb1-live-mv.v2h-cdn.com/hls/fffb/5hd/5hd.m3u8

#EXTINF:-1 group-title="Luar Negeri " tvg-id="Berita RTM" tvg-logo="https://urfan.id/logo/beritartm.png",Berita RTM
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://rtmklik.rtm.gov.my/
https://d25tgymtnqzu8s.cloudfront.net/smil:berita/manifest.mpd?id=5

#EXTINF:-1 group-title="Luar Negeri " tvg-id="Okey" tvg-logo="https://urfan.id/logo/okeyrtm.png",Okey RTM
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://rtmklik.rtm.gov.my/
https://d25tgymtnqzu8s.cloudfront.net/smil:okey/manifest.mpd?id=3

#EXTINF:-1 group-title="Luar Negeri " tvg-id="tv1.my" tvg-logo="https://urfan.id/logo/tv1.png",TV1
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://rtmklik.rtm.gov.my/
https://d25tgymtnqzu8s.cloudfront.net/smil:tv1/manifest.mpd?id=1

#EXTINF:-1 group-title="Luar Negeri " tvg-id="tv2.my" tvg-logo="https://urfan.id/logo/tv2.png",TV2
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://rtmklik.rtm.gov.my/
https://d25tgymtnqzu8s.cloudfront.net/smil:tv2/manifest.mpd?id=2

#EXTINF:-1 group-title="Luar Negeri " tvg-id="TV6" tvg-logo="https://urfan.id/logo/tv6.png",TV6
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://rtmklik.rtm.gov.my/
https://d25tgymtnqzu8s.cloudfront.net/smil:tv6/manifest.mpd?id=6

#EXTINF:-1 group-title="Luar Negeri " tvg-logo="https://urfan.id/logo/sukmaindera.png",RTB Sukmaindera
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://www.rtbgo.bn/
https://d1211whpimeups.cloudfront.net/smil:rtb1/chunklist.m3u8

#EXTINF:-1 group-title="Luar Negeri " tvg-id="Aneka" tvg-logo="https://urfan.id/logo/aneka.png",RTB Aneka
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://www.rtbgo.bn/
https://d1211whpimeups.cloudfront.net/smil:rtb2/chunklist.m3u8

#EXTINF:-1 group-title="Luar Negeri " tvg-id="GoLive" tvg-logo="https://urfan.id/logo/golive.png",RTB Go Live
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
#EXTVLCOPT:http-referrer=https://www.rtbgo.bn/
https://d1211whpimeups.cloudfront.net/smil:rtbgo/chunklist.m3u8

#EXTINF:-1 group-title="Luar Negeri " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png"
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/tv


###################################
######### RADIO  ########
###################################

#EXTINF:-1 group-title="Radio " tvg-id="urfanradio.id" tvg-logo="https://urfan.id/logo/urfanradio.png",URFAN RADIO Sukoharjo
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/radio

#EXTINF:-1 group-title="Radio " tvg-id="mtafm.id" tvg-logo="https://urfan.id/logo/mtafm.png",MTA FM Solo
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/mta

#EXTINF:-1 group-title="Radio " tvg-id="persadafm.id" tvg-logo="https://urfan.id/logo/persadafm.png",Persada FM Sragen
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/persada

#EXTINF:-1 group-title="Radio " tvg-id="persadafm.id" tvg-logo="https://urfan.id/logo/persadafm.png",Persada FM Pacitan
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/pacitan

#EXTINF:-1 group-title="Radio " tvg-id="suarapantura.id" tvg-logo="https://urfan.id/logo/suarapantura.png",Suara Pantura FM Rembang
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/pantura

#EXTINF:-1 group-title="Radio " tvg-id="suarakesuma.id" tvg-logo="https://urfan.id/logo/suarakesuma.png",Suara Kesuma FM Wonosono
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/kesuma

#EXTINF:-1 group-title="Radio " tvg-id="suarakesuma.id" tvg-logo="https://urfan.id/logo/suarakesuma.png",Kharisma FM Pontianak
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/kharisma

#EXTINF:-1 group-title="Radio " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png",RDS FM Solo
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/rds

#EXTINF:-1 group-title="Radio " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png",Gen FM Jakarta
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/genjkt

#EXTINF:-1 group-title="Radio " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png",AAS FM Sukoharjo
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/aas

#EXTINF:-1 group-title="Radio " tvg-id="radiogentara.id" tvg-logo="https://urfan.id/logo/radiogentara.png",Radio Gentara Wonogiri
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://s1.gntr.net/radio/8080/gentara

#EXTINF:-1 group-title="Radio " tvg-id="dmi.id" tvg-logo="https://urfan.id/logo/dmi.png",DMI Radio Yogyakarta
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/dengerin

#EXTINF:-1 group-title="Radio " tvg-id="radiosolopos.id" tvg-logo="https://urfan.id/logo/radiosolopos.png",Radio Solopos
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://live.solopos.com:8002/stream

#EXTINF:-1 group-title="Radio " tvg-id="swibafm.id" tvg-logo="https://urfan.id/logo/swibafm.png",Swiba FM Karanganyar
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://s5.alhastream.com/radio/8180/radio

#EXTINF:-1 group-title="Radio " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png",RSPD Klaten
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/rspdklt

#EXTINF:-1 group-title="Radio " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png",Salma Radio Klaten
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/salmaradio

#EXTINF:-1 group-title="Radio " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png",CJDW FM Boyolali
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/cjdwfm

#EXTINF:-1 group-title="Radio " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png",Solo Radio
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/soloradio

#EXTINF:-1 group-title="Radio " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png",TOP FM Sukoharjo
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/topfm

#EXTINF:-1 group-title="Radio " tvg-id="PTPNSolo.id" tvg-logo="https://urfan.id/logo/ptpnsolo.png",PTPN Solo
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://ssg.streamingmurah.com:8040/stream

#EXTINF:-1 group-title="Radio " tvg-id="TARadio.id" tvg-logo="https://urfan.id/logo/taradio.png",TA Radio Solo
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://c1.siar.us:10350/stream

#EXTINF:-1 group-title="Radio " tvg-id="MettaFM.id" tvg-logo="https://urfan.id/logo/mettafm.png",Metta FM Solo
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://srv1.streamcast.my.id/listen/metta_solo_fm/radio.mp3

#EXTINF:-1 group-title="Radio " tvg-id="isykarima.id" tvg-logo="https://urfan.id/logo/isykarima.png",Radio Isykarima
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://ssg.streamingmurah.com:8406/stream

#EXTINF:-1 group-title="Radio " tvg-id="Rodja.id" tvg-logo="https://urfan.id/logo/rodja.png",Radio Rodja
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://live2.radiorodja.com/rodja.mp3

#EXTINF:-1 group-title="Radio " tvg-id="fajrifm.id" tvg-logo="https://urfan.id/logo/fajrifm.png",Fajri FM Bogor
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://live.radioislam.xyz:10998

#EXTINF:-1 group-title="Radio " tvg-id="RADIKS99.id" tvg-logo="https://urfan.id/logo/radiks99.png",RADIKS99 FM Semarang
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://i.klikhost.com/9624/stream

#EXTINF:-1 group-title="Radio " tvg-id="POPFM.id" tvg-logo="https://urfan.id/logo/popjkt.png",POP FM Jakarta
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://i.klikhost.com/8272/stream

#EXTINF:-1 group-title="Radio " tvg-id="POPFM.id" tvg-logo="https://urfan.id/logo/popjogja.png",POP FM Jogja
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://i.klikhost.com/9154/stream

#EXTINF:-1 group-title="Radio " tvg-id="POPFM.id" tvg-logo="https://urfan.id/logo/popsmg.png",POP FM Semarang
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://i.klikhost.com/9612/stream

#EXTINF:-1 group-title="Radio " tvg-id="SASFM.id" tvg-logo="https://urfan.id/logo/sasfm.png",SAS FM Solo
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://i.klikhost.com/9616/stream

#EXTINF:-1 group-title="Radio " tvg-id="JPIFM.id" tvg-logo="https://urfan.id/logo/jpifm.png",JPI FM Solo
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://i.klikhost.com/9618/stream

#EXTINF:-1 group-title="Radio " tvg-id="PolarisFM.id" tvg-logo="https://urfan.id/logo/polarisfm.png",Polaris FM Magelang
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://i.klikhost.com/9608/stream

#EXTINF:-1 group-title="Radio " tvg-id="WijayaFM.id" tvg-logo="https://urfan.id/logo/wijayafm.png",WIJAYA FM Cilacap
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://i.klikhost.com/9604/stream

#EXTINF:-1 group-title="Radio " tvg-id="YasikaFM.id" tvg-logo="https://urfan.id/logo/yasikajogja.png",YASIKA FM Jogja
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://i.klikhost.com/9610/stream

#EXTINF:-1 group-title="Radio " tvg-id="AnitaFM.id" tvg-logo="https://urfan.id/logo/anitafm.png",ANITA FM Tegal
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://i.klikhost.com/9620/stream

#EXTINF:-1 group-title="Radio " tvg-id="GKLFM.id" tvg-logo="https://urfan.id/logo/gklfm.png",GKL FM Magelang
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://i.klikhost.com/9134/stream

#EXTINF:-1 group-title="Radio " tvg-id="DAMASHINTAFM.id" tvg-logo="https://urfan.id/logo/damashinta.png",DAMASHINTA FM Pekalongan
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://i.klikhost.com/9622/stream

#EXTINF:-1 group-title="Radio " tvg-id="YasikaFM.id" tvg-logo="https://urfan.id/logo/yasikapwt.png",YASIKA FM Purwokerto
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://i.klikhost.com/9606/stream

#EXTINF:-1 group-title="Radio " tvg-id="RCTFM.id" tvg-logo="https://urfan.id/logo/rctfm.png",RCT FM
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://i.klikhost.com/9614/stream

#EXTINF:-1 group-title="Radio " tvg-id="RadioParlemen.id" tvg-logo="https://urfan.id/logo/radioparlemen.png",Radio Parlemen
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://icecast.dpr.go.id/dpr.audio

#EXTINF:-1 group-title="Radio " tvg-id="pramborsfm.id" tvg-logo="https://urfan.id/logo/pramborsfm.png",Prambors FM
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/prambors

#EXTINF:-1 group-title="Radio " tvg-id="nasionalfm.bn" tvg-logo="https://urfan.id/logo/nasionalfm.png",Nasional FM
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://d2kziuzkf9oizb.cloudfront.net/rd005/playlist.m3u8

#EXTINF:-1 group-title="Radio " tvg-id="pilihanfm.bn" tvg-logo="https://urfan.id/logo/pilihanfm.png",Pilihan FM
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://d2kziuzkf9oizb.cloudfront.net/rd003/playlist.m3u8

#EXTINF:-1 group-title="Radio " tvg-id="pelangifm.bn" tvg-logo="https://urfan.id/logo/pelangifm.png",Pelangi FM
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://d2kziuzkf9oizb.cloudfront.net/rd001/playlist.m3u8

#EXTINF:-1 group-title="Radio " tvg-id="harmonifm.bn" tvg-logo="https://urfan.id/logo/harmonifm.png",Harmoni FM
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://d2kziuzkf9oizb.cloudfront.net/rd002/playlist.m3u8

#EXTINF:-1 group-title="Radio " tvg-id="nurislamfm.bn" tvg-logo="https://urfan.id/logo/nurislamfm.png",Nur Islam FM
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://d2kziuzkf9oizb.cloudfront.net/rd004/playlist.m3u8

#EXTINF:-1 group-title="Radio " tvg-id="rri.id" tvg-logo="https://urfan.id/logo/pro1.png",RRI Pro 1 Surakarta
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream-node1.rri.co.id/streaming/19/9219/rrisurakartapro1.mp3

#EXTINF:-1 group-title="Radio " tvg-id="rri.id" tvg-logo="https://urfan.id/logo/pro2.png",RRI Pro 2 Surakarta
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream-node1.rri.co.id/streaming/19/9219/rrisurakartapro2.mp3

#EXTINF:-1 group-title="Radio " tvg-id="rri.id" tvg-logo="https://urfan.id/logo/pro4.png",RRI Pro 4 Surakarta
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream-node1.rri.co.id/streaming/19/9219/rrisurakartapro4.mp3

#EXTINF:-1 group-title="Radio " tvg-id="rri.id" tvg-logo="https://urfan.id/logo/pro1.png",RRI Pro 1 Yogyakarta
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream-node0.rri.co.id/streaming/17/9017/rrijogjapro1.mp3

#EXTINF:-1 group-title="Radio " tvg-id="rri.id" tvg-logo="https://urfan.id/logo/pro2.png",RRI Pro 2 Yogyakarta
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream-node0.rri.co.id/streaming/17/9017/rrijogjapro2.mp3

#EXTINF:-1 group-title="Radio " tvg-id="rri.id" tvg-logo="https://urfan.id/logo/pro4.png",RRI Pro 4 Yogyakarta
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream-node0.rri.co.id/streaming/17/9017/rrijogjapro4.mp3

#EXTINF:-1 group-title="Radio " tvg-id="rri.id" tvg-logo="https://urfan.id/logo/pro1.png",RRI Pro 1 Semarang
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream-node0.rri.co.id/streaming/16/9016/rrisemarangpro1.mp3

#EXTINF:-1 group-title="Radio " tvg-id="rri.id" tvg-logo="https://urfan.id/logo/pro2.png",RRI Pro 2 Semarang
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream-node0.rri.co.id/streaming/16/9016/rrisemarangpro2.mp3

#EXTINF:-1 group-title="Radio " tvg-id="rri.id" tvg-logo="https://urfan.id/logo/pro4.png",RRI Pro 4 Semarang
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream-node0.rri.co.id/streaming/16/9016/rrisemarangpro4.mp3

#EXTINF:-1 group-title="Radio " tvg-id="rri.id" tvg-logo="https://urfan.id/logo/pro1.png",RRI Pro 1 Surabaya
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream-node0.rri.co.id/streaming/18/9018/rrisurabayapro1.mp3

#EXTINF:-1 group-title="Radio " tvg-id="rri.id" tvg-logo="https://urfan.id/logo/pro2.png",RRI Pro 2 Surabaya
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream-node0.rri.co.id/streaming/18/9018/rrisurabayapro2.mp3

#EXTINF:-1 group-title="Radio " tvg-id="rri.id" tvg-logo="https://urfan.id/logo/pro4.png",RRI Pro 4 Surabaya
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream-node0.rri.co.id/streaming/18/9018/rrisurabayapro4.mp3

#EXTINF:-1 group-title="Radio " tvg-id="rri.id" tvg-logo="https://urfan.id/logo/pro1.png",RRI Pro 1 Jakarta
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream-node1.rri.co.id/streaming/25/9025/rrijakartapro1.mp3

#EXTINF:-1 group-title="Radio " tvg-id="rri.id" tvg-logo="https://urfan.id/logo/pro2.png",RRI Pro 2 Jakarta
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream-node1.rri.co.id/streaming/25/9025/rrijakartapro2.mp3

#EXTINF:-1 group-title="Radio " tvg-id="rri.id" tvg-logo="https://urfan.id/logo/pro3.png",RRI Pro 3
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream-node0.rri.co.id/streaming/14/9014/kbrn.mp3

#EXTINF:-1 group-title="Radio " tvg-id="rri.id" tvg-logo="https://urfan.id/logo/pro4.png",RRI Pro 4 Jakarta
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream-node1.rri.co.id/streaming/25/9025/rrijakartapro4.mp3

#EXTINF:-1 group-title="Radio " tvg-id="rri.id" tvg-logo="https://urfan.id/logo/pro5.png",RRI Pro 5
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream-node1.rri.co.id/streaming/41/8941/chlima.mp3

#EXTINF:-1 group-title="Radio " tvg-id="rri.id" tvg-logo="https://urfan.id/logo/pro6.png",RRI VOI
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream-node0.rri.co.id/streaming/25/9125/voi.mp3

#EXTINF:-1 group-title="Radio " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png",Ria FM Solo
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://cast1.my-control-panel.com/proxy/radioso6/stream

#EXTINF:-1 group-title="Radio " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png",Sonora FM Yogyakarta
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://cast3.asurahosting.com/proxy/radios28/stream

#EXTINF:-1 group-title="Radio " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png",Metta FM Solo
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/mettafm

#EXTINF:-1 group-title="Radio " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png",Mitra FM
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://play.urfan.id/?url=https://jgj.jogjastreamers.com/mitrafm

#EXTINF:-1 group-title="Radio " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png",Radio Persatuan
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://play.urfan.id/?url=https://jgj.jogjastreamers.com/persatuanbtlfm

#EXTINF:-1 group-title="Radio " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png",LPPL Magelang
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://play.urfan.id/?url=https://jgj.jogjastreamers.com/satunamayk

#EXTINF:-1 group-title="Radio " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png",I-Radio
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://play.urfan.id/?url=https://jgj.jogjastreamers.com/iradio

#EXTINF:-1 group-title="Radio " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png",Love Jogja FM
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://play.urfan.id/?url=https://jgj.jogjastreamers.com/lovefm

#EXTINF:-1 group-title="Radio " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png",Solopos FM
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://live.solopos.com:8002/stream

#EXTINF:-1 group-title="Radio " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png",Utari FM
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://play.urfan.id/?url=https://jgj.jogjastreamers.com/utarifm

#EXTINF:-1 group-title="Radio " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png",Purnamasidi FM
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://play.urfan.id/?url=https://jgj.jogjastreamers.com/purnomosidiwnsbfm

#EXTINF:-1 group-title="Radio " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png",Radenmas FM
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://play.urfan.id/?url=https://jgj.jogjastreamers.com/radenmas

#EXTINF:-1 group-title="Radio " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png",BSP FM
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://play.urfan.id/?url=https://jgj.jogjastreamers.com/bsp

#EXTINF:-1 group-title="Radio " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png",JB Radio
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://play.urfan.id/?url=https://jgj.jogjastreamers.com/jbradio

#EXTINF:-1 group-title="Radio " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png",Retjo Buntung FM
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://play.urfan.id/?url=https://jgj.jogjastreamers.com/rbfm456789stereo

#EXTINF:-1 group-title="Radio " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png",Dian Swara FM
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://play.urfan.id/?url=https://jgj.jogjastreamers.com/dianswarastereo

#EXTINF:-1 group-title="Radio " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png",Pesona Bara FM
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://play.urfan.id/?url=https://jgj.jogjastreamers.com/hpai

#EXTINF:-1 group-title="Radio " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png",Bhakti Semesta FM
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://play.urfan.id/?url=https://jgj.jogjastreamers.com/bhaktisemesta

#EXTINF:-1 group-title="Radio " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png",GCD FM
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://play.urfan.id/?url=https://jgj.jogjastreamers.com/gcdstereo

#EXTINF:-1 group-title="Radio " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png",Gema Soedirman FM
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://play.urfan.id/?url=https://jgj.jogjastreamers.com/lpplfm

#EXTINF:-1 group-title="Radio " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png",Masdha FM
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://play.urfan.id/?url=https://jgj.jogjastreamers.com/masda

#EXTINF:-1 group-title="Radio " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png",Istakalisa FM
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://play.urfan.id/?url=https://jgj.jogjastreamers.com/istakalistayk

#EXTINF:-1 group-title="Radio " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png",RadioMu
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://play.urfan.id/?url=https://jgj.jogjastreamers.com/radiomu

#EXTINF:-1 group-title="Radio " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png",Voks Radio
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://play.urfan.id/?url=https://jgj.jogjastreamers.com/voks

#EXTINF:-1 group-title="Radio " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png",Radio Immanuel
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://play.urfan.id/?url=https://jgj.jogjastreamers.com/immanuel

#EXTINF:-1 group-title="Radio " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png",Romika FM
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://play.urfan.id/?url=https://jgj.jogjastreamers.com/romikafm

#EXTINF:-1 group-title="Radio " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png",Prima FM
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://play.urfan.id/?url=https://jgj.jogjastreamers.com/primafmsrg

#EXTINF:-1 group-title="Radio " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png",LPPL Radio Kota Batik
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://play.urfan.id/?url=https://jgj.jogjastreamers.com/radiokotabatik

#EXTINF:-1 group-title="Radio " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png",IN FM
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://play.urfan.id/?url=https://jgj.jogjastreamers.com/infm

#EXTINF:-1 group-title="Radio " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png",Paduka FM
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://play.urfan.id/?url=https://jgj.jogjastreamers.com/padukafm

#EXTINF:-1 group-title="Radio " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png",EMC FM
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://play.urfan.id/?url=https://jgj.jogjastreamers.com/emc

#EXTINF:-1 group-title="Radio " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png",Swaragama FM
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://play.urfan.id/?url=https://jgj.jogjastreamers.com/swaragama456789

#EXTINF:-1 group-title="Radio " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png",UNIMMA FM
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://play.urfan.id/?url=https://jgj.jogjastreamers.com/unimmafmstereo

#EXTINF:-1 group-title="Radio " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png",Argososro FM
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://play.urfan.id/?url=https://jgj.jogjastreamers.com/sasstereo

#EXTINF:-1 group-title="Radio " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png",Radio Tidar
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://play.urfan.id/?url=https://jgj.jogjastreamers.com/suaratidarmgl

#EXTINF:-1 group-title="Radio " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png",Jogja Family
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://play.urfan.id/?url=https://jgj.jogjastreamers.com/jogjafamily

#EXTINF:-1 group-title="Radio " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png",Jiz FM
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://play.urfan.id/?url=https://jgj.jogjastreamers.com/jisstereo

#EXTINF:-1 group-title="Radio " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png",UNISI FM
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://play.urfan.id/?url=https://jgj.jogjastreamers.com/unisifmyk

#EXTINF:-1 group-title="Radio " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png",Vedac FM
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://play.urfan.id/?url=https://jgj.jogjastreamers.com/vedacfmstereo

#EXTINF:-1 group-title="Radio " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png",Star FM
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://play.urfan.id/?url=https://jgj.jogjastreamers.com/starfmykstereo

#EXTINF:-1 group-title="Radio " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png",Radio Walisongo
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://play.urfan.id/?url=https://jgj.jogjastreamers.com/walisongo

#EXTINF:-1 group-title="Radio " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png",Citra FM
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://play.urfan.id/?url=https://jgj.jogjastreamers.com/citrawnsbfm

#EXTINF:-1 group-title="Radio " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png",TA Radio
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/taradio

#EXTINF:-1 group-title="Radio " tvg-id="urfan.id" tvg-logo="https://urfan.id/logo/dotid.png"
#EXTVLCOPT:http-user-agent=ExoPlayer/2.19.1 (Linux; Android 15) Media3/1.6.0
https://stream.urfan.id/tv

`;

  return new Response(playlist, {
    headers: {
      "Content-Type": "audio/x-mpegurl; charset=utf-8",
      "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
      "Pragma": "no-cache",
      "Expires": "0",
      "X-Robots-Tag": "noindex, nofollow, noarchive"
    }
  });

}