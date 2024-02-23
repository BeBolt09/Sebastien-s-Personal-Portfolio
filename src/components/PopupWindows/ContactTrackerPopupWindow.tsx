export const ContactTrackerPopupWindows = ({ onClose }: { onClose: () => void }) => {
    return (
      <>
              <div id='chrome-extension' className='fixed my-36 mx-64 max-h max-w rounded-2xl inset-0 border-2 border-gray-600 bg-white drop-shadow-2xl bg-white'>
                  <button onClick={onClose}> <img src="/closebtn.webp" className='h-10 fixed right-4 top-4'/> </button>
                  <div className='flex flex-col lg:flex-row px-14'>
                      <div className='flex items-left justify-items-start border-2 border-gray-600  my-16' style={{ flex: '6' }}>
                        <img src="/ContactTracker.png" className='w-full object-contain'/>
                      </div>
              
                      <div className='flex flex-col justify-items-end m-2 '  style={{ flex: '4' }}>
                          <p className='font-mono text-sm text-left text-gray-600 p-2 pt-16 pb-6'>
                          Developed a Contact Tracker App using React. Implemented features for adding, editing, and deleting contacts, along with advanced search capabilities. Prioritized user experience through comprehensive error handling and demonstrated mastery in React Router, state management, and CRUD operations. The dynamic contact management application reflects a keen focus on user interactions and error resilience.
                          </p>
                          <div className=''>
                            <a href="https://contact-tracker.netlify.app/" target="_blank">
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
  