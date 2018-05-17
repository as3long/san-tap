const san = require('san');

module.exports = san.defineComponent({
    template: `
    <template on-touchstart="touchStartHandler" on-touchend="touchEndHandler">
        <slot>
        </slot>
    </template>
    `,
    initData() {
        return {
            x: null,
            y: null,
            scrollTop: null
        };
    },
    touchStartHandler(evt) {
        this.data.set('x', evt.touches[0].pageX);
        this.data.set('y', evt.touches[0].pageY);
        this.data.set('scrollTop', document.body.scrollTop);
    },
    touchEndHandler(evt) {
        const x = this.data.get('x');
        const y = this.data.get('y');
        const scrollTop = this.data.get('scrollTop');
        if (Math.abs(evt.changedTouches[0].pageX - x) < 30 && Math.abs(evt.changedTouches[0].pageY - y) < 30 && Math.abs(document.body.scrollTop - scrollTop) < 30) {
            this.fire('tap', evt);
        }
    }
});
