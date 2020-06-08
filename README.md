# Digital Clock

Digital Clock Display with options for 12/24 hour clock in three colors. Has a soft glow affect as well.

Written in TypeScript with Sass.

![Cyan-Digital-Clock](https://res.cloudinary.com/ddbfkqb9m/image/upload/v1590576786/screenshot-192.168.11.7_3000-2020.05.27-19_52_09_ycolh1.png)

## Install

```bash
npm install --save @cjbutton/digital-clock
```

## License

MIT © [CJButton](https://github.com/CJButton)


### Example Usage


```tsx

import DigitalClock from '@cjbutton/digital-clock'
import '@cjbutton/digital-clock/dist/index.scss'

class Example extends Component {
  render() {
    return <DigitalClock />
  }
}
```

We can pass props like so:
```
<DigitalClock style="12" color="green">
```

### Options

Prop | Values | Type | Default
------------ | ------------- | ------------- | -------------
Type | "12" / "24" | string | "24"
Color | "cyan" / "red" / "green" | string | "cyan"
