navigator.nfc.addEventListener('reading', event => {
    const records = event.message.records;
    for (const record of records) {
      // NFCタグから情報を処理する
      console.log(record.data);
  
      // 成功のアニメーションを開始する要素にクラスを追加
      const targetElement = document.getElementById('animation-target');
      targetElement.classList.add('success-animation');
    }
  });
  
  navigator.nfc.scan();
  