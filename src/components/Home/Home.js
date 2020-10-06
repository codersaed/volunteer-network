import React from 'react';
import Nav from '../Nav/Nav';
import Search from '../Search/Search';
import VolunteerCard from '../VolunteerCard/VolunteerCard';

const Home = () => {
    return (
        <>
           <Nav></Nav> 
           <Search></Search>
           <VolunteerCard></VolunteerCard>
        </>
    );
};

export default Home;