import { FunctionalComponent, h } from "preact"
import { useEffect } from "preact/hooks"

const Disqus: FunctionalComponent = () => {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://parkjaehan.disqus.com/embed.js"
    script.setAttribute("data-timestamp", `${+new Date()}`)
    script.async = true
    document.body.appendChild(script)
  }, [])

  return <div id="disqus_thread" style={{ marginTop: "4rem" }} />
}

export default Disqus
