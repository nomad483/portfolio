import Link from 'next/link'

import { TechItem } from '@/lib/tech-resolver'
import { cn } from '@/lib/utils'

type Props = {
  skill: TechItem
  level: string
  href?: string
}

export const SkillListItem = ({ skill, level, href }: Props) => {
  const { name, icon: Logo, stroke } = skill

  if (!name || !Logo) {
    return null
  }

  return (
    <li className="bg-background-20 border-foreground-10 box-border flex h-[90px] w-[75px] flex-col items-center justify-center rounded-2xl border p-3 text-lg transition-all ease-in-out hover:scale-105 md:h-[110px] md:w-[110px]">
      <Link
        href={href ?? ''}
        className="flex flex-col items-center justify-center"
      >
        <Logo
          className={cn(
            '4xl:h-12 4xl:w-12 h-10 w-10 font-bold md:h-11 md:w-11',
            stroke ? 'stroke-foreground' : 'fill-foreground'
          )}
        />
        <span className="4xl:text-lg text-center text-xs font-bold text-nowrap md:text-base">
          {name}
        </span>
        <span className="text-foreground-60 4xl:text-base text-xs text-nowrap md:text-sm">
          {level}
        </span>
      </Link>
    </li>
  )
}
