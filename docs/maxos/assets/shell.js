/* MAX OS App Shell 렌더러 — 좌측 전역 메뉴 + 상단 유틸리티
 * 사용법: <body data-page="home"> 안에 <div class="app" id="app"></div>를 두고,
 * 페이지 본문은 <main class="main"> 마크업을 #app 안에 미리 넣거나 shell이 감싼다.
 * 실제로는 각 페이지가 <div class="app"> 안에 <main>만 작성하고, shell.js가 topbar/sidebar를 prepend한다.
 */
(function () {
  var MENU = [
    { id: 'home',       label: '홈',              icon: '⌂', href: 'index.html' },
    { id: 'operations', label: '운영 현황',        icon: '▦', href: 'operations.html' },
    { id: 'workflows',  label: '워크플로우',        icon: '↯', href: 'workflows.html' },
    { id: 'ai',         label: 'AI와 일하기',       icon: '✳', href: 'ai-runtime.html' },
    { id: 'roles',      label: '우리가 일하는 기준', icon: '◇', href: 'roles.html' },
    { id: 'onboarding', label: '처음 시작하기',     icon: '◎', href: 'onboarding.html' }
  ];
  var FOOT = [{ id: 'help', label: '도움말·지원', icon: '?', href: 'help.html' }];

  function navLinks(items, page) {
    return items.map(function (m) {
      var act = m.id === page ? ' class="active"' : '';
      return '<a href="' + m.href + '"' + act + '><span class="side-icon">' + m.icon + '</span><span>' + m.label + '</span></a>';
    }).join('');
  }

  function render() {
    var app = document.querySelector('.app');
    if (!app) return;
    var page = document.body.getAttribute('data-page') || '';

    var topbar = document.createElement('header');
    topbar.className = 'topbar';
    topbar.innerHTML =
      '<button class="icon-btn menu-toggle" aria-label="메뉴 열기" onclick="document.body.classList.toggle(\'nav-open\')">☰</button>' +
      '<a class="brand" href="index.html">MAX OS<i></i></a>' +
      '<div class="topbar-spacer"></div>' +
      '<input class="search" placeholder="통합 검색" aria-label="통합 검색" title="검색은 데이터 연결 후 사용할 수 있어요" readonly />' +
      '<a class="icon-btn" href="operations.html#gates" aria-label="확인을 기다리는 일 보기" title="확인을 기다리는 일 보기">' +
      '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/></svg>' +
      '<span class="dot" id="shell-noti-dot" style="display:none"></span></a>' +
      '<select class="org-select" aria-label="조직 선택"><option>MAX실</option></select>' +
      '<div class="avatar" aria-label="김효정 프로필" title="김효정 · 실장"></div>';

    var side = document.createElement('aside');
    side.className = 'sidebar';
    side.innerHTML =
      '<div class="side-label">MAX OS</div>' +
      '<nav class="side-nav" aria-label="전역 메뉴">' + navLinks(MENU, page) + '</nav>' +
      '<div class="side-divider"></div>' +
      '<nav class="side-nav" aria-label="지원 메뉴">' + navLinks(FOOT, page) + '</nav>' +
      '<div class="side-foot">' +
      '  <div class="sys-status"><span class="sys-dot" id="shell-sys-dot"></span><span id="shell-sys-text">시스템 정상 연결</span></div>' +
      '  <div class="side-profile"><b>김효정</b><span>실장 · MAX실</span></div>' +
      '</div>';

    app.prepend(side);
    app.prepend(topbar);

    // 모바일: 본문 클릭 시 드로어 닫기
    app.addEventListener('click', function (e) {
      if (document.body.classList.contains('nav-open') && !side.contains(e.target) && !e.target.closest('.menu-toggle')) {
        document.body.classList.remove('nav-open');
      }
    });
  }

  /* 사이드바 하단 연결 상태 표기 — data.js의 freshness 결과를 받는다 */
  window.shellSetSync = function (state, text) {
    var dot = document.getElementById('shell-sys-dot');
    var t = document.getElementById('shell-sys-text');
    if (!dot || !t) return;
    dot.className = 'sys-dot' + (state === 'ok' ? '' : state === 'stale' ? ' warn' : ' err');
    t.textContent = text;
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render);
  else render();
})();
