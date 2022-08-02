import React from "react";
import { Link } from 'react-router-dom';
import axios from '../../../utils/axios';
// import User from '../../../assets/images/user.jpg';
import { MdClear } from 'react-icons/md';
import { RiShieldUserFill } from 'react-icons/ri';
import { FaTasks, FaUserCircle } from 'react-icons/fa';
import { getDate } from '../../../utils/utility';
import { useNavigate } from 'react-router-dom'

const Notification = () => {
    const [notifications, setNotifications] = React.useState([]);

    React.useEffect(() => {
        getAllNotifications();
    }, []);

    const getAllNotifications = () => {
        axios.get('/notification/getAllNotifications')
            .then(res => {
                setNotifications(res.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    setInterval(() => {
        getAllNotifications();
    }, 5000);


    const userCategory = {
        "User": <FaUserCircle className="w-4 h-4 text-white" />,
        "Admin": <RiShieldUserFill className="w-4 h-4 text-white" />,
    }

    const [category, setCategory] = React.useState('all');

    const notificationCategory = {
        "all": notifications,
        "unread": notifications.filter(notification => notification.isSeen === false)
    }

    // publish, request, post, comment, join etc

    const allNotification = notificationCategory[category];

    const removeNotification = (id) => {
        axios.post('/notification/removeNotification', { id })
            .then(res => {
                console.log(res.data);
                setNotifications(notifications.filter(notification => notification._id !== id));
            })
            .catch(err => {
                console.log(err.message);
            });
    }

    let navigate = useNavigate();

    const goToAnother = (notificationId, postId) => {
        axios.post('/notification/setSeenNotification', { id: notificationId })
            .then(res => {
                navigate(`/posts?postId=${postId}`);
            })
            .catch(err => {
                console.log(err.message);
            });
    }

    return <section className='lg:w-[500px] w-[90%] md:w-[60%] lg:ml-14 sm:mt-10 mt-5 md:mt-16 lg:mt-0'>
        <h6 className='text-xl sm:text-2xl mt-5 lg:mt-0 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-yellow-500'>Notifications</h6>
        <div className="mt-3 mb-5 flex ">
            <div className="relative ">
                <button
                    className={`font-medium transition bg-gray-200 px-4 py-1 rounded-3xl hover:bg-blue-600 hover:text-white ${category === 'all' ? 'bg-blue-600 text-white' : 'text-gray-600'} `}
                    onClick={() => setCategory('all')}
                >
                    All
                </button>
                <div
                    className="text-blue-700 absolute -top-2 -right-2 w-6 h-6 text-center font-normal text-sm rounded-full flex justify-center items-center shadow-sm bg-white"
                >{notificationCategory['all'].length}</div>
            </div>
            <div className="relative ml-5">
                <button
                    className={`font-medium transition bg-gray-200 px-4 py-1 rounded-3xl hover:bg-blue-600 hover:text-white ${category === 'unread' ? 'bg-blue-600 text-white' : 'text-gray-600'} `}
                    onClick={() => setCategory('unread')}
                >Unread</button>
                <div className="text-blue-700 flex justify-center items-center absolute -top-2 -right-2 w-6 h-6 text-center font-normal text-sm rounded-full shadow-sm bg-white">
                    {notificationCategory['unread'].length}
                </div>
            </div>
        </div>

        {allNotification.map((notification, index) => {

            const categoryArray = [
                <div
                    onClick={() => goToAnother(notification._id, notification.postData._id)}
                    id="toast-notification"
                    className={`w-full cursor-pointer mb-3 p-4 text-gray-500 ${notification.isSeen ? 'bg-gray-100' : 'bg-white'} bg-white  rounded-lg shadow`} role="alert">
                    <div className="flex">
                        <div className="relative inline-block shrink-0">
                            <img className="h-12 w-12 object-cover rounded-full" src={notification.postData.user.profileImage} alt="Jese Leos" />
                            <span className="absolute bottom-0 right-0 inline-flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full">
                                {userCategory[notification.postData.user.role]}
                            </span>
                        </div>
                        <div className="ml-3 text-sm font-normal">
                            <h5 className="text-sm font-semibold text-gray-900">{notification.postData.user.name}</h5>
                            <div className="text-sm font-normal text-gray-400">
                                {notification.postData.description.length > 50 ? notification.postData.description.slice(0, 50) + '...' : notification.postData.description}
                            </div>
                            <span className="text-xs font-medium text-blue-600 dark:text-blue-500">{getDate(notification.createdAt)}</span>
                        </div>
                        <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-500 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:text-blue-700 hover:bg-gray-100 inline-flex h-8 w-8" data-dismiss-target="#toast-notification" aria-label="Close">
                            <span className="sr-only">Close</span>
                            <MdClear
                                onClick={() => { removeNotification(notification._id) }}
                                className="w-5 h-5"
                            />
                        </button>
                    </div>
                </div>,
                <div
                    onClick={() => goToAnother(notification._id, notification.postData._id)}
                    id="toast-interactive"
                    className={`w-full mb-3 p-4 text-gray-500 ${notification.isSeen ? 'bg-gray-100' : 'bg-white'} bg-white  rounded-lg shadow`}
                    role="alert">
                    <div className="flex">
                        <div className="inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-blue-600 bg-blue-100 rounded-lg">
                            <FaTasks className="w-6 h-6" />
                        </div>
                        <div className="ml-3 text-sm font-normal">
                            <span className="mb-1 text-sm font-semibold text-gray-900">New Task Avaibale</span>
                            <div className="mb-2 text-sm font-normal">
                                <span><span className="text-gray-900">{notification.postData.user.name} </span>
                                    {notification.postData.description.length > 35 ? notification.postData.description.slice(0, 35) + '...' : notification.postData.description}
                                </span>
                            </div>
                            <span className="text-xs font-medium text-blue-600 dark:text-blue-500">{getDate(notification.createdAt)}</span>
                            <div className="grid grid-cols-3 gap-2 mt-2">
                                <div>
                                    <Link to="#" className="inline-flex justify-center w-full py-1.5 px-2 text-xs font-bold text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300">Accept</Link>
                                </div>
                                <div>
                                    <Link to="#" className="inline-flex justify-center w-full py-1.5 text-xs px-2 font-bold text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200">Not now</Link>
                                </div>
                            </div>
                        </div>
                        <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-500 hover:text-blue-700 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8" data-dismiss-target="#toast-interactive" aria-label="Close">
                            <span className="sr-only">Close</span>
                            <MdClear
                                className="w-5 h-5"
                                onClick={() => { removeNotification(notification._id) }}
                            />
                        </button>
                    </div>
                </div>
            ];
            return <React.Fragment key={index}>
                {categoryArray[parseInt(notification.postData.category.id)]}
            </React.Fragment>
        })}


    </section >
}


export default Notification;