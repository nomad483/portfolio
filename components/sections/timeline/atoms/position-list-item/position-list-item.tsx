type Props = {
  title: string
  startDate: string
  endDate: string
  location: string
  description: string
}

export const PositionListItem = ({
  title,
  endDate,
  startDate,
  description,
  location,
}: Props) => {
  return (
    <li className="mt-2 box-border flex w-full flex-col justify-center rounded-2xl border-0 p-3 text-lg transition-all ease-in-out">
      <p className="after:border-foreground/70 text-lg after:absolute after:left-0 after:h-3 after:w-3 after:-translate-x-1/2 after:translate-y-1/2 after:rounded-full after:border-2 after:content-['']">
        {title}
      </p>
      <span className="text-foreground/60 text-sm">
        {startDate} - {endDate}
      </span>
      <span className="text-foreground/60 text-sm">{location}</span>
      <p className="text-base">{description}</p>
    </li>
  )
}
