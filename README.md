# js-scroll-animator
Allows you to animate HTML objects via scrolling. Powered by GSAP.

## Installation

Use npm to install js-scroll-animator.

```
npm install js-scroll-animator --save
```

## Usage

```
import { jsScrollAnimator } from 'js-scroll-animator';

jsScrollAnimator(".my-element", {
  scrub: 0.3,
  animate: {
    x: 250 // slide your element to right
  }
});
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
