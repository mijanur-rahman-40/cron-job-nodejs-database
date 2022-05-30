import React from 'react';
import './App.css';

function App() {
    const [isOpened, setIsOpened] = React.useState(false);
    const [selected, onSelect] = React.useState('');


    const onChangeInput = () => {

    }

    const options = [
        {
            id: 0,
            text: 'Dashboard1'
        },
        {
            id: 1,
            text: 'Dashboard2'
        },
        {
            id: 2,
            text: 'Dashboard3'
        },
        {
            id: 3,
            text: 'Dashboard4'
        }
    ]

    return <div className='debug-screens bg-slate-100 min-h-screen py-10'>
        <div className='flex justify-center'>
            <div className='container w-3/4 md:w-2/5'>
                <h1 className='text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-yellow-500'>Simple Notification System</h1>
                <div className='text-indigo-400 py-2 mt-8 font-medium'>
                    <p>Fill the input fields to test the system.</p>
                </div>
                <form className="space-y-6">
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label className="sr-only">Task name</label>
                            <input
                                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:border-2 focus:z-10 sm:text-sm"
                                placeholder="Task name"
                                onFocus={_ => setIsOpened(false)}
                            />
                        </div>
                        <div
                            onClick={_ => setIsOpened(true)}
                            className={`w-full px-3 py-3 ${ isOpened ? 'border-indigo-500 border-2' : 'border border-gray-300' }  bg-white flex justify-between text-gray-900  focus:z-10 sm:text-sm`}>
                            <label className='text-gray-500'>{selected ? selected : 'Select task category'}</label>
                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                        {isOpened &&
                            <div className="z-10 absolute bg-white divide-y divide-gray-100 rounded shadow w-72">
                                <ul className="py-1 text-sm text-gray-500" >
                                    {options.map((option, index) =>
                                        <li key={index} className="block px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-gray-600" onClick={_ => { setIsOpened(false); onSelect(option.text) }}>{option.text}</li>
                                    )}
                                </ul>
                            </div>}
                        <div>
                            <textarea
                                onFocus={_ => setIsOpened(false)}
                                className="appearance-none resize-none h-40 rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-2 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Description" />
                        </div>
                    </div>
                    <button
                        type="button"
                        className="w-full focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-3 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Submit</button>
                </form>
                <section className='py-5'>
                    <h6 className='text-xl sm:text-2xl py-5 font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-yellow-500'>All Notifications</h6>


                    <div id="toast-notification" className="w-full p-4 bg-white rounded-lg shadow hover:bg-indigo-200 cursor-pointer" role="alert">
                        <div className="flex items-center">
                            <div className="relative inline-block shrink-0">
                                <img className="h-12 rounded-full" src="https://scontent.fzyl1-1.fna.fbcdn.net/v/t1.6435-1/163047369_1127326441117399_5963185590511548656_n.jpg?stp=dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeF88TPaBqiH4YHY25K5_DgmxT6u1uWqOXnFPq7W5ao5eaQGoLs4H3arbgStpjnlG7bk6CLVZF68k6kehgU6oJYm&_nc_ohc=V2h0lPWU-uAAX9AJBno&_nc_ht=scontent.fzyl1-1.fna&oh=00_AT-QUy8sH1EdYyxvJYd3mbI7tMh-1lP4wzGnoJUGK-y7iw&oe=62BA6A5F" alt="Jese Leos" />
                                <span className="absolute bottom-0 right-0 inline-flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                                </span>
                            </div>
                            <div className="ml-3 text-sm font-normal">
                                <h5 className="text-sm font-semibold text-gray-900">Bonnie Green</h5>
                                <div className="text-sm font-normal text-gray-400">commented on your photo</div>
                                <span className="text-xs font-medium text-blue-600 dark:text-blue-500">a few seconds ago</span>
                            </div>
                            <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-500 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:text-indigo-900 inline-flex h-8 w-8" data-dismiss-target="#toast-notification" aria-label="Close">
                                <span className="sr-only">Close</span>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>
                    </div>

                    <div id="toast-interactive" className="w-full mt-3 p-4 text-gray-500 bg-white rounded-lg shadow  dark:text-gray-400" role="alert">
                        <div className="flex">
                            <div className="inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-blue-600 bg-blue-100 rounded-lg">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"></path></svg>
                            </div>
                            <div className="ml-3 text-sm font-normal">
                                <span className="mb-1 text-sm font-semibold text-gray-900">Update available</span>
                                <div className="mb-2 text-sm font-normal text-gray-400">A new software version is available for download.</div>
                                <div className="grid grid-cols-3 gap-2">
                                    <div>
                                        <a href="#" className="inline-flex justify-center w-full py-1.5 text-xs font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 ">Update</a>
                                    </div>
                                    <div>
                                        <a href="#" className="inline-flex justify-center w-full py-1.5 text-xs font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200">Not now</a>
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-500 hover:text-blue-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8" data-dismiss-target="#toast-interactive" aria-label="Close">
                                <span className="sr-only">Close</span>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    </div>
}

export default App;