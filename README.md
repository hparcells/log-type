# log-type
> A simple logger for different types of log messages.

## Usage
```js
import { log, server, game, error, warn, debug } from 'log-type';

log('[Prefix]', 'red', 'Log Message');
server('Log message.');
game('Log message.');
error('Log message.');
warn('Log message.');
debug('Log message.');
```

Outputs:

![output](./img/output.png);

When using the `log()` function, the color parameter takes a color string from the choices from [Chalk Colors](https://github.com/chalk/chalk/blob/master/readme.md#colors).