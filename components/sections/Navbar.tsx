'use client'

import { Container } from "@/components/layout/Container"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="border-b">
      <Container className="flex h-16 items-center justify-between">
        <div className="font-bold text-xl">UpOrder</div>

        <nav className="hidden md:flex gap-8 text-sm">
          <a href="#">Features</a>
          <a href="#">Case Studies</a>
          <a href="#">Blog</a>
          <a href="#">Pricing</a>
        </nav>

        <Button>Sign Up Now</Button>
      </Container>
    </header>
  )
}
