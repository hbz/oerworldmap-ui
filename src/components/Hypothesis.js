/* global document */
import { useEffect } from 'react'

const Hypothesis = () => {
  useEffect(() => {
    // Add hypothesis config
    const scriptConfig = document.createElement('script')
    scriptConfig.type = 'application/json'
    scriptConfig.classList.add('js-hypothesis-config')
    scriptConfig.innerHTML = JSON.stringify({
      openSidebar: true,
    })
    document.head.appendChild(scriptConfig)

    // Import hypothesis
    const script = document.createElement('script')
    script.src = 'https://hypothes.is/embed.js'
    document.head.appendChild(script)

    // Set height for iframe
    const iframe = document.querySelector('iframe')
    if (iframe) {
      iframe.style.height = `${iframe.contentDocument.body.scrollHeight + 50}px`
    }
  }, [])
  return null
}

export default Hypothesis
