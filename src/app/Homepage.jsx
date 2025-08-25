import '../components/header'
import Header from '../components/header'
import Intro from '../components/intro'


export default function HomePage() {
  return (
    <div className='flex flex-col'>
      <Header />
      <Intro />
    </div>
  )
}
