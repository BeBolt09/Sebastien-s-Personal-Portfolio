import React from 'react'

export default function Portfolio() {
  return (
    <>
        <div className='flex justify-center pt-20'>
            <div className='font-mono text-3xl text-gray-600'>My works</div> 
            <img src="src/assets/workicon.svg" className='h-10 w-auto'/>
        </div>

        <div className='flex justify-center mt-5'>
            <div className="max-w-sm rounded-lg overflow-hidden border-2 border-gray-500 shadow-lg mx-5">
                <img className="w-full p-4" src='src/assets/pic of chrome extension.png'/>
                <div className="px-6 pb-4">
                    <div className="font-mono font-bold text-gray-600 text-xl mb-2">Chrome Extension</div>
                    <p className="font-mono text-gray-600 text-base text-left">
                        I built a Chrome extension where users can get easy understanding of their browser productivity through visualizations, graphs, meaningful stats.
                    </p>
                </div>
            </div>
            <div className="max-w-sm rounded-lg overflow-hidden border-2 border-gray-500 shadow-lg mx-5">
                <img className="w-full p-4" src='src/assets/RandomeGallerypix.png'/>
                <div className="px-6 pb-4">
                    <div className="font-mono font-bold text-gray-600 text-xl mb-2">Virtual Gallery</div>
                    <p className="font-mono text-gray-600 text-base text-left">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab nostrum voluptas, sit cumque veritatis facilis!</p>
                </div>
            </div>
            <div className="max-w-sm rounded-lg overflow-hidden border-2 border-gray-500 shadow-lg mx-5">
                <img className="w-full p-4" src='src/assets/ContactTracker.png'/>
                <div className="px-6 pb-4">
                    <div className="font-mono font-bold text-gray-600 text-xl mb-2">Contact Tracker</div>
                    <p className="font-mono text-gray-600 text-base text-left">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab nostrum voluptas, sit cumque veritatis facilis!</p>
                </div>
            </div>
        </div>
        <div className='mt-5'>
            <button><p className='font-mono text-gray-600 hover:text-gray-300'>See more</p></button>
        </div>
        <div className="mt-2 border-b border-2 border-gray-600"></div>
    </>
  )
}
