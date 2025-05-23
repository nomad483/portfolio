import { Education } from '@/types/timeline'

type Props = {
  education: Education[]
}

export const EducationList = ({ education }: Props) => {
  return (
    <ul className="after:bg-foreground/30 relative flex w-full list-none flex-col flex-wrap justify-center gap-3 pl-5 after:absolute after:top-0 after:left-0 after:h-full after:w-[2px] after:-translate-x-1/2 after:content-['']">
      {education.map((value, index) => (
        <li
          key={`${value.institution}_${value.id}_${index}`}
          className="bg-background/20 border-foreground/10 box-border flex w-full flex-col justify-center rounded-2xl border p-3 text-lg transition-all ease-in-out"
        >
          <div>
            <h3 className="after:bg-foreground/70 text-lg font-bold after:absolute after:left-0 after:h-3 after:w-3 after:-translate-x-1/2 after:translate-y-1/2 after:rounded-full after:content-['']">
              {value.institution}
            </h3>
            <p>{value.degree}</p>
            <span className="text-foreground/60 text-sm">
              {value.startDate} - {value.endDate} {value.location}
            </span>
          </div>
        </li>
      ))}
    </ul>
  )
}

EducationList.displayName = 'EducationList'
