const Intro = () => {
  return (
    <>
    <div className='flex'>
        <img src="/CircleProfilePic.png" className='ml-20 h-80 w-auto mt-14'/>
        <div className="ml-10">
            <div id="intro" className="flex items-center justify-start pt-48">
                <div className="text-6xl text-gray-600 font-mono">
                    Sebastien Dupont
                </div>
            </div>
            <div className="flex items-center justify-start">
                <p className="flex-start text-2xl justify-start text-gray-600 font-mono">
                    Full Stack Developer  
                </p>
                <img src="/codeicon.svg" className='h-8 w-auto'/>
                <p className="ml-8 flex-start text-2xl justify-start text-gray-600 font-mono">
                    Software Engineer  
                </p>
                <img src="/comupter.svg" className='h-8 w-auto'/>
            </div>
        </div>
        {/* <img src="/PicOfMe.png" alt="Picture of Sebastien Dupont" className='h-64 w-auto mt-24 ml-44 border border-4 border-gray-600 rounded-lg'/> */}
    </div>

    <div className="mt-2 border-b border-2 border-gray-600"></div>
    </>
  );
};

export default Intro;