export interface Achievement {
  title: string;
  result: string;
  year: string;
  note?: string;
  /**
   * Monochrome brand mark as a 24x24 SVG path, rendered in currentColor so it
   * matches the palette instead of importing four competing brand colours.
   */
  icon?: string;
  /**
   * Tight viewBox around the glyph. simple-icons pads every mark into a
   * 24x24 box, which makes a wide wordmark like FedEx render tiny; cropping
   * to the ink lets each mark fill its space.
   */
  viewBox?: string;
  /**
   * Raster mark driven through CSS masking, so a logo that only exists as a
   * bitmap still renders in currentColor like the vector marks. Path under
   * public/; the PNG's alpha channel is the mask.
   */
  mask?: string;
  /**
   * Optical scale for the mark, relative to the 1.5rem slot height. Mixed
   * aspect ratios cannot be balanced by a single height: a wide wordmark
   * reads large at low height, a narrow glyph reads small at full height.
   * Tuned by eye so all four carry similar visual weight.
   */
  scale?: number;
  /** Initials shown when there is no mark. */
  short?: string;
}

const ADOBE =
  'M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM8.884 1.376H0v21.248zm15.116 0h-8.884L24 22.624Z';

const FEDEX =
  'M22.498 14.298c-.016-.414.345-.751.75-.755a.745.745 0 0 1 .752.755.755.755 0 0 1-.751.745c-.395.002-.759-.346-.751-.745zm.759-.083c.067-.02.164-.042.162-.13.007-.09-.086-.133-.162-.134h-.163v.263c0 .001.165-.002.163.001zm-.163.107v.418h-.14v-.91h.327c.156-.021.294.092.286.253a.218.218 0 0 1-.156.19c.162.083.108.322.173.467h-.156a2.355 2.355 0 0 1-.04-.205c-.018-.093-.047-.229-.17-.213h-.124zm.76-.024a.603.603 0 0 0-.605-.632c-.338-.012-.62.302-.605.632a.619.619 0 0 0 .605.622.61.61 0 0 0 .605-.622zm-5.052-.579l-.878 1.008h-1.306l1.559-1.745-1.56-1.75h1.355l.902.997.878-.998h1.306l-1.543 1.743 1.559 1.753h-1.371l-.901-1.008zm-4.703-.352v-.827h1.904v-1.506l1.724 1.948-1.724 1.941v-1.556h-1.904zm1.56 1.36h-3.2V9.044h3.224v1.024H13.77v1.163h1.888v.958h-1.904v1.522h1.904v1.016zm-5.705-.655c-.54.017-.878-.552-.877-1.04-.01-.507.307-1.123.878-1.105.579-.025.871.6.845 1.103.023.501-.29 1.062-.846 1.042zM4.743 12.41c.076-.358.403-.67.78-.663a.788.788 0 0 1 .803.663H4.743zm15.182.564l1.815-2.047h-2.125l-.74.844-.763-.844h-4.037v-.548h1.912V8.741H10.84v2.58c-.362-.448-.981-.559-1.526-.492-.782.123-1.427.762-1.634 1.514-.254-.958-1.179-1.588-2.157-1.554-.781.009-1.6.365-1.987 1.071v-.818h-1.87v-.9h2.043v-1.4H0v6.287h1.666v-2.644h1.666a7.59 7.59 0 0 0-.082.622c-.013 1.232 1.042 2.27 2.274 2.236a2.204 2.204 0 0 0 2.157-1.432H6.254c-.14.268-.441.38-.73.36-.457.009-.83-.417-.829-.86h2.914c.083 1.027.988 1.966 2.043 1.947a1.53 1.53 0 0 0 1.19-.639v.41h7.215l.754-.86.754.86h2.192l-1.832-2.055z';

