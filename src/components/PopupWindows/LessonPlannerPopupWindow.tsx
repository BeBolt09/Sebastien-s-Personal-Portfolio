export const LessonPlannerPopupWindows = ({ onClose }: { onClose: () => void }) => {
    return (
      <>
              <div id='chrome-extension' className='fixed my-44 mx-64 max-h max-w rounded-2xl inset-0 border-2 border-gray-600 bg-white drop-shadow-2xl'>
                  <button onClick={onClose}> <img src="/closebtn.webp" className='h-10 fixed right-4 top-4'/> </button>
                  <div className='flex flex-col lg:flex-row px-14'>
                      <div className='flex items-left justify-items-start border-2 border-gray-600  my-16' style={{ flex: '6' }}>
                        <video autoPlay loop muted playsInline src="/Lesson Planner Demo .mp4" className='w-full object-contain'/>
                      </div>
              
                      <div className='flex flex-col justify-items-end m-2 '  style={{ flex: '4' }}>
                          <p className='font-mono text-left text-gray-600 p-2 pt-24 pb-6'>
                              AI Lesson planner made with React.js, Vite, Gemini API, ReactRouter, Netlify, TypeScript, TailwindCSS.
                          </p>
                          <div className=''>
                            <a href="https://teacher-lesson-planner.netlify.app/" target="_blank">
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
  