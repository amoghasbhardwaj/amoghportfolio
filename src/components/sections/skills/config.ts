import { Skill } from '@/types/skill';

const trimLen: number = -1; // 0 is accordion only, -1 is does not restrict the length

const skills: Skill[] = [
  {
    name: 'AI/ML',
    thumbnail: '/images/skills/ai-ml.jpg',
    description: `AI/ML (Artificial Intelligence and Machine Learning) involves building intelligent systems that can learn from data, make predictions, and automate decision-making processes. This field includes working with algorithms, neural networks, and data-driven solutions to solve complex problems across industries.`
  },
  {
    name: 'Web Development',
    thumbnail: '/images/skills/web-development.jpg',
    description: `Web Development involves designing and building websites and web applications that are both visually engaging and highly functional. It covers front-end and back-end technologies, frameworks like React and Node.js, and best practices to ensure optimal performance, security, and scalability.`
  },
  {
    name: 'Mobile App Development',
    thumbnail: '/images/skills/mobile-development.png',
    description: `Mobile App Development focuses on creating applications for both Android and iOS platforms. It includes native development with Kotlin and Swift, as well as cross-platform frameworks like Flutter to deliver high-performance apps with a consistent user experience across devices.`
  },
  {
    name: 'Animation',
    thumbnail: '/images/skills/animation.jpg',
    description: `Animation involves bringing visual elements to life through movement and interactivity. It covers techniques like 2D and 3D animation, motion graphics, and character animation using software such as Blender, After Effects, and Maya, enhancing storytelling and user engagement.`
  }
];

export { trimLen, skills };
