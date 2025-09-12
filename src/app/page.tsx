import Hero from '../app/pages/Hero'
import AboutPanel from '../app/pages/About'
import ServicesGrid from '../app/pages/Services'
import WorkList from '../app/pages/Work'
import TestimonialsGrid from '../app/pages/Testimonials'
import TeamList from './components/sections/TeamList'
import ContactSection from '../app/pages/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPanel />
      <ServicesGrid />
      <WorkList />
      <TeamList />
      <TestimonialsGrid />
      <ContactSection />
    </>
  )
}
