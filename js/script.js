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

// チェックでボタンを有効化する実装
const isAgreed = document.querySelector('#check');
const checkBtn = document.querySelector('#check-btn');

isAgreed.addEventListener('change', () => {
  //if文で書くと
  // if (isAgreed.checked) {
  //   checkBtn.disabled = false;
  // } else {
  //   checkBtn.disabled = true;
  // }

  //チェックボックスとdisabledが逆になっているので!を文頭につけてチェックされていないとdisabledをtrueにする文を書く
  checkBtn.disabled = !isAgreed.checked;
})

  //スクロール量の表示をする実装
  // 処理が長くなりそうなので関数名を指定
  const getScrollPercent = () => {
    // スクロール量
    const scrolled = window.scrollY;
    // 縦方向のスクロールはY、横方向はXで指定する
    // console.log(`${scrolled}スクロールされました`);
    
    // ページ全体の高さ
    const pageHeight = document.documentElement.scrollHeight;

    // 表示領域の高さ
    const viewHeight = document.documentElement.clientHeight;
    // console.log(`ページの高さ:${pageHeight}、表示領域の高さ:${viewHeight}`)
    
    // 0~100でスクロールされた割合を出す計算式 スクロール量 / スクロール可能なページの高さ（ページ全体の高さ - 表示領域の高さ）*100
    const percentage = scrolled / (pageHeight - viewHeight) * 100;
    // console.log(percentage);

    // プログレスバーに幅を追加
    document.querySelector('#bar').style.width = `${percentage}%`;
  }
window.addEventListener('scroll', getScrollPercent);