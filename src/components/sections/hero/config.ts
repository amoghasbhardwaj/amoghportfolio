import { Hero } from '@/types/hero';
import { metadata as meta } from '@/app/config';

const hero: Hero = {
  name: meta.author.name,
  label: meta.author.label,
  description: 'I design and build Ideas and Concepts into Reality.Welcome to my portfolio.'
};

export { hero };
