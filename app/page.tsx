import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import Cta from '@/components/CTA'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import { getAllCompanions, getRecentSessions } from '@/lib/actions/companion.action'
import { getSubjectColor } from '@/lib/utils'
import React from 'react'

const Page = async() => {
  const companions = await getAllCompanions({limit:3});
  const getRecentSessionsCompanions = await getRecentSessions(10)
  return (
    <main>
      <h1>Popular Companion</h1>
      <section className="home-section">
        {companions.map((companion, index) => (
          <CompanionCard
            key={index}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>

      <section className="home-section">
        <CompanionList
          title="Recently Completed Sesssions"
          companions={getRecentSessionsCompanions}
          classNames="w-2/3 max-lg:w-full"
        />
        <Cta />
      </section>
    </main>
  );
}

export default Page