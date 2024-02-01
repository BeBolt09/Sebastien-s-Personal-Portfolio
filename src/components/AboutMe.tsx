export default function AboutMe() {
  return (
    <>
    <div className='flex justify-center pt-20'>
        <div className='font-mono text-3xl text-gray-600'>About Me</div> 
        <img src="src/assets/hat.svg" className='ml-3 h-10 w-auto'/>
    </div>
    <div className='flex pt-5'>
        <img src="src/assets/Belgium outline.gif" className=""/>
        <div>
            <p className='font-mono text-left text-gray-600 m-5'>
                I was born and raised in Belgium, specifically in a small town called 
                Saint-Hubert, where my local elementary school only had around 20 students 
                from grades 1 to 6. 
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
                <button className="flex py-2 rounded-md border-2 border-gray-600 px-5 hover:font-bold">
                    <p className="text-dark font-mono p-2">What got me into tech</p>
                    <img src="src/assets/arrow-right.svg" className="h-10 w-auto" />
                </button>
            </div>
        </div>
    </div>

    <div className="mt-10 border-b border-2 border-gray-600"></div>
    </>
  )
}
