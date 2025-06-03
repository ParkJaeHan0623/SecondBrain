import { FunctionalComponent, h } from "preact"

const Giscus: FunctionalComponent = () => (
  <div style={{ marginTop: "3rem" }}>
    <script
      src="https://giscus.app/client.js"
      data-repo="ParkJaeHan0623/SecondBrain"
      data-repo-id="R_kgDOO1H0sg"
      data-category-id="DIC_kwDOO1H0ss4Cq-O6"
      data-mapping="pathname"
      data-strict="0"
      data-reactions-enabled="1"
      data-emit-metadata="0"
      data-input-position="bottom"
      data-theme="preferred_color_scheme"
      data-lang="ko"
      crossOrigin="anonymous"
      async
    ></script>
  </div>
)

export default Giscus
