export const noExtra = str => str.replace(/\ufe0f|\u200d/gm, '');

export const toSurrogatePairs = (emojiItem) => {
  const parsePairs = emojiItem
    .split('')
    .reduce((accumulator, currentValue) => (
      `${accumulator}\\u${(`000${currentValue.charCodeAt(0).toString(16)}`).substr(-4)}`
    ), '');

  return parsePairs;
};

export const toCodePoint = (t) => {
  const n = [];
  let r = 0;
  let o = 0;
  for (let h = 0; h < t.length; h += 1) {
    r = t.charCodeAt(h);
    if (o) {
      n.push((65536 + (o - 55296 << 10) + (r - 56320)).toString(16)); // eslint-disable-line no-bitwise, max-len
      o = 0;
    } else if (r >= 55296 && r <= 56319) {
      o = r;
    } else {
      n.push(r.toString(16));
    }
  }
  return n.join('-');
};

export const parseEmoji = (txt, options = {}) => {
  const params = {
    class: 'emoji',
    alt: true,
    path: '..',
    ...options,
  };
  const emojis = '🖤,🥂,🦅,🦎,🤣,🥀,🤙🏿,🤙🏾,🤙🏽,🤙🏼,🤙🏻,🤙,🤵🏿,🤵🏾,🤵🏽,🤵🏼,🤵,🥃,⚜,🤦🏿♀️,🤦🏾♀️,🤦🏽‍♀️,🤦🏼♀️,🤦♀️,🦐,🦑,🤤,🦋,👩‍❤️‍💋‍👩,👩‍👩‍👧‍👧,👩‍👩‍👧‍👦,👩‍👩‍👦‍👦,👨‍❤️‍💋‍👨,👨‍👩‍👧‍👧,👨‍👩‍👧‍👦,👨‍👩‍👦‍👦,👨‍👨‍👧‍👧,👨‍👨‍👧‍👦,👨‍👨‍👦‍👦,👩‍❤️‍👩,👩‍👩‍👧,👩‍👩‍👦,👩‍👧‍👧,👩‍👧‍👦,👩‍👦‍👦,👨‍❤️‍👨,👨‍👩‍👧,👨‍👨‍👧,👨‍👨‍👦,👨‍👧‍👧,👨‍👧‍👦,👨‍👦‍👦,👩‍👧,👩‍👦,👨‍👧,👨‍👦,😂,❤️,♥️,😍,😭,😊,😒,😘,💕,☺️,😩,👌🏿,👌🏾,👌🏽,👌🏼,👌🏻,👌,😔,😏,😁,♻️,😉,👍🏿,👍🏾,👍🏽,👍🏼,👍🏻,👍,🙏🏿,🙏🏾,🙏🏽,🙏🏼,🙏🏻,🙏,😌,🎶,😳,🙌🏿,🙌🏾,🙌🏽,🙌🏼,🙌🏻,🙌,🙈,😢,😎,✌🏿,✌🏾,✌🏽,✌🏼,✌🏻,✌️,👀,😅,✨,😴,😄,💜,💔,💯,😑,💖,💙,😕,💁🏿‍♂️,💁🏾‍♂️,💁🏽‍♂️,💁🏼‍♂️,💁🏻‍♂️,💁‍♂️,💁🏿,💁🏾,💁🏽,💁🏼,💁🏻,💁,😜,😞,😋,😐,😪,👏🏿,👏🏾,👏🏽,👏🏼,👏🏻,👏,💘,💗,💞,⬅️,🙊,✋🏿,✋🏾,✋🏽,✋🏼,✋🏻,✋,💋,👉🏿,👉🏾,👉🏽,👉🏼,👉🏻,👉,🌸,😱,😈,🔥,😡,😃,🎉,👊🏿,👊🏾,👊🏽,👊🏼,👊🏻,👊,😫,📷,🌹,😝,💪🏿,💪🏾,💪🏽,💪🏼,💪🏻,💪,💀,☀️,💛,😤,🌚,😆,😓,👈🏿,👈🏾,👈🏽,👈🏼,👈🏻,👈,✔️,😻,😀,😷,💚,👋🏿,👋🏾,👋🏽,👋🏼,👋🏻,👋,😣,💓,▶️,👑,😚,😛,😥,😇,🎧,✅,😖,➡️,😠,😬,🌟,🔫,🙋🏿‍♂️,🙋🏾‍♂️,🙋🏽‍♂️,🙋🏼‍♂️,🙋🏻‍♂️,🙋‍♂️,🙋🏿,🙋🏾,🙋🏽,🙋🏼,🙋🏻,🙋,👎🏿,👎🏾,👎🏽,👎🏼,👎🏻,👎,1️⃣,💃🏿,💃🏾,💃🏽,💃🏼,💃🏻,💃,🎵,😶,2️⃣,💫,✊🏿,✊🏾,✊🏽,✊🏼,✊🏻,✊,👇🏿,👇🏾,👇🏽,👇🏼,👇🏻,👇,🔴,🙅🏿‍♂️,🙅🏾‍♂️,🙅🏽‍♂️,🙅🏼‍♂️,🙅🏻‍♂️,🙅‍♂️,🙅🏿,🙅🏾,🙅🏽,🙅🏼,🙅🏻,🙅,💥,↪️,↩️,©️,💭,👅,💩,😰,💎,🙆🏿‍♂️,🙆🏾‍♂️,🙆🏽‍♂️,🙆🏼‍♂️,🙆🏻‍♂️,🙆‍♂️,🙆🏿,🙆🏾,🙆🏽,🙆🏼,🙆🏻,🙆,🍕,😹,🌞,🍃,💦,🐧,💤,🚶🏿‍♀️,🚶🏾‍♀️,🚶🏽‍♀️,🚶🏼‍♀️,🚶🏻‍♀️,🚶‍♀️,🚶🏿,🚶🏾,🚶🏽,🚶🏼,🚶🏻,🚶,✈️,🎈,⭐️,🎀,☑️,😟,🔞,😨,🍀,🌺,🎤,👐🏿,👐🏾,👐🏽,👐🏼,👐🏻,👐,👻,◀️,🌴,‼️,💅🏿,💅🏾,💅🏽,💅🏼,💅🏻,💅,❌,👽,🙇🏿‍♀️,🙇🏾‍♀️,🙇🏽‍♀️,🙇🏼‍♀️,🙇🏻‍♀️,🙇‍♀️,🙇🏿,🙇🏾,🙇🏽,🙇🏼,🙇🏻,🙇,☁️,⚽️,👼🏿,👼🏾,👼🏽,👼🏼,👼🏻,👼,👯‍♂️,👯,❗️,❄️,☝🏿,☝🏾,☝🏽,☝🏼,☝🏻,☝️,☝,😙,🌈,🌙,💟,💝,🎁,🍻,😧,🌍,🎥,⚓️,⚡️,♣️,✖️,🏃🏿‍♀️,🏃🏾‍♀️,🏃🏽‍♀️,🏃🏼‍♀️,🏃🏻‍♀️,🏃‍♀️,🏃🏿,🏃🏾,🏃🏽,🏃🏼,🏃🏻,🏃,🌻,🌎,💐,🐶,💰,🌿,👫,🍂,🌷,🎂,🐱,☕️,😵,👆🏿,👆🏾,👆🏽,👆🏼,👆🏻,👆,😮,😯,🏀,🎄,💍,🌝,😲,👭,💸,💏,😿,🙉,💨,🌵,♨️,☎️,🍁,👸🏿,👸🏾,👸🏽,👸🏼,👸🏻,👸,💆🏿‍♂️,💆🏾‍♂️,💆🏽‍♂️,💆🏼‍♂️,💆🏻‍♂️,💆‍♂️,💆🏿,💆🏾,💆🏽,💆🏼,💆🏻,💆,💌,🏆,🙍🏿‍♂️,🙍🏾‍♂️,🙍🏽‍♂️,🙍🏼‍♂️,🙍🏻‍♂️,🙍‍♂️,🙍🏿,🙍🏾,🙍🏽,🙍🏼,🙍🏻,🙍,🇺🇸,🎊,🌼,🔪,👄,🍟,🍩,😦,🌊,💣,🆗,🌀,🚀,☔️,💑,🍭,🎬,🐷,👿,🐝,😽,💢,🎼,🎅🏿,🎅🏾,🎅🏽,🎅🏼,🎅🏻,🎅,🌏,🏈,🎸,♦️,🐼,💬,🍓,😼,🍌,🍉,⛄️,😸,♠️,🔝,🍆,🔮,🍴,📲,📱,⛅️,⚠️,🙀,🔸,👶🏿,👶🏾,👶🏽,👶🏼,👶🏻,👶,🐾,👣,🍺,🍷,⭕️,📹,🐰,🍹,🚬,👾,🍑,🐍,🐢,🍒,😗,🐸,🌌,🚨,🐣,📕,🍬,🍔,🐻,🐯,🚗,⏩,🍦,🍍,🌾,💉,🚮,🍫,▪️,📺,💊,🐙,🎃,🍇,😺,💿,🍸,🍰,🎮,™️,⬇️,🚫,💄,🐳,📝,®️,🍪,🐬,⚙,♥,❤,🔊,👨🏿,👨🏾,👨🏽,👨🏼,👨🏻,👨,🐥,🐒,3️⃣,📚,👹,💂🏿‍♀️,💂🏾‍♀️,💂🏽‍♀️,💂🏼‍♀️,💂🏻‍♀️,💂‍♀️,💂🏿,💂🏾,💂🏽,💂🏼,💂🏻,💂,📢,✂️,👧🏿,👧🏾,👧🏽,👧🏼,👧🏻,👧,🎓,🇫🇷,⚾️,🚦,👩🏿,👩🏾,👩🏽,👩🏼,👩🏻,👩,🎆,🌠,🆘,🍄,😾,🛅,👠,🎯,🏊🏿‍♀️,🏊🏾‍♀️,🏊🏽‍♀️,🏊🏼‍♀️,🏊🏻‍♀️,🏊‍♀️,🏊🏿,🏊🏾,🏊🏽,🏊🏼,🏊🏻,🏊,🔑,👙,👪,✏️,🐘,💧,🌱,🍎,🆒,📞,💵,🏡,📖,💇🏿‍♂️,💇🏾‍♂️,💇🏽‍♂️,💇🏼‍♂️,💇🏻‍♂️,💇‍♂️,💇🏿,💇🏾,💇🏽,💇🏼,💇🏻,💇,💻,💡,❓,🔙,👦🏿,👦🏾,👦🏽,👦🏼,👦🏻,👦,🔐,🙎🏿‍♂️,🙎🏾‍♂️,🙎🏽‍♂️,🙎🏼‍♂️,🙎🏻‍♂️,🙎‍♂️,🙎🏿,🙎🏾,🙎🏽,🙎🏼,🙎🏻,🙎,🍊,↔️,🌅,🍗,🔵,🚘,🍧,🇮🇹,🐦,4️⃣,🇬🇧,🌛,👓,🐐,🌃,👵🏿,👵🏾,👵🏽,👵🏼,👵🏻,👵,⚫️,🌑,👬,⚪️,🛃,🐠,🏠,🔃,🌜,📍,🌕,👟,🍋,🍼,🎨,✉️,🍝,↘️,5️⃣,🎐,🍥,↗️,🌲,🆙,⬆️,🎭,👃🏿,👃🏾,👃🏽,👃🏼,👃🏻,👃,🐽,🐟,👳🏿‍♀️,👳🏾‍♀️,👳🏽‍♀️,👳🏼‍♀️,👳🏻‍♀️,👳‍♀️,👳🏿,👳🏾,👳🏽,👳🏼,👳🏻,👳,🐨,👂🏿,👂🏾,👂🏽,👂🏼,👂🏻,👂,✳️,🔹,🚿,↙️,🐛,🍜,🎩,👰🏿,👰🏾,👰🏽,👰🏼,👰🏻,👰,⛽️,🏁,🐴,⌚️,🐵,🚼,🆕,🆓,🎇,🌽,🎾,⏰,🔋,❕,🐺,🗿,🐮,📣,👴🏿,👴🏾,👴🏽,👴🏼,👴🏻,👴,👗,🔗,🐔,🍳,🐋,↖️,🌳,🍱,📌,🔜,🔁,🐉,🐹,⛳️,🏄🏿‍♀️,🏄🏾‍♀️,🏄🏽‍♀️,🏄🏼‍♀️,🏄🏻‍♀️,🏄‍♀️,🏄🏿,🏄🏾,🏄🏽,🏄🏼,🏄🏻,🏄,🐭,🌒,🚙,🅰️,⁉️,🈹,🔌,🌓,♋️,🔱,🍞,👮🏿‍♀️,👮🏾‍♀️,👮🏽‍♀️,👮🏼‍♀️,👮🏻‍♀️,👮‍♀️,👮🏿,👮🏾,👮🏽,👮🏼,👮🏻,👮,🍵,🎣,🌔,🚲,👤,🍚,📻,🐤,⤵️,🌘,↕️,🇪🇸,🌗,🔘,0️⃣,🐑,👱🏿‍♀️,👱🏾‍♀️,👱🏽‍♀️,👱🏼‍♀️,👱🏻‍♀️,👱‍♀️,👱🏿,👱🏾,👱🏽,👱🏼,👱🏻,👱,🌖,🔒,🍏,👺,➰,🚩,🔄,🐎,🍤,🌄,🌋,🐓,📥,💒,🍣,〰️,🍨,⏪,🍅,🐇,✴️,🔺,🔆,➕,👲🏿,👲🏾,👲🏽,👲🏼,👲🏻,👲,🏪,👥,🐞,🔻,🇩🇪,⤴️,📛,🛀🏿,🛀🏾,🛀🏽,🛀🏼,🛀🏻,🛀,⛔️,🐊,🌰,🐕,🐈,🔨,🍖,🐚,❇️,⛵️,6️⃣,🅱️,Ⓜ️,🐩,♒️,🍲,👖,🍯,🎹,🔓,✒️,🗽,💲,🏂,💮,👔,💠,♈️,🚺,🐜,♏️,🌇,⏳,🅾️,🐲,7️⃣,🐌,📀,👕,🎲,➖,🎎,♐️,🎱,🚌,🍮,🎌,〽️,🐫,🍛,🚂,🏥,🇯🇵,🔷,🎋,🔔,♌️,♊️,🍐,🔶,♉️,🌐,🚪,🕕,🚔,📩,🌂,🎷,⛪️,🚴🏿‍♀️,🚴🏾‍♀️,🚴🏽‍♀️,🚴🏼‍♀️,🚴🏻‍♀️,🚴‍♀️,🚴🏿,🚴🏾,🚴🏽,🚴🏼,🚴🏻,🚴,♓️,🍡,♑️,🏢,🚣🏿‍♀️,🚣🏾‍♀️,🚣🏽‍♀️,🚣🏼‍♀️,🚣🏻‍♀️,🚣‍♀️,🚣🏿,🚣🏾,🚣🏽,🚣🏼,🚣🏻,🚣,👒,👞,🏩,🗻,🐪,👜,⌛️,❎,🎺,🏫,🐄,🌆,👷🏿‍♀️,👷🏾‍♀️,👷🏽‍♀️,👷🏼‍♀️,👷🏻‍♀️,👷‍♀️,👷🏿,👷🏾,👷🏽,👷🏼,👷🏻,👷,🚽,🐖,❔,🔰,🎻,🔛,💳,🆔,㊙️,🎡,🎳,♎️,♍️,💈,👛,🎢,🐀,📅,🏉,🐏,🔼,🔲,📴,🗼,㊗️,👘,🇷🇺,🚢,🔎,🔍,🚒,🕦,🚓,🃏,🌉,📦,🚖,📆,🏇,🐅,8️⃣,👢,🚑,9️⃣,🔳,🐗,🎒,➿,💷,ℹ,🐂,🍙,🆚,🔚,🅿️,👡,⛺️,💺,🚕,◾️,💼,📰,🎪,🔯,🚹,🏰,🔦,🌁,⏫,🎍,🎫,🚁,💽,🚍,🍈,▫️,🏤,🔟,📓,🔕,🍢,🎏,🎠,🐡,📈,🍠,🎿,🕛,📶,🚧,#️⃣,◼️,📡,💶,👚,📒,🐆,🔅,🕒,🏬,🚚,🍶,🚃,🚤,🇰🇷,📼,🕐,⏬,🐃,🔽,💴,🔇,🎽,⬜️,♿️,🕑,📎,🏧,🎦,🔭,🎑,📘,◻️,📮,📧,🐁,🚄,🉐,🔩,🆖,🏨,🚾,🏮,🔂,📬,📉,📗,🚜,⛲️,🚇,📋,📵,🕓,🚭,⬛️,🎰,🕔,🛁,📜,🚉,🍘,🏦,🔧,🈯️,🚛,📄,⛎,📊,🚷,🇨🇳,📳,🕙,🕘,🚅,🚐,🚊,🕗,🈳,🚥,🚵🏿‍♀️,🚵🏾‍♀️,🚵🏽‍♀️,🚵🏼‍♀️,🚵🏻‍♀️,🚵‍♀️,🚵🏿,🚵🏾,🚵🏽,🚵🏼,🚵🏻,🚵,🔬,🏯,🔖,📑,👝,🆎,📃,🎴,🕚,📠,🕖,◽️,💱,🔉,💹,🆑,💾,🏣,🔈,🗾,🈺,🀄️,📨,📙,🚻,🈚️,🈶,📐,🚋,🈸,🚎,🈷️,🔢,📔,🈲,🈵,📯,🏭,🚸,🚆,📏,📟,🉑,🈴,🔏,🕜,🈂️,📤,🔀,📫,🚈,🕤,🚏,📂,📁,🚰,📇,🕝,🚝,🕧,🕥,🔤,📪,🕟,🚞,🚯,🕞,➗,🕢,🕠,🔠,📭,🔣,🚡,🕣,🕡,🔡,🚠,🈁,🛂,🚱,🚟,🛄,🚳,🏳️‍🌈,🕵🏿‍♀️,🕵🏾‍♀️,🕵🏽‍♀️,🕵🏼‍♀️,🕵🏻‍♀️,🕵️‍♀️,🕵🏿,🕵🏾,🕵🏽,🕵🏼,🕵🏻,☹️,☠️,🤗,🤖,🤕,🤔,🤓,🤒,🤑,🤐,🙄,🙃,🙂,🙁,🕵,🤘🏿,🤘🏾,🤘🏽,🤘🏼,🤘🏻,🖖🏿,🖖🏾,🖖🏽,🖖🏼,🖖🏻,🖕🏿,🖕🏾,🖕🏽,🖕🏼,🖕🏻,🖐🏿,🖐🏾,🖐🏽,🖐🏼,🖐🏻,✍🏿,✍🏾,✍🏽,✍🏼,✍🏻,🤘,✍️,🖖,🖕,🖐,🕶,👁‍🗨,👁,🏋🏿‍♀️,🏋🏾‍♀️,🏋🏽‍♀️,🏋🏼‍♀️,🏋🏻‍♀️,⛹🏿‍♀️,⛹🏾‍♀️,⛹🏽‍♀️,⛹🏼‍♀️,⛹🏻‍♀️,🏌️‍♀️,🏋️‍♀️,⛹️‍♀️,🏋🏿,🏋🏾,🏋🏽,🏋🏼,🏋🏻,⛹🏿,⛹🏾,⛹🏽,⛹🏼,⛹🏻,🕴,🏌,🏋,*️⃣,❣️,✡️,✝️,⚜️,⚛️,☸️,☯️,☮️,☪️,☦️,☣️,☢️,🛐,🗯,🕎,🕉,⚱️,⚰️,⚙️,⚗️,⚖️,⚔️,⌨️,🛢,🛡,🛠,🛏,🛎,🛍,🛌,🛋,🗳,🗡,🗞,🗝,🗜,🗓,🗒,🗑,🗄,🗃,🗂,🖼,🖲,🖱,🖨,🖥,🖍,🖌,🖋,🖊,🖇,🕹,🕳,🕰,🕯,📿,📽,📸,🏺,🏷,🏴,🏳,🎞,🎛,🎚,🎙,🌡,🛳,🛰,🛬,🛫,🛩,🛥,🛤,🛣,🗺,🕍,🕌,🕋,🏟,🏞,🏝,🏜,🏛,🏚,🏙,🏘,🏗,🏖,🏕,🏔,🏎,🏍,🏹,🏸,🏵,🏓,🏒,🏑,🏐,🏏,🏅,🎟,🎗,🎖,🧀,🍿,🍾,🍽,🌶,🌯,🌮,🌭,☘️,☄️,☃️,☂️,🦄,🦃,🦂,🦁,🦀,🕸,🕷,🕊,🐿,🌬,🌫,🌪,🌩,🌨,🌧,🌦,🌥,🌤,🗣,⏺,⏹,⏸,⏯,⏮,⏭,⛱,⛓,⛏,⚒,⏲,⏱,⛴,⛰,⛩,⛹,⛸,⛷,⛈,⛑,🇿🇼,🇿🇲,🇿🇦,🇾🇹,🇾🇪,🇽🇰,🇼🇸,🇼🇫,🇻🇺,🇻🇳,🇻🇮,🇻🇬,🇻🇪,🇻🇨,🇻🇦,🇺🇿,🇺🇾,🇺🇬,🇺🇦,🇹🇿,🇹🇼,🇹🇻,🇹🇹,🇹🇷,🇹🇴,🇹🇳,🇹🇲,🇹🇱,🇹🇰,🇹🇯,🇹🇭,🇹🇬,🇹🇫,🇹🇩,🇹🇨,🇸🇿,🇸🇾,🇸🇽,🇸🇻,🇸🇹,🇸🇸,🇸🇷,🇸🇴,🇸🇳,🇸🇲,🇸🇱,🇸🇰,🇸🇮,🇸🇭,🇸🇬,🇸🇪,🇸🇩,🇸🇨,🇸🇧,🇸🇦,🇷🇼,🇷🇸,🇷🇴,🇷🇪,🇶🇦,🇵🇾,🇵🇼,🇵🇹,🇵🇸,🇵🇷,🇵🇳,🇵🇲,🇵🇱,🇵🇰,🇵🇭,🇵🇬,🇵🇫,🇵🇪,🇵🇦,🇴🇲,🇳🇿,🇳🇺,🇳🇷,🇳🇵,🇳🇴,🇳🇱,🇳🇮,🇳🇬,🇳🇫,🇳🇪,🇳🇨,🇳🇦,🇲🇿,🇲🇾,🇲🇽,🇲🇼,🇲🇻,🇲🇺,🇲🇹,🇲🇸,🇲🇷,🇲🇶,🇲🇵,🇲🇴,🇲🇳,🇲🇲,🇲🇱,🇲🇰,🇲🇭,🇲🇬,🇲🇪,🇲🇩,🇲🇨,🇲🇦,🇱🇾,🇱🇻,🇱🇺,🇱🇹,🇱🇸,🇱🇷,🇱🇰,🇱🇮,🇱🇨,🇱🇧,🇱🇦,🇰🇿,🇰🇾,🇰🇼,🇰🇵,🇰🇳,🇰🇲,🇰🇮,🇰🇭,🇰🇬,🇰🇪,🇯🇴,🇯🇲,🇯🇪,🇮🇸,🇮🇷,🇮🇶,🇮🇴,🇮🇳,🇮🇲,🇮🇱,🇮🇪,🇮🇩,🇮🇨,🇭🇺,🇭🇹,🇭🇷,🇭🇳,🇭🇰,🇬🇾,🇬🇼,🇬🇺,🇬🇹,🇬🇸,🇬🇷,🇬🇶,🇬🇵,🇬🇳,🇬🇲,🇬🇱,🇬🇮,🇬🇭,🇬🇬,🇬🇫,🇬🇪,🇬🇩,🇬🇦,🇫🇴,🇫🇲,🇫🇰,🇫🇯,🇫🇮,🇪🇺,🇪🇹,🇪🇷,🇪🇭,🇪🇬,🇪🇪,🇪🇨,🇩🇿,🇩🇴,🇩🇲,🇩🇰,🇩🇯,🇨🇿,🇨🇾,🇨🇽,🇨🇼,🇨🇻,🇨🇺,🇨🇷,🇨🇴,🇨🇲,🇨🇱,🇨🇰,🇨🇮,🇨🇭,🇨🇬,🇨🇫,🇨🇩,🇨🇨,🇨🇦,🇧🇿,🇧🇾,🇧🇼,🇧🇹,🇧🇸,🇧🇷,🇧🇶,🇧🇴,🇧🇳,🇧🇲,🇧🇱,🇧🇯,🇧🇮,🇧🇭,🇧🇬,🇧🇫,🇧🇪,🇧🇩,🇧🇧,🇧🇦,🇦🇿,🇦🇽,🇦🇼,🇦🇺,🇦🇹,🇦🇸,🇦🇷,🇦🇶,🇦🇴,🇦🇲,🇦🇱,🇦🇮,🇦🇬,🇦🇫,🇦🇪,🇦🇩'.split(',');
  const regxArr = emojis.map(currentValue => toSurrogatePairs(currentValue));

  const re = new RegExp(`(${regxArr.join('|')})`, 'g');

  return txt.replace(re, (match, p1) => `<img class="${params.class}" alt="${params.alt ? p1 : ''}" src="${params.path}/apple40/${toCodePoint(noExtra(p1))}.png" />`);
};
