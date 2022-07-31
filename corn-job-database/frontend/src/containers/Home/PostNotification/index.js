import React from "react";
import axios from '../../../utility/axios';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { PulseLoader } from "react-spinners";

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
        }
    ];

    const [formData, setFormData] = React.useState({
        taskName: '',
        category: '',
        description: '',
    });

    const [message, setMessage] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const onChangeInput = (value, name) => {
        setFormData({ ...formData, [name]: value });
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (formData.taskName && formData.category && formData.description) {
            setLoading(true);
            setFormData({ ...formData, taskName: '', category: '', description: '' });
            axios.post('/post/addNewPost', formData)
                .then(res => {
                    setLoading(false);
                    setMessage(res.data.message);
                    setTimeout(() => {
                        setMessage('');
                    }, 3000);
                })
                .catch(error => {
                    setMessage(error.response.data.message);
                    setLoading(false);
                });
        }
        else {
            setMessage('Fill out all fields correctly!');
            setTimeout(() => {
                setMessage('');
            }, 3000);
        }
    }

    const { taskName, description, category } = formData;

    return <div className='lg:w-[500px] w-[90%] md:w-[60%] '>
        <div className="space-y-6 px-5 py-2 md:px-7 bg-white rounded-lg shadow-sm">
            <div className='w-full'>
                {message && <div className="p-2  mt-2 font-normal text-lg text-blue-500 bg-gray-100 rounded-lg" role="alert">
                    <span className="font-medium">{message}</span>
                </div>}
            </div>
            <div className='text-gray-900 font-medium text-lg'>
                <h6>Fill the input fields to test the system.</h6>
            </div>
            <form className="font-medium" onSubmit={onSubmit}>
                <div>
                    <label className="sr-only">Task name</label>
                    <input
                        className="appearance-none rounded-lg w-full px-3 py-2.5 border-2 border-gray-300 placeholder-gray-500 text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:border-2"
                        placeholder="Task name"
                        name='taskName'
                        value={taskName}
                        onChange={event => onChangeInput(event.target.value, event.target.name)}
                    />
                </div>
                <button
                    id="dropdownDefault"
                    data-dropdown-toggle="dropdown" className="my-4 border border-gray-300 text-gray-700 w-full  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:border-2  rounded-lg px-3 py-2 text-center inline-flex justify-between items-center"
                    type="button">
                    {category ? category : 'Select task type'}
                    <RiArrowDropDownLine className="ml-2 w-8 h-8" />
                </button>

                <div id="dropdown" className="hidden  z-10 w-44 bg-white rounded-lg divide-y divide-gray-100 shadow">
                    <ul className="py-1 text-sm font-normal text-gray-700" aria-labelledby="dropdownDefault">
                        {options.map((option, index) => {
                            return <li
                                key={index}
                                className="py-2 px-4 hover:bg-gray-100"
                                onClick={(event) => onChangeInput(option.text, 'category')}
                            >
                                {option.text}
                            </li>
                        })}
                    </ul>
                </div>
                <div>
                    <textarea
                        className="appearance-none resize-none h-40 mb-4 rounded-lg w-full px-3 py-2.5 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-2 focus:border-indigo-500" placeholder="Description"
                        name='description'
                        value={description}
                        onChange={event => onChangeInput(event.target.value, event.target.name)}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full focus:outline-none text-white font-bold bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 rounded-lg text-sm px-5 py-3 my-4">
                    {loading ? <PulseLoader color="#ffffff" size={10} /> : 'Submit'}
                </button>
            </form>
        </div>
    </div>
}

export default PostNotification;