'use client'
import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({totalCurrentBalance}: {totalCurrentBalance: number}) => {
  return (
    <p className='w-full'>
      <CountUp
        decimals={2}
        decimal=","
        prefix="$"
        end={totalCurrentBalance}
      />
    </p>
  );
}

export default AnimatedCounter
