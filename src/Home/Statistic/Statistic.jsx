import CountUp from 'react-countup';


const Statistic = () => {
    return (

        <div className='max-w-7xl mx-auto bg-black my-10 h-[40vh]  flex justify-center items-center'>
            <div className="flex justify-between items-center gap-6 md:gap-16 lg:gap-24 ">

                <div className='text-white text-xl md:text-4xl lg:text-6xl text-center font-bold '>
                    <CountUp className='' start={0} end={100}>
                        {({ countUpRef}) => (
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
                    <CountUp className='' start={0} end={99}>
                        {({ countUpRef}) => (
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
                    <CountUp className='' start={0} end={5}>
                        {({ countUpRef}) => (
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

    );
};

export default Statistic;