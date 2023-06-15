import React, { useState } from 'react';
import Posts from '../components/Posts';

const Home = () => {
    const [posts, setPosts] = useState([
        { id: 1, title: '1.Last changes in iOS', body: 'Description ... ' },
        { id: 2, title: '1.Last changes in Apple Watch', body: 'Description ... ' },
        { id: 3, title: '1.Last changes in airPods', body: 'Description ... ' },
        { id: 4, title: '1.Last changes in iMini', body: 'Description ... ' },
        { id: 5, title: '1.Last changes in iOS', body: 'Description ... ' },
    ]);
    return (
        <div>
            <h1>Apple Product Review</h1>
            { posts.map(post => <Posts post = { post } key={post.id}/>
            ) }

        </div>
    );
};

export default Home;
