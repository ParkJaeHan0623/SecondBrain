import { QuartzComponentConstructor } from "../components/types"
import { h } from "preact"

/**
 * 페이지 하단에 빈 댓글 박스만 만들어 둠.
 * 실제 스크립트 로딩 / reset은 static/disqusLoader.js 가 담당
 */
export const DisqusDiv: QuartzComponentConstructor = () => {
  return () => <div id="disqus_thread" style={{ marginTop: "4rem" }} />
}

export default DisqusDiv
