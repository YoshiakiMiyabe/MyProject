// ---------- ハンバーガーメニュー jQuery ----------
$(function () {
  const hamburger = $(".js-hamburger-menu");
  const hamburgerBtn = $(".js-hamburger-button");

  // ハンバーガーボタンをクリックしたら
  hamburgerBtn.on("click", function () {
    $(this).toggleClass("active");
    hamburger.toggleClass("active");
  });

  // 画面のサイズが変わったら
  $(window).on("resize", function () {
    // ハンバーガーメニューを閉じる
    hamburger.removeClass("active");
    // ボタンも閉じる
    hamburgerBtn.removeClass("active");
  });

  // メニュー内のページ内リンクがクリックされたとき
  $(".js-hamburger-menu a[href]").on("click", function () {
    // メニューを閉じる
    hamburger.removeClass("active");
    // ボタンも閉じる
    hamburgerBtn.removeClass("active");
  });

  // 画面をスクロールしたら
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      // メニューを閉じる
      hamburger.removeClass("active");
      // ボタンも閉じる
      hamburgerBtn.removeClass("active");
    }
  });
});

// ---------- スライダー スリック ----------
$(".slick").slick({
  autoplay: true, // 自動再生
  autoplaySpeed: 10000, // 自動再生の速さ(mm秒)
  infinite: true, // 最後まできたら最初に戻る
  // dots: true, // ドットの表示
  //dotsClass: 'dots-wrap', // ドットのcss調整用
  arrows: false, // 左右のナビゲーション
  fade: true, // フェード
  cssEase: "ease-in", // イージングを指定（ease, ease-in, ease-out, linear）
  //rtl: true, // 逆方向
});

// ---------- フェードインアニメーション ----------
$(function () {
  const fadeTargets = $(".js-fade-in");

  $(window).on("scroll", function () {
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();

    fadeTargets.each(function () {
      const targetTop = $(this).offset().top;

      // 要素が画面下から少し見え始めたら実行
      if (scroll > targetTop - windowHeight + 100) {
        $(this).addClass("is-visible");
      }
    });
  });
});
