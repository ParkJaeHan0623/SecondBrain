export const DisqusInject = () => {
  return {
    name: "DisqusInject",
    emit(ctx: any) {
      const html = ctx.fileData.text

      const disqusScript = `
        <div id="disqus_thread" style="margin-top: 4rem;"></div>
        <script>
          var disqus_config = function () {
            this.page.url = window.location.href;
            this.page.identifier = window.location.pathname;
          };
          (function() {
            var d = document, s = d.createElement('script');
            s.src = 'https://parkjaehan.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            s.async = true;
            (d.head || d.body).appendChild(s);
          })();
        </script>
        <noscript>댓글을 보려면 JavaScript를 활성화해야 합니다.</noscript>
      `

      return {
        ...ctx.fileData,
        text: html.replace("</article>", `${disqusScript}</article>`),
      }
    },
  }
}
