import ClipLoader from 'react-spinners/ClipLoader'
// eslint-disable-next-line
const Spinner = ({ loading }) => {
   const override = {
      display : "block",
      margin : "0px auto"
   }
   return (
      <div className='flex justify-center items-center'>
         <ClipLoader
            color="#4338ca"
            loading={loading}
            cssOverride={override}
            size={100}
         />

      </div>
   )
}

export default Spinner