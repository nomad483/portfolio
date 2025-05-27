import { Fragment } from 'react'
import { SiGithub } from '@icons-pack/react-simple-icons'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Card, Container, SectionTitle, Separator } from '@/components/ui'
import { fetchGdiscData } from '@/lib/fetch-gdisc-data'
import { techResolver } from '@/lib/tech-resolver'
import type { Projects as ProjectsType } from '@/types/projects'

export const Projects = async () => {
  const projects = await fetchGdiscData<ProjectsType[]>('projects')

  return (
    <Card id="projects">
      <Container>
        <SectionTitle>Projects</SectionTitle>
        <div className="flex flex-col gap-2">
          {projects.map((project) => (
            <Fragment key={`${project.title}_${project.id}`}>
              <div className="p-4">
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="py-2 text-xl">{project.description}</p>
                <div className="w-full overflow-hidden rounded-2xl">
                  <Image
                    src={project.image_url}
                    alt={project.image_alt}
                    width={1920}
                    height={1080}
                  />
                </div>
                <div className="mt-2 flex flex-wrap gap-3 pl-2">
                  {project.tags.map((tag) => {
                    const { name, icon: Logo, stroke } = techResolver(tag)

                    if (!name || !Logo) {
                      return null
                    }

                    return (
                      <div
                        key={`${project.title}_${tag}`}
                        className="hover:bg-foreground-10 flex items-center gap-2 rounded-lg px-2 text-lg transition-all ease-in-out"
                      >
                        <Logo
                          className={`h-4 w-4 ${stroke ? 'stroke-foreground' : 'fill-foreground'}`}
                        />
                        <span>{name}</span>
                      </div>
                    )
                  })}
                </div>
                <div className="mt-2 flex gap-3 pl-2 text-lg">
                  <Link
                    href={project.url}
                    className="flex items-center justify-center text-blue-500 hover:underline"
                  >
                    View Project
                    <ExternalLink size={15} className="ml-1" />
                  </Link>
                  {project.github_url && (
                    <Link
                      href={project.github_url}
                      className="flex items-center justify-center text-blue-500 hover:underline"
                    >
                      <SiGithub size={15} className="mr-1" />
                      Github
                      <ExternalLink size={15} className="ml-1" />
                    </Link>
                  )}
                </div>
              </div>
              <Separator className="last:hidden" />
            </Fragment>
          ))}
        </div>
      </Container>
    </Card>
  )
}
