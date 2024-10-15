import { FaAngleRight } from "react-icons/fa6";
import { Button } from '../ui/button'

const Hero = () => {
  return (
    <div className={`flex bg-[#0169FE] w-full h-[28rem] lg:h-[28rem] rounded-3xl md:pl-[2.375rem] mb-[2.68rem] bg-none md:bg-[url('/portrait2.svg')] md:bg-contain md:bg-no-repeat md:bg-[15rem] lg:bg-[29rem] xl:bg-[45rem]`}>
      <section className="lg:w-2/3 flex flex-col justify-evenly h-full px-5">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-left text-white">
          Available Products
        </h1>
        <div className="sm:text-left">
          <p className='text-white text-base sm:text-lg md:text-lg mb-10 w-3/4 md:w-1/2 lg:w-3/4'>
            Discover a decentralized pharmacy that secures your health records, ensures transparent sourcing of medications, and offers seamless crypto transactions
          </p>
          <Button
            className="bg-white  text-blue-600 rounded-full px-8 py-2 text-sm sm:text-base"
            size="lg">
              See All 
              <FaAngleRight className="text-[14px] ml-2" />
          </Button>
        </div>
      </section>
    </div> 
       
  )
}

export default Hero