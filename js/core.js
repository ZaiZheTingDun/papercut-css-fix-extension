const html = document.querySelector('html')

const handler = () => {
    const iframe = document.querySelector('iframe#preview-html')
    if (iframe) {
        const cssNode = iframe.contentDocument.querySelector('div[type="text/css"]')
        if (cssNode) {
            const newNode = document.createElement('style')
            newNode.innerHTML = cssNode.innerHTML
            cssNode.parentNode.replaceChild(newNode, cssNode)
        }
    }
}

if (html.attributes['ng-app'] && html.attributes['ng-app'].value === 'papercutApp') {
    setInterval(handler, 1000)
}
