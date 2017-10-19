# emoji-js
Function for parsing emoji and replacing them with pictures. One type emoji for all devices, without jQuery, pure js. 

[demo](https://julia-lavrova.github.io/emoji-js/demo/index.html)

# Example

```
const text = '😍,🍕,👉,👿 ,💖';

parseEmoji(text);
```

output:
```
<img class="emoji" alt="😍" src="./apple40/1f60d.png" />,
<img class="emoji" alt="🍕" src="./apple40/1f355.png" />,
<img class="emoji" alt="👉" src="./apple40/1f449.png" />,
<img class="emoji" alt="👿" src="./apple40/1f47f.png" />,
<img class="emoji" alt="💖" src="./apple40/1f496.png" />
```

All info about emoji https://emojipedia.org

# License

Copyright (c) by [Rodrigo Polo](http://RodrigoPolo.com), in [github](https://github.com/rodrigopolo/jqueryemoji)
Licensed under MIT
