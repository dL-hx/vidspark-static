/* 「提交成功」通知弹窗组件（默认隐藏）
 * 引入：<script src="assets/js/submit-toast.js"></script>
 * 调用：vsSubmitToast.show()          默认文案显示
 *       vsSubmitToast.show('自定义副标题')
 *       vsSubmitToast.hide()          隐藏
 */
(function () {
  var HIDE_TIMER = null;

  function ensure() {
    var root = document.getElementById('vsSubmitToast');
    if (root) return root;

    var style = document.createElement('style');
    style.textContent =
      '.vs-submit-toast{position:fixed;bottom:32px;right:32px;z-index:50;transform:translateY(80px);opacity:0;pointer-events:none;transition:all .5s}' +
      '.vs-submit-toast.show{transform:translateY(0);opacity:1}' +
      '.vs-submit-toast__card{display:flex;align-items:center;gap:16px;background:#1e293b;border:1px solid rgba(59,130,246,.3);color:#fff;padding:16px 24px;border-radius:12px;box-shadow:0 25px 50px -12px rgba(0,0,0,.5)}' +
      '.vs-submit-toast__icon{width:32px;height:32px;border-radius:9999px;background:rgba(34,197,94,.2);display:flex;align-items:center;justify-content:center;color:#4ade80;flex:0 0 auto}' +
      '.vs-submit-toast__icon svg{width:16px;height:16px}' +
      '.vs-submit-toast__title{font-size:14px;font-weight:700;line-height:1.4;margin:0}' +
      '.vs-submit-toast__desc{font-size:12px;color:#94a3b8;line-height:1.5;margin:0}';
    document.head.appendChild(style);

    root = document.createElement('div');
    root.id = 'vsSubmitToast';
    root.className = 'vs-submit-toast';
    root.setAttribute('role', 'status');
    root.innerHTML =
      '<div class="vs-submit-toast__card">' +
        '<div class="vs-submit-toast__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>' +
        '<div><h4 class="vs-submit-toast__title">提交成功</h4>' +
        '<p class="vs-submit-toast__desc">系统正在分析您的视频内容...</p></div>' +
      '</div>';
    document.body.appendChild(root);
    return root;
  }

  window.vsSubmitToast = {
    show: function (desc) {
      var root = ensure();
      if (desc) root.querySelector('.vs-submit-toast__desc').textContent = desc;
      void root.offsetWidth;
      root.classList.add('show');
      clearTimeout(HIDE_TIMER);
      HIDE_TIMER = setTimeout(function () { root.classList.remove('show'); }, 3200);
    },
    hide: function () {
      clearTimeout(HIDE_TIMER);
      var root = document.getElementById('vsSubmitToast');
      if (root) root.classList.remove('show');
    }
  };
})();
