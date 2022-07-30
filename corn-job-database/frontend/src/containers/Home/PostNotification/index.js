import React from "react";
import axios from '../../../utility/axios';

const PostNotification = ({ post }) => {
    const options = [
        {
            id: 0,
            text: 'Task type 1'
        },
        {
            id: 1,
            text: 'Task type 2'
        },
        {
            id: 2,
            text: 'Task type 3'
        },
        {
            id: 3,
            text: 'Task type 4'
        }
    ];

    const [formData, setFormData] = React.useState({
        taskName: '',
        category: '',
        description: '',
    });

    const [message, setMessage] = React.useState('');

    const onChangeInput = (value, name) => {
        setFormData({ ...formData, [name]: value });
    }

    const onSubmit = () => {
        if (formData.taskName && formData.category && formData.description) {
            axios.post('/notification/getNotifications', formData)
                .then(res => {
                    setMessage(res.data.message);
                    setTimeout(() => {
                        setMessage('');
                    }, 3000);
                })
                .catch(err => {
                    console.log(err);
                });
        }
        else {
            setMessage('Fill out all fields correctly!');
            setTimeout(() => {
                setMessage('');
            }, 3000);
        }
    }

    return <div className='lg:w-[500px] w-[90%] md:w-[60%] '>

        <div className="space-y-6 p-5 md:p-7 bg-white rounded-md shadow-sm">
            <div className='text-indigo-400  mb-2  font-medium'>
                <p>Fill the input fields to test the system.</p>
            </div>
            <form className="font-medium">
                <div>
                    <label className="sr-only">Task name</label>
                    <input
                        className="appearance-none rounded w-full px-3 py-2.5 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:border-2"
                        placeholder="Task name"
                        name='taskName'
                    // value={taskName}
                    // onChange={event => onChangeInput(event.target.value, event.target.name)}
                    // onFocus={_ => setIsOpened(false)}
                    />
                </div>
                <button
                    id="dropdownDefault"
                    data-dropdown-toggle="dropdown" className="my-4 border border-gray-300 text-gray-500 w-full  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:border-2  rounded px-3 py-2.5 text-center inline-flex justify-between items-center"
                    type="button">Dropdown button
                    <svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7">
                        </path>
                    </svg>
                </button>

                <div id="dropdown" className="hidden  z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow">
                    <ul className="py-1 text-sm text-gray-600" aria-labelledby="dropdownDefault">
                        <li>
                            <a href="#" className="block py-2 px-4 hover:bg-gray-100">Dashboard</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 ">Settings</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 ">Earnings</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 ">Sign out</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <textarea
                        className="appearance-none resize-none h-40 mb-4 rounded w-full px-3 py-2.5 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-2 focus:border-indigo-500" placeholder="Description"
                        name='description'
                    // value={description}
                    />
                </div>
                <button
                    onClick={onSubmit}
                    type="submit"
                    className="w-full focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-3 my-4 ">Submit</button>
            </form>
        </div>
    </div>
}

export default PostNotification;