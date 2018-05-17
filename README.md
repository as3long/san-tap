## san-tap

Support tap event in your [san](https://github.com/baidu/san/) project.

---

## Install

``` js
npm install san-tap
```

## Usage

```js
const san = require('san');
const sanTap = require('san-tap');

const MyApp = san.defineComponent({
    template: `
    <div>
        <san-tap on-tap="tapHandler">
            <button>tap事件</button>
        </san-tap>
    </div>`,
    components: {
        'san-tap': sanTap,
    },
    initData() {
        return {
        };
    },
    tapHandler() {
        console.log('tap事件触发');
    }
});

const myApp = new MyApp();
myApp.attach(document.body);
```

# License
This content is released under the [MIT](http://opensource.org/licenses/MIT) License.