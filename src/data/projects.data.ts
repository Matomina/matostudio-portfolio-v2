import type { Project } from '@/types/project.types'

export const projects: readonly Project[] = [
  {
    id: 'mangabook',
    title: 'MangaBook',
    category: 'Application web full stack',
    description:
      'Plateforme web autour du manga avec authentification, catalogue, favoris, historique utilisateur et espace d’administration.',
    stack: ['Flask', 'Python', 'SQLite', 'Jinja2', 'CSS', 'JavaScript'],
    status: 'Refonte',
    githubUrl: 'https://github.com/Matomina/flask-manga-book',
    demoUrl: 'https://manga-book-style.netlify.app/',
  },
  {
    id: 'as-transports',
    title: 'AS Transports',
    category: 'Site vitrine professionnel',
    description:
      'Site vitrine orienté conversion pour une activité de transport, avec sections services, tarifs, réassurance, contact et paiement.',
    stack: ['React', 'Vite', 'JavaScript', 'CSS'],
    status: 'En cours',
  },
  {
    id: 'laveoo',
    title: 'LAVEOO',
    category: 'Site vitrine premium',
    description:
      'Site vitrine moderne pour une activité de service, pensé pour la crédibilité, la conversion et le référencement local.',
    stack: ['React', 'Vite', 'CSS', 'SEO'],
    status: 'En cours',
  },
  {
    id: 'matostudio-portfolio-v2',
    title: 'MatoStudio Portfolio V2',
    category: 'Portfolio professionnel',
    description:
      'Portfolio freelance premium construit avec une architecture React moderne, TypeScript, composants réutilisables et branding MatoStudio.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Framer Motion'],
    status: 'En cours',
    githubUrl: 'https://github.com/Matomina/matostudio-portfolio-v2',
  },
] as const
