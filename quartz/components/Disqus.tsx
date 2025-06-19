import { QuartzComponentConstructor } from "./types"

export default (() => {
  return () => (
    <>
      <div id="disqus_thread" style={{ marginTop: "4rem" }}></div>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            var disqus_config = function () {
              this.page.url = window.location.href;
              this.page.identifier = window.location.pathname;
            };

            (function() {
              var d = document, s = d.createElement('script');
              s.src = 'https://parkjaehan.disqus.com/embed.js';
              s.setAttribute('data-timestamp', +new Date());
              (d.head || d.body).appendChild(s);
            })();
          `,
        }}
      />
    </>
  )
}) satisfies QuartzComponentConstructor
