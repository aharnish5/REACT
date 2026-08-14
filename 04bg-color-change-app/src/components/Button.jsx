import '../App.css';

function Button({ color = 'gray', onSelect }) {
    const textColor = getTextColor(namedColorHex[color]);
    return (
    <button
        type="button"
        onClick={() => onSelect?.(color)}
        style={{ backgroundColor: namedColorHex[color] || color, color: textColor }}
        className="rounded-full px-6 py-3 text-base font-semibold shadow-sm"
    >
        {color.toUpperCase()}
    </button>
    );
}

function getTextColor(bgColor) {
  // Expects a hex color like "#ff0000" or "#f00"
  let hex = bgColor.replace('#', '');
  if (hex.length === 3) hex = hex.split('').map((c) => c + c).join('');

  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  // WCAG relative luminance formula
  const toLinear = (c) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
  const luminance = 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);

  return luminance > 0.5 ? '#000000' : '#ffffff';
}
const namedColorHex = {
  // Reds/Pinks
  indianred: '#CD5C5C',
  lightcoral: '#F08080',
  salmon: '#FA8072',
  darksalmon: '#E9967A',
  lightsalmon: '#FFA07A',
  crimson: '#DC143C',
  red: '#FF0000',
  firebrick: '#B22222',
  darkred: '#8B0000',
  pink: '#FFC0CB',
  lightpink: '#FFB6C1',
  hotpink: '#FF69B4',
  deeppink: '#FF1493',
  mediumvioletred: '#C71585',
  palevioletred: '#DB7093',

  // Oranges
  coral: '#FF7F50',
  tomato: '#FF6347',
  orangered: '#FF4500',
  darkorange: '#FF8C00',
  orange: '#FFA500',

  // Yellows
  gold: '#FFD700',
  yellow: '#FFFF00',
  lightyellow: '#FFFFE0',
  lemonchiffon: '#FFFACD',
  lightgoldenrodyellow: '#FAFAD2',
  papayawhip: '#FFEFD5',
  moccasin: '#FFE4B5',
  peachpuff: '#FFDAB9',
  palegoldenrod: '#EEE8AA',
  khaki: '#F0E68C',
  darkkhaki: '#BDB76B',

  // Purples
  lavender: '#E6E6FA',
  thistle: '#D8BFD8',
  plum: '#DDA0DD',
  violet: '#EE82EE',
  orchid: '#DA70D6',
  magenta: '#FF00FF',
  fuchsia: '#FF00FF',
  mediumorchid: '#BA55D3',
  mediumpurple: '#9370DB',
  blueviolet: '#8A2BE2',
  darkviolet: '#9400D3',
  darkorchid: '#9932CC',
  darkmagenta: '#8B008B',
  purple: '#800080',
  rebeccapurple: '#663399',
  indigo: '#4B0082',
  slateblue: '#6A5ACD',
  darkslateblue: '#483D8B',
  mediumslateblue: '#7B68EE',

  // Greens
  greenyellow: '#ADFF2F',
  chartreuse: '#7FFF00',
  lawngreen: '#7CFC00',
  lime: '#00FF00',
  limegreen: '#32CD32',
  palegreen: '#98FB98',
  lightgreen: '#90EE90',
  mediumspringgreen: '#00FA9A',
  springgreen: '#00FF7F',
  mediumseagreen: '#3CB371',
  seagreen: '#2E8B57',
  forestgreen: '#228B22',
  green: '#008000',
  darkgreen: '#006400',
  yellowgreen: '#9ACD32',
  olivedrab: '#6B8E23',
  olive: '#808000',
  darkolivegreen: '#556B2F',
  mediumaquamarine: '#66CDAA',
  darkseagreen: '#8FBC8F',
  lightseagreen: '#20B2AA',
  darkcyan: '#008B8B',
  teal: '#008080',

  // Blues/Cyans
  aqua: '#00FFFF',
  cyan: '#00FFFF',
  lightcyan: '#E0FFFF',
  paleturquoise: '#AFEEEE',
  aquamarine: '#7FFFD4',
  turquoise: '#40E0D0',
  mediumturquoise: '#48D1CC',
  darkturquoise: '#00CED1',
  cadetblue: '#5F9EA0',
  steelblue: '#4682B4',
  lightsteelblue: '#B0C4DE',
  powderblue: '#B0E0E6',
  lightblue: '#ADD8E6',
  skyblue: '#87CEEB',
  lightskyblue: '#87CEFA',
  deepskyblue: '#00BFFF',
  dodgerblue: '#1E90FF',
  cornflowerblue: '#6495ED',
  royalblue: '#4169E1',
  blue: '#0000FF',
  mediumblue: '#0000CD',
  darkblue: '#00008B',
  navy: '#000080',
  midnightblue: '#191970',

  // Browns
  cornsilk: '#FFF8DC',
  blanchedalmond: '#FFEBCD',
  bisque: '#FFE4C4',
  navajowhite: '#FFDEAD',
  wheat: '#F5DEB3',
  burlywood: '#DEB887',
  tan: '#D2B48C',
  rosybrown: '#BC8F8F',
  sandybrown: '#F4A460',
  goldenrod: '#DAA520',
  darkgoldenrod: '#B8860B',
  peru: '#CD853F',
  chocolate: '#D2691E',
  saddlebrown: '#8B4513',
  sienna: '#A0522D',
  brown: '#A52A2A',
  maroon: '#800000',

  // Whites/Grays
  white: '#FFFFFF',
  snow: '#FFFAFA',
  honeydew: '#F0FFF0',
  mintcream: '#F5FFFA',
  azure: '#F0FFFF',
  aliceblue: '#F0F8FF',
  ghostwhite: '#F8F8FF',
  whitesmoke: '#F5F5F5',
  seashell: '#FFF5EE',
  beige: '#F5F5DC',
  oldlace: '#FDF5E6',
  floralwhite: '#FFFAF0',
  ivory: '#FFFFF0',
  antiquewhite: '#FAEBD7',
  linen: '#FAF0E6',
  lavenderblush: '#FFF0F5',
  mistyrose: '#FFE4E1',
  gainsboro: '#DCDCDC',
  lightgray: '#D3D3D3',
  lightgrey: '#D3D3D3',
  silver: '#C0C0C0',
  darkgray: '#A9A9A9',
  darkgrey: '#A9A9A9',
  gray: '#808080',
  grey: '#808080',
  dimgray: '#696969',
  dimgrey: '#696969',
  lightslategray: '#778899',
  lightslategrey: '#778899',
  slategray: '#708090',
  slategrey: '#708090',
  darkslategray: '#2F4F4F',
  darkslategrey: '#2F4F4F',
  black: '#000000',
};
export default Button;