import Achievements from './Achievements';
import Blogs from './Blogs';
import Brands from './Brands';
import Challengign from './Challenging';
import RecentProject from './RecentProject';
import Reviews from './Reviews';
import WhatWeCan from './WhatWeCan';
import Join from './Join';

export default function Main() {
    return(
        <>
            <WhatWeCan />
            <Challengign />
            <Reviews />
            <Brands />
            <RecentProject />
            <Achievements />
            <Blogs />
            <Join />
        </>
    )
}