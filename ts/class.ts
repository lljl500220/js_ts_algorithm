interface Options {
    el: string | HTMLElement
}

interface VueCls {
    options: Options
    init():void
}

interface VNode {
    tag: string
    text?: string
    children?: VNode[]
}

class Dom {
    createElement(el:string):HTMLElement {
        return document.createElement(el)
    }
    setText(el:HTMLElement, text:string | null) {
        el.textContent = text
    }
    render(vnode:VNode) {
        let root = this.createElement(vnode.tag)
        if(vnode.children && Array.isArray(vnode.children)) {
            vnode.children.forEach(child => {
                let childRoot = this.render(child)
                root.appendChild(childRoot)
            })
        }else {
            this.setText(root, vnode.text)
        }
        return root
    }
}

class Vue extends Dom implements VueCls{
    options: Options

    constructor(options:Options) {
        super()
        this.options = options
        this.init()
    }

    init() {
        let data:VNode = {
            tag: 'div',
            children: [
                {
                    tag: 'p',
                    text: 'hello'
                },
                {
                    tag: 'p',
                    text: 'world'
                }
            ]
        }
        let app = typeof this.options.el === 'string' ? document.querySelector(this.options.el) : this.options.el
        app.appendChild(this.render(data))
    }
}

new Vue({el: '#app'})
