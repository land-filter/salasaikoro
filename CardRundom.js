let cards = [
    "Cam.JPG",
    "Cas.JPG",
    "Cep.JPG",
    "Cet.JPG",
    "Cnc.JPG",
    "Col.JPG",
    "Eri.JPG",
    "Lyn.JPG",
    "Psc.jpg",
    "UMa.JPG"
];

function showRandomCard() {
    const cardElement = document.getElementById("card");
    const historyElement = document.getElementById("history");

    if (cards.length === 0) {
        cardElement.innerHTML = "END";
        return;
    }

    // ランダムなカードのインデックスを取得
    const randomIndex = Math.floor(Math.random() * cards.length);
    
    // ランダムなカードの画像を設定
    const cardImagePath = cards[randomIndex];
    cardElement.innerHTML = `<img src="${cardImagePath}" alt="ランダムなカード">`;

    // 既に出たカードを履歴に追加
    const historyCard = document.createElement("div");
    historyCard.classList.add("card", "small-card"); // 小さなカードのスタイルを追加
    historyCard.innerHTML = `<img src="${cardImagePath}" alt="履歴のカード">`;
    historyElement.appendChild(historyCard);

    // 表示されたカードを配列から削除
    cards.splice(randomIndex, 1);
}

window.addEventListener("DOMContentLoaded", () => {
    // 星を表示するための親要素を取得
    const stars = document.querySelector(".stars");
  
    // 星を生成する関数
    const createStar = () => {
      const starEl = document.createElement("span");
      starEl.className = "star";
      const minSize = 1; // 星の最小サイズを指定
      const maxSize = 2; // 星の最大サイズを指定
      const size = Math.random() * (maxSize - minSize) + minSize;
      starEl.style.width = `${size}px`;
      starEl.style.height = `${size}px`;
      starEl.style.left = `${Math.random() * 100}%`;
      starEl.style.top = `${Math.random() * 100}%`;
      starEl.style.animationDelay = `${Math.random() * 10}s`;
      stars.appendChild(starEl);
    };
  
    // for文で星を生成する関数を指定した回数呼び出す
    for (let i = 0; i <= 500; i++) {
      createStar();
    }
  });


// ページが読み込まれたときに初期カードを表示
showRandomCard();
