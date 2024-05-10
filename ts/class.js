"use strict";
class Dom {
    createElement(el) {
        return document.createElement(el);
    }
    setText(el, text) {
        el.textContent = text;
    }
    render(vnode) {
        let root = this.createElement(vnode.tag);
        if (vnode.children && Array.isArray(vnode.children)) {
            vnode.children.forEach(child => {
                let childRoot = this.render(child);
                root.appendChild(childRoot);
            });
        }
        else {
            this.setText(root, vnode.text);
        }
        return root;
    }
}
class Vue extends Dom {
    constructor(options) {
        super();
        this.options = options;
        this.init();
    }
    init() {
        let data = {
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
        };
        let app = typeof this.options.el === 'string' ? document.querySelector(this.options.el) : this.options.el;
        app.appendChild(this.render(data));
    }
}
new Vue({ el: '#app' });
