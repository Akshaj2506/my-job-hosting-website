import { useEffect, useState } from "react"
import Listing from "./Listing"
import Spinner from "./Spinner";
//eslint-disable-next-line
const JobListings = ({ showAll = false }) => {
   const [listings, setListings] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchJobs = async () => {
         let data;
         const apiUrl = (showAll === true) ? "/api/jobs" : "/api/jobs?_limit=3"
         try {
            const response = await fetch(apiUrl);
            data = await response.json();
            setListings(data);
         } catch (error) {
            console.log("Error: " + error);
         } finally {
            setLoading(false);
         }
      }
      setTimeout(() => {
         fetchJobs();
      }, 1000);
   }, [])
   return (
      <section className="bg-blue-50 px-4 py-10">
         <div className="container-xl lg:container m-auto">
            <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
               Browse Jobs
            </h2>
            {loading ? <Spinner loading={loading} /> :
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {listings.map((job) => (
                     <Listing bg="bg-white" key={parseInt(job.id)} job={job} />
                  ))}
               </div>
            }
         </div>
      </section>
   )
}

export default JobListings