// JSが有効な場合は .no-js を削除
document.documentElement.classList.remove('no-js');


// ハンバーガーボタン
document.addEventListener('DOMContentLoaded', function () { // htmlの読み込みが終わったらfunction実行
  let btn = document.querySelector('.js-hamburger-button');
  let nav = document.querySelector('.js-hamburger-menu');
  let links = nav.querySelectorAll('a'); // メニュー内のリンクすべて取得

  btn.addEventListener('click', function () {
    btn.classList.toggle('active');
    nav.classList.toggle('active');
    // ハンバーガーメニュー展開時スクロールさせない
    document.body.classList.toggle('no-scroll');
  });

  // 各リンクに個別でクリックイベントを設定
  links.forEach(function (link) {
    link.addEventListener('click', function (e) {
      btn.classList.remove('active');
      nav.classList.remove('active');
      document.body.classList.remove('no-scroll');

      // ページ内リンクの場合はスムーズスクロール
      if (link.hash) {
        e.preventDefault();
        const target = document.querySelector(link.hash);
        setTimeout(() => {
          target?.scrollIntoView({ behavior: 'smooth' });
        }, 200);
      }
    });
  });
});


// フェードスライダー
document.addEventListener("DOMContentLoaded", function () {
  let images = document.querySelectorAll(".js-slider img");
  let currentIndex = 0;
  let interval = 6000; // 6秒間隔

  // 最初の画像を表示
  images[currentIndex].style.opacity = 1;
  images[currentIndex].style.zIndex = 1;

  setInterval(function () {
    let prevIndex = currentIndex;
    currentIndex = (currentIndex + 1) % images.length;

    // 前の画像をフェードアウト
    images[prevIndex].style.opacity = 0;

    // 次の画像をフェードイン
    images[currentIndex].style.zIndex = 2;
    images[currentIndex].style.opacity = 1;

    // フェードアウト後に z-index を下げる
    setTimeout(function () {
      images[prevIndex].style.zIndex = 0;
    }, 1000); // CSSのtransition時間と同じ 1秒
  }, interval);
});


// フェードインアニメーション
document.addEventListener("DOMContentLoaded", function () {
  // フェードインの要素を取得
  let items = document.querySelectorAll(".js-fade-in");

  // IntersectionObserverのコールバック関数
  function callback(entries, observer) {
    for (let i = 0; i < entries.length; i++) {
      let entry = entries[i];
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target); // 一度だけアニメーション
      }
    }
  }

  // オプション設定
  let options = {
    threshold: 0.2 // 20%表示されたら発火
  };

  // IntersectionObserverのインスタンス作成
  let observer = new IntersectionObserver(callback, options);

  // 各要素を監視
  for (let i = 0; i < items.length; i++) {
    observer.observe(items[i]);
  }
});

// document.addEventListener("DOMContentLoaded",～が3回あるため本来であればまとめるのが適切。各部を今後使いまわせるようにそのまま実装。