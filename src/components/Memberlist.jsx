import React from 'react'

const Memberlist = ({members}) => {
  return (
      <section id="about-us" className='w-full flex xl:flex-row flex-col justify-center 
   min-h-screen gap-10 max-container'>
        <h1 className="text-center pb-5 text-white font-bold">Band Members</h1>
      {members.map((member, index) => (
         <div key={index} className='text-white font-medium'>
             <h1>{member.name}</h1>  <p>{member.role}</p>
         </div>
      ))}
    </section>
  )
}

export default Memberlist






