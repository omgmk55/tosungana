import React from 'react';
import Hero from '../components/Hero';
import Mission from '../components/Mission';
import Impact from '../components/Impact';
import HomeCards from '../components/HomeCards';
import EventCountdown from '../components/EventCountdown';
import CrowdfundingCards from '../components/CrowdfundingCards';

const Home = () => {
    return (
        <div>
            <Hero />
            <EventCountdown />
            <CrowdfundingCards />
            <HomeCards />
            <Mission />
            <Impact />
        </div>
    );
};

export default Home;
