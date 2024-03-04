import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PopularEpisodes = () => {
    const [showMore, setShowMore] = useState(false);

    const episodes = [
        {
            id: 1,
            title: 'ABC Podcast 33: Live',
            guest: 'Persoo Name',
            pageRout: '/dashboard'
        },
        {
            id: 2,
            title: 'ABC Podcast 33. Live',
            guest: 'Guest Person Name',
            pageRout: '/dashboard'
        },
        {
            id: 3,
            title: 'ABC Podcast 33: Live',
            guest: 'Guest Person Name',
            pageRout: '/dashboard'
        },
        {
            id: 3,
            title: 'ABC Podcast 33: Live',
            guest: 'Guest Person Name',
            pageRout: '/dashboard'
        },
        {
            id: 3,
            title: 'ABC Podcast 33: Live',
            guest: 'Guest Person Name',
            pageRout: '/dashboard'
        },
        {
            id: 4,
            title: 'ABC Podcast 33: Live',
            guest: 'Guest Person Name',
            pageRout: '/'
        },
        // ... more episodes
    ];

    const handleSeeMore = () => {
        setShowMore(!showMore);
    }

    return (
        <div className="col-12 popular-episodes">
            <div className='my-3'>

                <h2>Popular Episodes</h2>
                <button onClick={handleSeeMore} className="btn btn-transparent">
                    {showMore ? 'See Less' : 'See All'}
                </button>
            </div>
            <div className='col-12 popular-episodes-list'>
                <ul className="list-group mb-3">
                    {episodes.slice(0, showMore ? episodes.length : 3).map((episode) => (
                        <Link to={episode.pageRout}>

                            <li key={episode.id} className="list-group-item list-group-item-action text-white bg-transparent">
                                <Avatar size={50} icon={<UserOutlined />} />

                                <div>
                                    <h1>{episode.title}</h1>
                                    <span className="">Guest: {episode.guest}</span>
                                </div>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PopularEpisodes;