// The ZS lockup ships as 15 separately-coloured paths; concatenated into a
// single subpath set it renders identically in one colour.
const ZS =
  'M38.873 38.0409V35.6086L50.8638 16.2864H39.344V13.9883H53.7588V16.151L41.6684 35.7446H53.7588V38.0415H38.873V38.0409Z M71.9181 32.9415C71.4075 36.3114 68.2786 38.429 63.8956 38.429C60.2879 38.429 57.9269 37.5161 55.668 35.2498L57.4217 33.4909C59.4107 35.4863 61.2653 36.1296 63.9616 36.1296C66.658 36.1296 68.6793 35.0176 69.2517 33.0961C69.3267 32.8398 69.3717 32.5762 69.3855 32.3096C69.4305 31.6675 69.3351 31.0236 69.1053 30.4225C68.9307 29.9338 68.3818 29.2827 67.9582 28.9933C67.024 28.3072 65.6878 27.7295 64.315 27.2614L61.6349 26.3407C59.8289 25.7112 58.4789 24.8483 57.6023 23.7717C56.5698 22.5044 56.2194 20.6576 56.5224 18.7957C56.5224 18.7831 56.544 18.6681 56.544 18.6681C57.2945 15.4788 59.9075 13.6055 64.0138 13.6055C67.0822 13.6055 68.7837 14.531 70.8405 16.3911L69.1881 18.0483C67.705 16.6955 66.442 15.8374 63.9124 15.8374C60.9233 15.8374 59.2715 17.4267 58.9445 19.5527C58.8191 20.7304 59.1359 21.6084 59.7437 22.3552C60.3623 23.1176 61.4459 23.7308 62.6393 24.1484L65.1592 25.0066C66.9886 25.621 68.9991 26.588 70.1193 27.5942C70.1193 27.5942 72.4539 29.4097 71.9193 32.9391 M32.8492 38.0409V13.9883L27.8945 18.9571V43.0097L32.8492 38.0409Z M4.95472 38.0409V13.9883L0 18.9571V43.0097L4.95472 38.0409Z M6.97461 50.0049L11.9293 45.0362V31.0469L6.97461 36.0163V50.0049Z M11.9293 6.99609L6.97461 11.9655V25.9542L11.9293 20.9854V6.99609Z M6.97461 25.9532V36.0171L11.9293 31.0477V20.9844L6.97461 25.9532Z M13.9473 43.0118V57.001L18.9014 52.0317V38.043L13.9473 43.0118Z M13.9473 29.0202V32.9455L18.9014 27.9761V24.0508L13.9473 29.0202Z M18.9014 0L13.9473 4.96939V18.9581L18.9014 13.9893V0Z M13.9473 43.0093L18.9014 38.0405V27.9766L13.9473 32.946V43.0093Z M18.9014 24.0516V13.9883L13.9473 18.9571V29.021L18.9014 24.0516Z M25.876 31.0469L20.9219 36.0163V50.0056L25.876 45.0362V31.0469Z M25.876 20.9854V6.99609L20.9219 11.9655V25.9542L25.876 20.9854Z M25.876 20.9844L20.9219 25.9532V36.0171L25.876 31.0477V20.9844Z';

export const achievements: Achievement[] = [
  {
    title: 'Adobe Analytics Challenge',
    result: 'Top 20 globally',
    year: '2022',
    note: '3,000+ teams',
    icon: ADOBE,
    viewBox: '0 1.35 24 21.3',
    scale: 0.87,
  },
  {
    title: 'FedEx India COE Talent Hub',
    result: 'Top 0.5%',
    year: '2022',
    note: '100,000+ applicants · pre-placement interview offered',
    icon: FEDEX,
    viewBox: '0 8.7 24 6.6',
    scale: 0.72,
  },
  {
    title: 'ZS Campus Beats',
    result: 'Top 150',
    year: '2022',
    note: '3,500+ teams · pre-placement offer',
    icon: ZS,
    viewBox: '0 0 72 57',
    scale: 0.95,
  },
  {
    title: 'Inter IIT Tech Meet 11.0',
    result: 'Bronze medal',
    year: '2023',
    note: 'QuantInsti Trading Challenge · team lead',
    mask: '/logos/interiit.png',
    scale: 1.05,
  },
];
