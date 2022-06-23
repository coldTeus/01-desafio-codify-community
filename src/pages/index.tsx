import type { NextPage } from 'next'
import Header from '../ui/components/header/header'
import Title from '../ui/components/title/title'

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Title
        hellotitle="Hi, i’m"
        titlestyled="Julius Matheus"
        subtitle="Front-end developer - UX/UI Designer"
      />
    </div>
  )
}

export default Home
