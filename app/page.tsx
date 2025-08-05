import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import Cta from '@/components/CTA'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1>Popular Companion</h1>
      <section className='home-section'>
        <CompanionCard
          id="123"
          name="Neura the Brainy Explorer"
          topic="Neural Network of Brain"
          subject="Science"
          duration={45}
          color="#529ad3"
        />
        <CompanionCard
          id="456"
          name="Countsy the number Wizard"
          topic="Derivatives and Integrals"
          subject="Math"
          duration={30}
          color="#5ed972"
        />
        <CompanionCard
          id="789"
          name="Verba the Vocabulary Builder"
          topic="Language"
          subject="Engalish Literature"
          duration={20}
          color="#9d32f5"
        />
        
      </section>

      <section className='home-section'>
        <CompanionList
          title = "Recently Completed Sesssions"
          companions={recentSessions}
          classNames= "w-2/3 max-lg:w-full"
        />
        <Cta/>
      </section>
    </main>
  )
}

export default Page