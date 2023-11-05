import Image from 'next/image'
import Navbar from './components/Navbar'
import PageTitle from './components/PageTitle'
import PageContent from './components/PageContent'
import Card from './components/Card'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Home" />
        <PageContent />
        <div class="flex gap-6 w-full my-6 flex-wrap">
          <Card title="My First Card" subtitle="My first subtitle" description="my first description" />
          <Card title="My second Card" subtitle="My second subtitle" description="my second description" />
          <Card title="My third Card" subtitle="My third subtitle" description="my third description" />
        </div>
        <PageContent />
      </div>
    </div>
  )
}
