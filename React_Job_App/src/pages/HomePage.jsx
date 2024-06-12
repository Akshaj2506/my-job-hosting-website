import Hero from '../components/Hero'
import HeroCards from '../components/HeroCards'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
   return (
      <>
         <Hero title="Become a full stack developer in 6 months" subtitle='You need to learn HTML, CSS, JavaScript, React, SpringBoot and MongoDB' />
         <HeroCards />
         <JobListings />
         <ViewAllJobs />
      </>
   )
}

export default HomePage