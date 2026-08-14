// Netlify Function: サーバー側でURL短縮サービスを呼び出す。
// ブラウザから直接叩くとCORSでブロックされるサービスも、
// サーバー同士の通信であればCORSの制限を受けないため、ここで代行する。

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  let longUrl;
  try {
    const body = JSON.parse(event.body || "{}");
    longUrl = body.url;
  } catch (err) {
    return { statusCode: 400, body: JSON.stringify({ error: "invalid request body" }) };
  }

  if (!longUrl || typeof longUrl !== "string") {
    return { statusCode: 400, body: JSON.stringify({ error: "url is required" }) };
  }

  // 1. is.gd
  try {
    const res = await fetch(
      "https://is.gd/create.php?format=json&url=" + encodeURIComponent(longUrl)
    );
    if (res.ok) {
      const data = await res.json();
      if (data && data.shorturl) {
        return {
          statusCode: 200,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ shortUrl: data.shorturl, via: "is.gd" })
        };
      }
    }
  } catch (err) {
    console.warn("is.gd failed", err);
  }

  // 2. TinyURL（is.gdが失敗した場合のフォールバック）
  try {
    const res = await fetch(
      "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(longUrl)
    );
    if (res.ok) {
      const text = (await res.text()).trim();
      if (text.startsWith("http")) {
        return {
          statusCode: 200,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ shortUrl: text, via: "tinyurl" })
        };
      }
    }
  } catch (err) {
    console.warn("tinyurl failed", err);
  }

  return {
    statusCode: 502,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ error: "shortening failed" })
  };
};
