export const ChromePopupWindows = ({ onClose }: { onClose: () => void }) => {
  return (
    <>
            <div id='chrome-extension' className='fixed my-36 mx-64 max-h max-w rounded-2xl inset-0 border-2 border-gray-600 bg-white drop-shadow-2xl'>
                <button onClick={onClose}> <img src="/closebtn.webp" className='h-10 fixed right-4 top-4'/> </button>
                <div className='flex flex-col lg:flex-row px-14'>
                    <div className='flex items-left justify-items-start border-2 border-gray-600 m-2 my-16' style={{ flex: '6' }}>
                        <img src="/chrome-extension.png" className='w-full object-contain'/>
                    </div>
            
                    <div className='flex flex-col justify-items-end m-2 '  style={{ flex: '4' }}>
                        <p className='font-mono text-left text-gray-600 p-2 pt-16 pb-6'>
                        Built a modern Chrome Extension with a React.js, Vite and Manifest V3 App that communicates with my Flask API that I created for the backend processing of the user's information.Use this chrome extension to get detailed stats and graphs about your browser productivity and usage!
                        </p>
                        <div className=''>
                            <a href="https://chromewebstore.google.com/detail/history-stats-visualizer/idfgioaelkhjhfbfejjoakojomfaojig" target="_blank">
                                <button className='bg-blue-400 rounded-lg justify-items-center'>
                                    <p className='px-14 py-4'>View</p>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}
