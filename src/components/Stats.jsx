import React from 'react'
import AnimatedNumbers from "react-animated-numbers";
import "../style/Stats.css";
const Stats = () => {

  const [num, setNum] = React.useState(0);
  return (
    <>
      <div className='w-full mt-10 stats-main relative'>
      <div className='stats-main-bg h-[200%] z-[-10] mt-[-2.4rem] w-full opacity-25 absolute'>
        
      </div>
        <div className='text-center text-[20px] font-semibold'>
          WELCOME TO EVENTS -<span className=' text-blue-500 font-bold'>
            BEST WEDDING & EVENT MANAGEMENT COMPANY IN DELHI NCR  
          </span>
        </div>
        <div className='text-center text-[18px]'>
          V3 Events & Weddings -Award Winning Wedding Planners & Event Management Company
        </div>
        <div className='mt-6 flex justify-evenly'>
        <div className='h-[150px] w-[190px] text-center border rounded-md border-slate-400 hover:shadow-xl stats-box p-10'>
            <div className='text-[22px] font-semibold mb-3'>
              Experiences
            </div>
            <div className='flex items-center gap-2 text-lg w-full justify-center'>
              <AnimatedNumbers
                includeComma
                // className={styles.container}
                transitions={(index) => ({
                  type: "spring",
                  duration: index + 5.3,
                })}
                animateToNumber={10}
                fontStyle={{
                  fontSize: 30,
                  color: "rgb(255, 0, 98)",
                }}
              />
              + years
            </div>
          </div>
          <div className='h-[150px] w-[190px] text-center border rounded-md border-slate-400 hover:shadow-xl stats-box p-1 pt-10'>
            <div className='text-[21px] font-semibold mb-3'>
              Corporate Events
            </div>
            <div className='flex items-center justify-center gap-2 text-lg'>
              <AnimatedNumbers
                includeComma
                // className={styles.container}
                transitions={(index) => ({
                  type: "spring",
                  duration: index + 5.3,
                })}
                animateToNumber={100}
                fontStyle={{
                  fontSize: 30,
                  color: "rgb(255, 0, 98)",
                }}
              />
              <b>+</b>
            </div>
          </div>
          <div className='h-[150px] w-[190px] text-center border rounded-md border-slate-400 hover:shadow-xl stats-box p-10'>
            <div className='text-[22px] font-semibold mb-3'>
              Weddings
            </div>
            <div className='flex justify-center items-center gap-2 text-lg'>
              <AnimatedNumbers
                includeComma
                // className={styles.container}
                transitions={(index) => ({
                  type: "spring",
                  duration: index + 5.3,
                })}
                animateToNumber={50}
                fontStyle={{
                  fontSize: 30,
                  color: "rgb(255, 0, 98)",
                }}
              />
              <b>+</b>
            </div>
          </div>
          <div className='h-[150px] w-[190px] text-center border rounded-md border-slate-400 hover:shadow-xl stats-box p-10'>
            <div className='text-[22px] font-semibold mb-3'>
              Events
            </div>
            <div className='flex justify-center items-center gap-2 text-lg'>
              <AnimatedNumbers
                includeComma
                // className={styles.container}
                transitions={(index) => ({
                  type: "spring",
                  duration: index + 5.3,
                })}
                animateToNumber={50}
                fontStyle={{
                  fontSize: 30,
                  color: "rgb(255, 0, 98)",
                }}
              />
              <b>+</b>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Stats