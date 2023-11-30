import { useEffect, useState } from 'react';
import CountUp from 'react-countup';


const Statistic = () => {

    const [statistic,setStatistic] = useState([]);
    const [premium,setPremium]=useState([]);
  
    useEffect(()=>{
        fetch("https://newspaper-fullstack-website-server-side.vercel.app/articles")
        .then(res=>res.json())
        .then(data=>{
            setStatistic(data)
        })

        //premium user
        const premiumUsers=statistic.filter(premiumUser=> premiumUser?.premium == "Premium")
        setPremium(premiumUsers)


    },[statistic])




    return (
        <div>
            <h2 className="text-center text-[#8a2121] text-2xl md:text-3xl lg:text-5xl  font-extrabold ">Statistic</h2>
            <div className='max-w-7xl mx-auto bg-black  my-10 h-[40vh]  flex justify-center items-center'>
                <div className="flex justify-between items-center gap-6 md:gap-16 lg:gap-24 ">

                    <div className='text-white text-xl md:text-4xl lg:text-6xl text-center font-bold '>
                        
                           <CountUp className='' start={0} end={statistic.length}>
                           {({ countUpRef }) => (
                               <div>
                                   <span ref={countUpRef} />
                               </div>
                           )}
                       </CountUp>
                        
                        <div className='mt-1 md:mt-4'>
                            <h2 className='text-[16px] md:text-xl'>All Users</h2>
                        </div>
                    </div>
                    <div className='text-white text-xl md:text-4xl lg:text-6xl text-center font-bold '>

                    <CountUp className='' start={0} end={statistic.length - premium.length}>
                           {({ countUpRef }) => (
                               <div>
                                   <span ref={countUpRef} />
                               </div>
                           )}
                       </CountUp>

                        <div className='mt-1 md:mt-4'>
                            <h2 className='text-[16px] md:text-xl'>Normal Users</h2>
                        </div>
                    </div>
                    <div className='text-white text-xl md:text-4xl lg:text-6xl text-center font-bold '>
                        <CountUp className='' start={0} end={premium.length}>
                            {({ countUpRef }) => (
                                <div>
                                    <span ref={countUpRef} />
                                </div>
                            )}
                        </CountUp>
                        <div className='mt-1 md:mt-4'>
                            <h2 className='text-[16px] md:text-xl'>Premium Users</h2>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Statistic;