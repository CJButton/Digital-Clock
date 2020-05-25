# Digital Clock

Digital Clock Display with options for 12/24 hour clock and three colors.

![Cyan-Digital-Clock](https://res.cloudinary.com/ddbfkqb9m/image/upload/v1590402552/digital-clock_tuzjkx.png)

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

Prop Name | Values | Prop Type | Defaults
------------ | ------------- | ------------- | -------------
Type | "12" / "24" | string | "24"
Color | "cyan" / "red" / "green" | string | "cyan"
