import Image from 'next/image'
import React from 'react'

const features = () => {
  return (
    <>
    
  
  <section className="grid min-h-screen ">
  <div className="grid p-4 gap-4  h-auto lg:grid-cols-2 grid-cols-1">
    <div className="rounded-3xl  bg-brand-primaryLight col-span-1">
        <div className="aspect-w-4 aspect-h-1 "></div>
        <h1 className="text-3xl  text-white font-bold underline underline-offset-10 px-4 lg:text-4xl py-10">All you need to 
            do is Book, Invite 
            & Enjoy.
        </h1>
    </div>
    <div className="rounded-3xl bg-brand-primaryLight row-span-2 flex flex-col place-content-evenly">
        <div className="grid grid-cols-1 gap-2 px-2 ">
            
            <div className="aspect-w-1 aspect-h-1  ">
                <iframe src="https://giphy.com/embed/st7RtYXtqAFMs" width="" height="" frameBorder="0" className="giphy-embed rounded-2xl " 
                ></iframe><p><a href="https://giphy.com/gifs/get-come-evelope-st7RtYXtqAFMs"></a></p>
            </div>
        </div>
            
            <h1 className="text-3xl  text-white font-bold underline underline-offset-10 px-4 lg:text-4xl ">Your are all set! 
                Invite your guests 
                to the exclusive 
                experience. Turn up and start 
                creating memories 
                together
            </h1>
                
    </div>
    <div className="rounded-3xl bg-brand-primaryLight row-span-1 flex flex-col place-content-evenly ">
        <div className="grid grid-cols-1 gap-2 px-2 ">
            <div className="aspect-w-1 aspect-h-1 ">
            </div>
            
        </div>
            
            <h1 className="text-3xl  text-white font-bold underline underline-offset-10 px-4 lg:text-4xl py-16 ">Larger the group, 
                better the deal.
            </h1>
                
    </div>
  </div>
  </section>

  <section className="h-auto bg-brand-background">
    <div className="max-w-7xl mx-auto py-10 px-10 sm:py-16 sm:px-6 lg:px-8 sm:text-center">
        <p className="mt-1 text-3xl text-center font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-6xl">As featured in.. </p>
    </div>
    <div className="flex justify-center ">
        <div className="px-10 py-6 my-2 text-gray-700 rounded-full text-2xl font-bold bg-white hover:bg-brand-primaryLight hover:text-white mx-6">
            Yourstory
        </div>
        
    </div>
</section>
  </>
  )
}

export default features