export type Experience = {
  id: number
  company: string
  startDate: string
  endDate: string
  positions: Position[]
}

export type Position = {
  title: string
  description: string
  location: string
  startDate: string
  endDate: string
}

export type Education = {
  id: number
  institution: string
  degree: string
  startDate: string
  endDate: string
  location: string
}

export type Timeline = {
  experience: Experience[]
  education: Education[]
}
