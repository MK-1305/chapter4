// ローディングの実装
const loading = document.querySelector('#loading');

// 定数loading（ロード中）という要素にloaded（ロード終了後）の要素を足す
window.addEventListener('load', () => {
  loading.classList.add('loaded');
});

// ダークモードの実装
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

// 文字数カウンターの実装
const text = document.querySelector('#text');
const count = document.querySelector('#count');

// テキストを入力した時に文字数を数える
text.addEventListener('keyup', () => {
  count.textContent = text.value.length;

  // もし100文字を超えた時
  if (text.value.length > 100) {
    count.classList.add('alert');
    // そうでないなら（100文字以下なら）
  } else {
    count.classList.remove('alert');
  }
});
