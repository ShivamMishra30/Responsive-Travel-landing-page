import Head from 'next/head'
import PricingPlans from '../components/PricingPlans'

export default function pricingPlan(){
    
    return (
        <div>
            <Head>
                <title>Pricing | Grouple</title>
            </Head>

            <main>
                <div className='mx-auto max-w-7xl bg-white px-4 pt-24 sm:px-6 lg:px-8'>
                    <h2 className='text-3xl font-extrabold text-black sm:text-5xl sm:leading-tight sm:tracking-tight '>
                        Pricing plans 
                    </h2>
                    <p className='mt-4 max-w-3xl text-lg text-slate-500'>
                        Choosse an affordable plan that's packed with the ebst features for engaging your audience, creating customer loyalty, and driving sales.
                    </p>
                </div>
                <div className=' flex justify-center lg:scale-90 lg:transform  lg:flex lg:justify-center lg:items-center h-full px-6 py-12'>
                    <div className='grid lg:grid-cols-3  gap-12  '>
        

   
                            
                                <PricingPlans/>
                                <div className='order-first lg:order-none lg:scale-110 lg:transform lg:z-10'>
                                <PricingPlans featured={true}/>
                            </div>
                                <PricingPlans  />
                           


                    </div>
                </div>
            </main>
        </div>
    )
}