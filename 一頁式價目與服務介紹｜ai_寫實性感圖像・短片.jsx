<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  <title>品牌聯絡頁</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html, body {
      width: 100%;
      height: 100%;
      background: #1c0033;
      font-family: Arial, "Noto Sans TC", sans-serif;
      overflow: hidden;
    }

    .page {
      position: relative;
      width: 100%;
      height: 100dvh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #1c0033;
    }

    .poster-wrap {
      position: relative;
      width: 100%;
      height: 100%;
      max-width: 520px;
      margin: 0 auto;
      overflow: hidden;
      background: #1c0033;
    }

    .poster {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      user-select: none;
      -webkit-user-drag: none;
      pointer-events: none;
    }

    .hotspot {
      position: absolute;
      left: 16%;
      top: 67.8%;
      width: 68%;
      height: 13.5%;
      display: block;
      border-radius: 28px;
      text-decoration: none;
      background: rgba(255,255,255,0);
      z-index: 10;
      -webkit-tap-highlight-color: transparent;
      cursor: pointer;
    }

    .hotspot:active {
      transform: scale(0.985);
    }

    @media (min-width: 768px) {
      .poster-wrap {
        max-width: 460px;
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.35);
      }
    }
  </style>
</head>
<body>
  <main class="page">
    <section class="poster-wrap">
      <img src="image.png" alt="主視覺海報" class="poster" />

      <a
        class="hotspot"
        href="https://lin.ee/n4TsW6i"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="前往官方 LINE"
      ></a>
    </section>
  </main>
</body>
</html>
