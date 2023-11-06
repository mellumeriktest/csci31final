import Image from 'next/image'
import Navbar from './components/Navbar'
import PageTitle from './components/PageTitle'
import PageContent from './components/PageContent'
import Card from './components/Card'

import { createClient } from '@supabase/supabase-js'
const SUPABASE_URL = 'https://bzcrkwdrpftktwtohvsw.supabase.co'
const SUPABASE_CARDS_TABLE = 'cards'
// Create a single supabase client for interacting with your database
const supabase = createClient(SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)

export default async function Home() {
  const { data: cards, error } = await supabase.from(SUPABASE_CARDS_TABLE).select()

  console.log('cards', cards)

  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Home" />
        <PageContent />
        <div className="flex gap-6 w-full my-6 flex-wrap">
          {cards.map((card, idx) => (
            <Card key={idx} title={card.title} subtitle={card.subtitle} description={card.description} />
          ))}
        </div>
        <PageContent />
      </div>
    </div>
  )
}
