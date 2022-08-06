import Head from 'next/head'
import PricingPlans from '../components/PricingPlans'

export default function pricingPlan(){
    
    return (
        <div>
            <Head>
                <title>Pricing | Grouple</title>
            </Head>

            <main >
                {/* <div classNameName='mx-auto max-w-7xl  px-4 pt-24 sm:px-6 lg:px-8'>
                    <h2 classNameName='text-3xl font-extrabold text-black sm:text-5xl sm:leading-tight sm:tracking-tight '>
                        Pricing plans 
                    </h2>
                    <p classNameName='mt-4 max-w-3xl text-lg text-slate-500'>
                        Choosse an affordable plan that's packed with the ebst features for engaging your audience, creating customer loyalty, and driving sales.
                    </p>
                </div> */}
                <section className="py-8 leading-7 text-gray-900 bg-brand-background  sm:py-12 md:py-16 lg:py-24">
    <div className="box-border px-4 mx-auto border-solid sm:px-6 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center leading-7 text-center text-gray-900 border-0 border-gray-200">
            <h2 className="box-border m-0 text-3xl font-semibold leading-tight tracking-tight text-black border-solid sm:text-4xl md:text-5xl">
                Simple, Transparent Pricing
            </h2>
            <p className="box-border mt-2 text-xl text-gray-900 border-solid sm:text-2xl">
                Pricing to fit the needs of any companie size.
            </p>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-4 leading-7 text-gray-900 border-0 border-gray-200 sm:mt-6 sm:gap-6 md:mt-8 md:gap-12  lg:grid-cols-3">
           
            <div className="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border-4 border-solid rounded-lg hover:border-brand-primaryLight  bg-white shadow-3xl lg:-mr-3 sm:my-0 sm:p-6 md:my-8 md:p-8">
                <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                    Starter
                </h3>
                <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                    <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                        $5
                    </p>
                    <p className="box-border m-0 border-solid" >
                        / month
                    </p>
                </div>
                <p className="mt-6 mb-5 text-base leading-normal text-left text-gray-900 border-0 border-gray-200">
                    Ideal for Startups and Small Companies
                </p>
                <ul className="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Automated Reporting
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Faster Processing
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Customizations
                    </li>
                </ul>
                <button className="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-brand-primaryLight no-underline bg-white border-2 border-brand-primaryLight rounded-2xl shadow-3xl cursor-pointer hover:bg-brand-primaryLight  hover:text-white focus-within:bg-brand-primaryLight focus-within:border-brand-primaryLight focus-within:text-white sm:text-base md:text-lg">

                    Select Plan
                </button>
            </div>
        
            <div className="relative z-20 flex flex-col items-center max-w-md p-4 mx-auto my-0   border-4 hover:border-brand-primaryLight bg-white shadow-3xl border-solid rounded-lg sm:p-6 md:px-8 md:py-16">
                <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                    Basic
                </h3>
                <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                    <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                        $15
                    </p>
                    <p className="box-border m-0 border-solid">
                        / month
                    </p>
                </div>
                <p className="mt-6 mb-5 text-base leading-normal text-left text-gray-900 border-0 border-gray-200">
                    Ideal for medium-size businesses to larger businesses
                </p>
                <ul className="flex-1 p-0 mt-4 leading-7 text-gray-900 border-0 border-gray-200">
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Everything in Starter
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        100 Builds
                    </li>
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Progress Reports
                    </li>
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Premium Support
                    </li>
                </ul>
                <button className="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-brand-primaryLight no-underline bg-white border-2 border-brand-primaryLight rounded-2xl shadow-3xl cursor-pointer hover:bg-brand-primaryLight  hover:text-white focus-within:bg-brand-primaryLight focus-within:border-brand-primaryLight focus-within:text-white sm:text-base md:text-lg">

                    Select Plan
                </button>
            </div>
         
            <div className="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border-4 shadow-3xl  hover:border-brand-primaryLight bg-white border-solid rounded-lg lg:-ml-3 sm:my-0 sm:p-6 md:my-8 md:p-8">
                <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                    Plus
                </h3>
                <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                    <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                        $25
                    </p>
                    <p className="box-border m-0 border-solid">
                        / month
                    </p>
                </div>
                <p className="mt-6 mb-5 text-base leading-normal text-left text-gray-900 border-0 border-gray-200">
                    Ideal for larger and enterprise companies
                </p>
                <ul className="flex-1 p-0 mt-4 leading-7 text-gray-900 border-0 border-gray-200">
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Everything in Basic
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Unlimited Builds
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Advanced Analytics
                    </li>
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Company Evaluations
                    </li>
                </ul>
                <button className="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-brand-primaryLight no-underline bg-white border-2 border-brand-primaryLight rounded-2xl shadow-3xl cursor-pointer hover:bg-brand-primaryLight  hover:text-white focus-within:bg-brand-primaryLight focus-within:border-brand-primaryLight focus-within:text-white sm:text-base md:text-lg">

                    Select Plan
                </button>
            </div>
        </div>
    </div>
</section>
            </main>
        </div>
    )
}