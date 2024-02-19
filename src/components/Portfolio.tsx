import { useState } from "react"
import { PopupWindows } from "./PopupWindows"


export default function Portfolio() {
    const [seePopup,setSeePopup] = useState(false)
    const handleSeePopupClick =() => {
        setSeePopup(!seePopup)
    }
    
    const [seeMore, setSeeMore] = useState(true)
    const [seeLess, setSeeLess] = useState(false)
    const [showMore, setShowMore] = useState(false);
    const handleSeeMoreClick = () => {
      setShowMore(!showMore);
      setSeeMore(!seeMore);
      setSeeLess(!seeLess);
    };

  return (
    <>
        <div className='flex justify-center pt-20'>
            <div className='font-mono text-3xl text-gray-600'>My works</div> 
            <img src="/workicon.svg" className='ml-3 h-10 w-auto'/>
        </div>

        {/* <div className='flex lg:flex-row sm:flex-col items-center justify-center mt-5 '> */}
        {/* <div className='flex flex-col lg:flex-row md:flex-col sm:flex-col items-center justify-center mt-5'> */}
        <div className='grid lg:grid-cols-3 md:grid-cols-1 place-items-center gap-5 mt-5'>
            <div className="max-w-sm rounded-lg overflow-hidden border-2 border-gray-500 shadow-lg mx-5">
                <video autoPlay loop muted playsInline src="/Lesson Planner Demo .mp4" className="rounded w-full px-4 pt-10 pb-9"/>
                <div className="px-6 pb-4">
                    <div className="font-mono font-bold text-gray-600 text-xl mb-2">Lesson Planner</div>
                    <p className="font-mono text-gray-600 text-base text-left">
                        I created a Lesson Planner application that let's anyone generate lesson plans with AI by entering subject, grade level and time frame.
                    </p>
                </div>
            </div>
            <button onClick={handleSeePopupClick}>
                <div className="max-w-sm rounded-lg overflow-hidden border-2 border-gray-500 shadow-lg mx-5">
                    <img className="w-full p-4" src='/chrome-extension.png'/>
                    <div className="px-6 pb-4">
                        <div className="font-mono font-bold text-gray-600 text-xl mb-2">Chrome Extension</div>
                        <p className="font-mono text-gray-600 text-base text-left">
                            Chrome extension where users can get easy understanding of their browser productivity through visualizations, graphs, meaningful stats.
                        </p>
                    </div>
                </div>
            </button>
            <div className="max-w-sm rounded-lg overflow-hidden border-2 border-gray-500 shadow-lg mx-5">
                <img className="w-full p-4" src='/RecipeMaker.png'/>
                <div className="px-6 pb-4">
                    <div className="font-mono font-bold text-gray-600 text-xl mb-2">Recipe Generator</div>
                    <p className="font-mono text-gray-600 text-base text-left">
                        Don't know what to make with what's in your fridge? Just open up this recipe generator, enter the ingredients you have, and find out what you can make!
                    </p>
                </div>
            </div>
            {showMore && (
            <>
            <div className="max-w-sm rounded-lg overflow-hidden border-2 border-gray-500 shadow-lg mx-5">
                <img className="w-full p-4" src='/RandomeGallerypix.png'/>
                <div className="px-6 pb-4">
                    <div className="font-mono font-bold text-gray-600 text-xl mb-2">Virtual Gallery</div>
                    <p className="font-mono text-gray-600 text-base text-left">
                        Website that showcases a random piece of art and it's corresponding title and description from the Art Institute of Chicago's Gallery.
                    </p>
                </div>
            </div>
            <div className="max-w-sm rounded-lg overflow-hidden border-2 border-gray-500 shadow-lg mx-5">
                <img className="w-full p-4" src='/ContactTracker.png'/>
                <div className="px-6 pb-4">
                    <div className="font-mono font-bold text-gray-600 text-xl mb-2">Contact Tracker</div>
                    <p className="font-mono text-gray-600 text-base text-left">
                        Web App that allows you to create, retrieve, update and delete contacts. Save the Name, twitter account, image and notes on someone.
                    </p>
                </div>
            </div>
            </> 
        )}
        </div>
        <div className='mt-5'>
            {seeMore && (<button onClick={handleSeeMoreClick}><p className='font-mono text-gray-600 hover:text-gray-300'>See more</p></button>) }
            {seeLess && (<button onClick={handleSeeMoreClick}><p className='font-mono text-gray-600 hover:text-gray-300'>See less</p></button>)}
        </div>
        <div className="mt-2 border-b border-2 border-gray-600"></div>

        {seePopup && <PopupWindows onClose={handleSeePopupClick}/>}
        
    </>
  )
}
