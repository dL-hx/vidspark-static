/* VidSpark — shared UI interactions */
document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var mobile = document.querySelector('.nav-mobile');
  if (toggle && mobile) {
    toggle.addEventListener('click', function () {
      mobile.classList.toggle('open');
    });
  }

  // Tabs: [data-tab] buttons switch [data-panel] panels
  document.querySelectorAll('[data-tab-group]').forEach(function (group) {
    var btns = group.querySelectorAll('[data-tab]');
    btns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var target = btn.getAttribute('data-tab');
        btns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var scope = group.getAttribute('data-tab-scope') || document;
        var panels = (scope === 'document' ? document : (group.closest('[data-tab-container]') || document))
          .querySelectorAll('[data-panel]');
        panels.forEach(function (p) {
          p.classList.toggle('active', p.getAttribute('data-panel') === target);
        });
      });
    });
  });

  // Generic segmented / toggle buttons (visual only)
  document.querySelectorAll('[data-toggle-group]').forEach(function (group) {
    group.addEventListener('click', function (e) {
      var b = e.target.closest('button,[role=button]');
      if (!b) return;
      group.querySelectorAll('button,[role=button]').forEach(function (x) { x.classList.remove('active'); });
      b.classList.add('active');
      var evt = group.getAttribute('data-toggle-group');
      var payload = b.getAttribute('data-value') || b.textContent.trim();
      document.dispatchEvent(new CustomEvent(evt, { detail: payload }));
    });
  });

  // Pricing monthly/yearly toggle -> elements with data-monthly / data-yearly
  var billingBtns = document.querySelectorAll('[data-billing]');
  billingBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      billingBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var mode = btn.getAttribute('data-billing');
      document.querySelectorAll('[data-monthly]').forEach(function (el) {
        el.style.display = mode === 'monthly' ? '' : 'none';
      });
      document.querySelectorAll('[data-yearly]').forEach(function (el) {
        el.style.display = mode === 'yearly' ? '' : 'none';
      });
    });
  });

  // ---- global toast ----
  window.vsToast = function (msg, ok) {
    var t = document.getElementById('vsToast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'vsToast';
      t.className = 'vs-toast';
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.toggle('ok', !!ok);
    t.classList.toggle('err', ok === false);
    t.classList.add('show');
    clearTimeout(t._h);
    t._h = setTimeout(function () { t.classList.remove('show'); }, 2400);
  };

  // ---- delegated basic interactions ----
  document.addEventListener('click', function (e) {
    var b = e.target.closest('button, a');

    // [data-toast] -> show toast
    if (b && b.hasAttribute('data-toast')) {
      window.vsToast(b.getAttribute('data-toast'), b.getAttribute('data-ok') !== '0');
    }

    // [data-open] / [data-close] -> modal open/close
    if (b && b.hasAttribute('data-open')) {
      var m = document.querySelector(b.getAttribute('data-open'));
      if (m) m.hidden = false;
    }
    if (b && b.hasAttribute('data-close')) {
      var sel = b.getAttribute('data-close');
      var mm = (sel && sel !== 'modal') ? document.querySelector(sel) : b.closest('[data-modal]');
      if (mm) mm.hidden = true;
    }

    // [data-collapse] -> toggle .collapsed on target panel ("parent" = closest .panel)
    if (b && b.hasAttribute('data-collapse')) {
      var v = b.getAttribute('data-collapse');
      var target = v === 'parent' ? b.closest('.panel') : document.querySelector(v);
      if (target) target.classList.toggle('collapsed');
    }

    // workbench-style action buttons feedback (only labels without own handlers)
    if (b && !b.hasAttribute('data-toast') && !b.disabled) {
      var txt = (b.textContent || '').trim();
      var MAP = [
        [/^上传/, '上传成功', true],
        [/^删除片段/, '已删除', true],
        [/^删除$/, '已删除', true],
        [/^保存设置/, '工作流设置已更新', true],
        [/^复制为新草稿/, '已复制为新草稿', true],
        [/^新增片段/, '已新增片段', true],
        [/^取消排队/, '已取消排队', true],
        [/^生成$/, '已开始生成', true],
        [/^清除/, '已清除', true],
        [/^(首帧|尾帧|添加参考图|选择参考图|选择首帧图|选择尾帧图)$/, '暂无可用资产，请先在左侧「资产库」上传图片', false],
        [/^详细信息/, '时长 8s · 模式 首帧生视频 · Seedance 2.0', true]
      ];
      for (var i = 0; i < MAP.length; i++) {
        if (MAP[i][0].test(txt)) { window.vsToast(MAP[i][1], MAP[i][2]); break; }
      }
    }
  });

  // ESC closes any open [data-modal]
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('[data-modal]').forEach(function (m) { m.hidden = true; });
    }
  });

  // demo form submit guard (login / register / feedback ...)
  document.addEventListener('submit', function (e) {
    var f = e.target;
    if (!f || f.tagName !== 'FORM' || f.hasAttribute('data-real')) return;
    e.preventDefault();
    var btn = f.querySelector('[type=submit]');
    var txt = btn ? btn.textContent.trim() : '';
    if (txt.indexOf('登录') > -1) window.vsToast('登录成功，正在跳转...', true);
    else if (txt.indexOf('注册') > -1) window.vsToast('注册成功！已自动登录', true);
    else window.vsToast('提交成功', true);
  });

  // Smooth demo: fake "summarize" progress on dashboard
  var sumBtn = document.querySelector('[data-demo-summarize]');
  if (sumBtn) {
    sumBtn.addEventListener('click', function () {
      var bar = document.querySelector('[data-demo-bar]');
      var label = document.querySelector('[data-demo-label]');
      var steps = ['正在下载并解析资源...', '正在进行高精度音频转录...', '正在生成智能摘要与思维导图...', '完成'];
      if (!bar) return;
      var p = 0, i = 0;
      var t = setInterval(function () {
        p += Math.random() * 14;
        if (p >= 100) { p = 100; clearInterval(t); if (label) label.textContent = '已完成 ✨'; }
        else { i = Math.min(Math.floor(p / 33), 2); if (label) label.textContent = steps[i]; }
        bar.style.width = p + '%';
      }, 320);
    });
  }
});
