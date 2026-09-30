import type { ImageMetadata } from 'astro';
import fieldFlowers from '../assets/art/field-flowers.jpg';
import bouquet from '../assets/art/bouquet.jpg';
import tanFlowers from '../assets/art/tan-flowers.jpg';
import ranunculus from '../assets/art/ranunculus.jpg';
import framed from '../assets/art/framed.jpg';
import yellow from '../assets/art/yellow.jpg';
import magenta from '../assets/art/magenta.jpg';
import colourRhythm from '../assets/art/colour-rhythm.jpg';
import vertical from '../assets/art/vertical.jpg';
import brownInk from '../assets/art/brown-ink.jpg';
import pinkGreen from '../assets/art/pink-green.jpg';
import redPencil from '../assets/art/red-pencil.jpg';
import tanDoodle from '../assets/art/tan-doodle.jpg';

export interface Artwork {
  image: ImageMetadata;
  /** only where the year is signed on the work */
  year?: string;
  alt: { en: string; ro: string };
  /** sampled from the work, then hand-checked */
  palette: [string, string, string];
}

export const flowers: Artwork[] = [
  {
    image: fieldFlowers,
    year: '2020',
    alt: { en: 'Watercolour meadow of tall wildflowers in teal, blue, violet and pink', ro: 'Acuarelă cu o pajiște de flori sălbatice înalte, în turcoaz, albastru, violet și roz' },
    palette: ['#7FA7A0', '#5563A8', '#C9707A'],
  },
  {
    image: bouquet,
    year: '2020',
    alt: { en: 'Soft pastel bouquet of pink, yellow and lilac flowers tied with a ribbon', ro: 'Buchet în pastel, cu flori roz, galbene și liliachii legate cu o panglică' },
    palette: ['#F1D392', '#E9A6B4', '#9FC3A0'],
  },
  {
    image: tanFlowers,
    year: '2024',
    alt: { en: 'Flowers and buds in rust, pink and green on tan paper', ro: 'Flori și boboci în ruginiu, roz și verde, pe hârtie bej' },
    palette: ['#DEBC9D', '#C88A6F', '#92624B'],
  },
  {
    image: ranunculus,
    alt: { en: 'Ink sketch of ranunculus with washes of orange, pink and magenta', ro: 'Schiță în tuș cu ranunculi și pete de acuarelă portocalii, roz și magenta' },
    palette: ['#F6D4CF', '#EAB98F', '#AF8867'],
  },
];

export const doodles: Artwork[] = [
  {
    image: colourRhythm,
    alt: { en: 'Abstract doodle of looping ink lines with red, orange and blue pastel', ro: 'Desen abstract cu bucle de tuș și pastel roșu, portocaliu și albastru' },
    palette: ['#E2A268', '#C35A48', '#70322A'],
  },
  {
    image: vertical,
    year: '2023',
    alt: { en: 'Tall abstract drawing of flowing ink shapes with pastel colour and hatching', ro: 'Desen abstract vertical cu forme fluide în tuș, pastel și hașuri' },
    palette: ['#E8BC65', '#D5B2AD', '#AF845B'],
  },
  {
    image: magenta,
    alt: { en: 'Abstract flowers in magenta, yellow and deep red with pencil loops', ro: 'Flori abstracte în magenta, galben și roșu închis, cu bucle de creion' },
    palette: ['#E9BE22', '#C781A0', '#93415F'],
  },
  {
    image: framed,
    alt: { en: 'Small abstract painting in pink, teal and copper inside a painted black frame', ro: 'Pictură abstractă mică în roz, turcoaz și aramiu, într-o ramă pictată neagră' },
    palette: ['#DEBEB9', '#BD8B7A', '#6576A3'],
  },
  {
    image: pinkGreen,
    year: '2023',
    alt: { en: 'Bold black calligraphic loops over pink, green and rust pencil', ro: 'Bucle caligrafice negre, peste creion roz, verde și ruginiu' },
    palette: ['#E6BBBF', '#A2ACAA', '#CA8274'],
  },
  {
    image: yellow,
    alt: { en: 'Abstract composition in yellow, red and pink with pencil scribbles', ro: 'Compoziție abstractă în galben, roșu și roz, cu linii de creion' },
    palette: ['#E6C449', '#BA8C3F', '#873439'],
  },
  {
    image: brownInk,
    alt: { en: 'Dense ink and graphite doodle over brown crayon', ro: 'Desen dens în tuș și grafit, peste creion maro' },
    palette: ['#C6B5AC', '#96887F', '#574C45'],
  },
  {
    image: redPencil,
    year: '2024',
    alt: { en: 'Graphite doodle with soft red pencil flowers along the bottom', ro: 'Desen în grafit, cu flori moi în creion roșu la bază' },
    palette: ['#F8C9BE', '#E0685E', '#8E8C8C'],
  },
  {
    image: tanDoodle,
    alt: { en: 'Swirling pastel shapes in white, grey and brown on tan paper', ro: 'Forme în spirală, în pastel alb, gri și maro, pe hârtie bej' },
    palette: ['#EED3BB', '#D4A87E', '#A87A5E'],
  },
];
