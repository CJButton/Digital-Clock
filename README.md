# Digital Clock

Digital Clock Display with options for 12/24 hour clock in three colors. Has a soft glow affect as well.

Written in TypeScript with Sass.

![Cyan-Digital-Clock](https://res.cloudinary.com/ddbfkqb9m/image/upload/v1590576786/screenshot-192.168.11.7_3000-2020.05.27-19_52_09_ycolh1.png)

### Example Usage

Default settings are a 24-style clock in cyan.
```
<DigitalClock />
```

But we can pass props like so:
```
<DigitalClock style="12" color="green">
```

### Options

Prop | Values | Type | Default
------------ | ------------- | ------------- | -------------
Type | "12" / "24" | string | "24"
Color | "cyan" / "red" / "green" | string | "cyan"
