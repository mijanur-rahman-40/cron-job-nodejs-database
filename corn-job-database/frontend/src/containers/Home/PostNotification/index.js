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

    return <div className='w-full mx-10 sm:m-0 sm:w-[40%]'>
        <div className='text-indigo-400 py-2 mt-2 sm:mt-8 font-medium'>
            <p>Fill the input fields to test the system.</p>
        </div>
        <from className="space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
                <div>
                    <label className="sr-only">Task name</label>
                    <input
                        className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:border-2 focus:z-10 sm:text-sm"
                        placeholder="Task name"
                        name='taskName'
                    // value={taskName}
                    // onChange={event => onChangeInput(event.target.value, event.target.name)}
                    // onFocus={_ => setIsOpened(false)}
                    />
                </div>

                <div>
                    <textarea
                        className="appearance-none resize-none h-40 rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-2 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Description"
                        name='description'
                    // value={description}
                    />
                </div>
            </div>
            <button
                onClick={onSubmit}
                type="button"
                className="w-full focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-3 mb-2 ">Submit</button>
        </from>
    </div>
}

export default PostNotification;