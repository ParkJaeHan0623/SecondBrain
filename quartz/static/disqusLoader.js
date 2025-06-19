/* 전역에서 단 1회만 실행 */
(function () {
  /** 1) 최초 로드시 embed.js 삽입 */
  const load = () => {
    const d = document
    const s = d.createElement("script")
    s.src = "https://parkjaehan.disqus.com/embed.js"   // ← your shortname
    s.setAttribute("data-timestamp", Date.now().toString())
    d.body.appendChild(s)
  }

  /** 2) Quartz SPA 전환(nav 이벤트)마다 DISQUS.reset */
  const reset = () => {
    if (window.DISQUS) {
      window.DISQUS.reset({
        reload: true,
        config: function () {
          this.page.url = window.location.href
          this.page.identifier = window.location.pathname
        },
      })
    }
  }

  /* Quartz 가 SPA 라우팅을 끝낼 때마다 `nav` 커스텀 이벤트 발생 */
  document.addEventListener("nav", reset)

  load()        // 최초 1회
})()
