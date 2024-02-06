import { useState } from "react";
import CardFlip from "react-card-flip";

export default function AboutMe() {

    const [isFlipped, setIsFlipped] = useState(false)
    const handleFlip= () => {
        setIsFlipped(!isFlipped);
    }

  return (
    <>
        <div className='flex justify-center pt-20'>
            <div className='font-mono text-3xl text-gray-600'>About Me</div> 
            <img src="/hat.svg" className='ml-3 h-10 w-auto'/>
        </div>
        <CardFlip isFlipped={isFlipped}>
            <div key='front' className='flex flex-col lg:flex-row md:flex-col sm:flex-col pt-5'>
                <img src="/Belgium outline.gif" className="object-contain"/>
                    <div>
                        <p className='font-mono text-left text-gray-600 m-5'>
                            I was born and raised in Belgium, specifically in a small town called Saint-Hubert, 
                            where my local elementary school only had around 20 students from grades 1 to 6.
                        </p>
                        <p className='font-mono text-left text-gray-600 m-5'>
                            Upon my mother's suggestion, an American, I decided to experience high 
                            school in California, where she had grown up. I arrived in Santa Barbara 
                            in 2017, facing the challenge of adapting to a new environment.
                        </p>
                        <p className='font-mono text-left text-gray-600 m-5'>
                            Making friends wasn't easy, but my soccer skills impressed many people, 
                            and I managed to find a group of individuals willing to teach me the local 
                            ways of living in Santa Barbara. Little did I know that I would make some 
                            of my best friends that year.
                        </p>
                        <div className="flex justify-center py-5">
                            <button onClick={handleFlip} className="flex py-2 rounded-md border-2 border-gray-600 px-5 hover:font-bold">
                                <p className="text-gray-600 font-mono p-2">What got me into tech</p>
                                <img src="/arrow-right.svg" className="h-10 w-auto" />
                            </button>
                        </div>
                    </div>
            </div>
            <div key='back' className='flex flex-col lg:flex-row md:flex-col sm:flex-col mb-16 pt-5'>
                <div>
                        <p className='font-mono text-left text-gray-600 m-5'>
                            I've always been interested in technology. 
                            When I was around 12, my friends and I started messing around with game 
                            files to get free access to paid features on Minecraft servers. We got banned, 
                            but it taught us a bit about what coding was. 
                        </p>
                        <p className='font-mono text-left text-gray-600 m-5'>
                            As my first laptop got older, I learned about gaming desktops. Since my family 
                            didn't have a big budget, I decided to build my own gaming PC and was successful!
                            I ended up building five computers in total for myself, family, and friends. Surprisingly, all 
                            these computers still work today.
                        </p>
                        <p className='font-mono text-left text-gray-600 m-5'>
                        Introduced to coding in high school, I learned JAVA and pursued further studies in various 
                        languages at Santa Barbara City College, culminating in my certification from Coding Temple's 
                        Full Stack Software Engineering Bootcamp.
                        </p>
                        <div className="flex justify-center py-5">
                            <button onClick={handleFlip} className="flex py-2 rounded-md border-2 border-gray-600 px-5 hover:font-bold">
                                <p className="text-gray-600 font-mono p-2">My upbringing</p>
                                <img src="/arrow-right.svg" className="h-10 w-auto" />
                            </button>
                        </div>
                    </div>
                    <img src="/computer-outlined.webp" className="w-5/12 object-contain"/>
            </div>
        </CardFlip>
        <div className="mt-10 border-b border-2 border-gray-600"></div>
    </>
  )
}
