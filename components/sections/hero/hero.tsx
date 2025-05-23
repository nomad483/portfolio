import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

import { Button, Card, Container } from '@/components/ui'

export const Hero = () => {
  return (
    <Card>
      <Container className="items-center justify-center text-center">
        <h1 className="4xl:text-5xl text-2xl font-bold md:text-4xl">
          Hello, I&apos;m Mykola Zakliuka
        </h1>
        <p className="4xl:mx-20 mt-2 text-xl md:pb-3 md:text-2xl">
          A passionate Full Stack Web Developer from Ukraine with strong
          expertise in building modern web applications using React, TypeScript,
          Next.js, PHP, and Laravel. Experience in developing scalable
          solutions, seamless REST API integrations, clean UI/UX, and optimized
          performance across the stack. Skilled in debugging, code quality.
        </p>
        <p className="4xl:mx-20 mt-2 text-lg">
          An agile team player who stays on the pulse of emerging web
          technologies to craft future-ready solutions. If you&apos;re looking
          for a dedicated developer to elevate your project and bring your ideas
          to life, let’s connect and build something exceptional together!
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href="#skills" scroll={true}>
              Skills
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="#timeline" scroll={true}>
              Timeline
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="#projects" scroll={true}>
              Projects
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="#contacts" scroll={true}>
              Contacts
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link
              target="_blank"
              href="https://drive.google.com/file/d/1TaaimCa6tL7EF97ruz-616zIDTgJDGMQ/view?usp=drive_link"
              scroll={true}
            >
              CV
              <ExternalLink />
            </Link>
          </Button>
        </div>
      </Container>
    </Card>
  )
}
