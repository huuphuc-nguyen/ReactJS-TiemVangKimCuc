import Banner from '../../components/Banner/Banner'
import CategoryNav from '../../components/CategoryNav/CategoryNav'
import ShowroomSection from '../../components/ShowroomSection/ShowroomSection'

const HomePage = () => {

  return (
    <div className='lg:px-24 px-[2rem]'>
      <Banner />
      <CategoryNav />
      <ShowroomSection />
    </div>
  )
}

export default HomePage
