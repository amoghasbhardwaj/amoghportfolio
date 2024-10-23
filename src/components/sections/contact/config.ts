import { Contact } from '@/types/contact';
import {
  SiGithub,
  SiLinkedin,
  SiGoogle,
  SiLeetcode,
  SiHackerrank,
  SiGeeksforgeeks,
  SiKaggle
} from '@icons-pack/react-simple-icons';

const contact: Contact = {
  email: 'amoghsai1665@gmail.com',
  socials: [
    {
      name: 'Github',
      href: 'https://github.com/',
      Icon: SiGithub
    },
    {
      name: 'Google Developers',
      href: 'https://g.dev/amoghs',
      Icon: SiGoogle
    },
    {
      name: 'LeetCode',
      href: 'https://leetcode.com/u/amogh1611',
      Icon: SiLeetcode
    },
    {
      name: 'HackerRank',
      href: 'https://www.hackerrank.com/profile/AmoghBharadwaj',
      Icon: SiHackerrank
    },
    {
      name: 'GeeksforGeeks',
      href: 'https://www.geeksforgeeks.org/user/amoghsai1665',
      Icon: SiGeeksforgeeks
    },
    {
      name: 'Linkedin',
      href: 'https://linkedin.com/',
      Icon: SiLinkedin
    },
    {
      name: 'Kaggle',
      href: 'https://www.kaggle.com/amoghsbharadwaj',
      Icon: SiKaggle
    }
  ]
};

export { contact };