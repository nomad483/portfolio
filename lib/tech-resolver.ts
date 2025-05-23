import type { IconType } from '@icons-pack/react-simple-icons'
import {
  SiCss,
  SiDocker,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGitlab,
  SiGoogledrive,
  SiHtml5,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNuxt,
  SiPhp,
  SiPostgresql,
  SiReact,
  SiStripe,
  SiSupabase,
  SiSwift,
  SiSymfony,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from '@icons-pack/react-simple-icons'

export type TechItem = {
  name: string
  icon: IconType
  stroke?: boolean
}

export const techResolver = (key: string) => {
  const TECHS: Record<string, TechItem> = {
    css: {
      name: 'CSS',
      icon: SiCss,
    },
    react: {
      name: 'React.js',
      icon: SiReact,
    },
    docker: {
      name: 'Docker',
      icon: SiDocker,
    },
    figma: {
      name: 'Figma',
      icon: SiFigma,
    },
    firebase: {
      name: 'Firebase',
      icon: SiFirebase,
    },
    git: {
      name: 'Git',
      icon: SiGit,
      stroke: true,
    },
    github: {
      name: 'GitHub',
      icon: SiGithub,
      stroke: true,
    },
    gitlab: {
      name: 'GitLab',
      icon: SiGitlab,
    },
    html: {
      name: 'HTML',
      icon: SiHtml5,
    },
    laravel: {
      name: 'Laravel',
      icon: SiLaravel,
    },
    mongodb: {
      name: 'MongoDB',
      icon: SiMongodb,
    },
    mysql: {
      name: 'MySQL',
      icon: SiMysql,
    },
    nestjs: {
      name: 'Nest.js',
      icon: SiNestjs,
    },
    nextjs: {
      name: 'Next.js',
      icon: SiNextdotjs,
    },
    nuxtjs: {
      name: 'Nuxt.js',
      icon: SiNuxt,
    },
    php: {
      name: 'PHP',
      icon: SiPhp,
    },
    postgresql: {
      name: 'PostgreSQL',
      icon: SiPostgresql,
    },
    reactjs: {
      name: 'React.js',
      icon: SiReact,
    },
    stripe: {
      name: 'Stripe',
      icon: SiStripe,
    },
    supabase: {
      name: 'Supabase',
      icon: SiSupabase,
    },
    swiftui: {
      name: 'SwiftUI',
      icon: SiSwift,
    },
    symfony: {
      name: 'Symfony',
      icon: SiSymfony,
    },
    tailwindcss: {
      name: 'Tailwind CSS',
      icon: SiTailwindcss,
    },
    typescript: {
      name: 'TypeScript',
      icon: SiTypescript,
    },
    vuejs: {
      name: 'Vue.js',
      icon: SiVuedotjs,
    },
    gdrive: {
      name: 'Google Drive',
      icon: SiGoogledrive,
      stroke: true,
    },
  }

  key = key.toLowerCase().replace('.', '').replace(' ', '').replace('-', '')

  if (!TECHS[key]) {
    return {} as TechItem
  }

  return TECHS[key]
}
