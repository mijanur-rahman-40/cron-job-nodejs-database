import React from 'react';


import Notification from './Home/Notifications';
import PostNotification from './Home/PostNotification';

export { Services } from './Services';
export { Posts } from './Posts';

export const Home = () => {
    return <React.Fragment>
        <PostNotification />
        <Notification />
    </React.Fragment>
}
