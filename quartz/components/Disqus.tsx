import { FunctionalComponent, h } from "preact"

const Disqus: FunctionalComponent = () => (
  <div style={{ marginTop: "4rem" }}>
    <div id="disqus_thread"></div>
    <script
      dangerouslySetInnerHTML={{
        __html: `
          var disqus_config = function () {
            this.page.url        = window.location.href;
            this.page.identifier = window.location.pathname;
          };
          (function () {
            var d = document, s = d.createElement('script');
            s.src = 'https://parkjaehan.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
          })();
        `,
      }}
    />
    <noscript>Please enable JavaScript to view comments powered by Disqus.</noscript>
  </div>
)

export default Disqus
