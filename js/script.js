const loading = document.querySelector('#loading');

// 定数loading（ロード中）という要素にloaded（ロード終了後）の要素を足す
window.addEventListener('load', () => {
  loading.classList.add('loaded');
});

const btn = document.querySelector('#btn');

// 一回ではなくボタンがクリックされるたび処理をしたいのでtoggleを使う
btn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  // もしボタンのテキストが「ダークモードにする」になっているなら
  if (btn.textContent === 'ダークモードにする'){
    // クリックされた時に「ライトモードにする」に変更する
    btn.textContent = 'ライトモードにする';

  //そうでないなら（「ライトモードにする」と表示されているなら） 
  } else {
    // クリックされた時に「ダークモードにする」に戻す
    btn.textContent = 'ダークモードにする';
  }

})
