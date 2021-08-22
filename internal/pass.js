function disp() {
  // 入力ダイアログを表示 ＋ 入力内容を pass に代入
  pass = window.prompt("パスワードを入力してください", "");
  
  // 入力内容が aiueo の場合は internal.html にジャンプ
  if (pass == 'aiueo') {
      location.href = "internal.html";
  }

  // 入力内容が一致しない場合は警告ダイアログを表示
  else if (pass != "" && pass != null) {
    window.alert(pass + 'パスワードが違います。');
  }

  // 空の場合やキャンセルした場合は警告ダイアログを表示
  else {
    window.alert('キャンセルされました');
  }
}
