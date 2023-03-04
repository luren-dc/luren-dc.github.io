document.body.addEventListener("copy", (e) => {
  let clipboardData = e.clipboardData || window.clipboardData;
  if (!clipboardData) return;
  btf.snackbarShow("复制成功 请遵守 CC BY-NC-SA 4.0 协议");
});
