import React from 'react';
import VolunteerInfo from './VolunteerInfo';

const card = [
    {
        id: 1,
        name: 'Child Support',
        img: 'childSupport.png'
    },
    {
        id: 2,
        name: 'Refuse Shelter',
        img: 'refuseShelter.png'
    },
    {
        id: 3,
        name: 'Baby Sit',
        img: 'babySit.png'
    },
    {
        id: 4,
        name: 'Animal Shelter',
        img: 'animalShelter.png'
    },
    {
        id: 5,
        name: 'Bird House',
        img: 'birdHouse.png'
    },
    {
        id: 6,
        name: 'Clean Water',
        img: 'cleanWater.png'
    },
    {
        id: 7,
        name: 'Clearn Park',
        img: 'clearnPark.png'
    },
    {
        id: 8,
        name: 'Cloth Swap',
        img: 'clothSwap.png'
    },
    {
        id: 9,
        name: 'Drive Safety',
        img: 'driveSafety.png'
    },
    {
        id: 10,
        name: 'Stuffed Animals',
        img: 'stuffedAnimals.png'
    },
    {
        id: 11,
        name: 'Food Charity',
        img: 'foodCharity.png'
    },
    {
        id: 12,
        name: 'Good Education',
        img: 'goodEducation.png'
    },
    {
        id: 13,
        name: 'Vote Register',
        img: 'voteRegister.png'
    },
    {
        id: 14,
        name: 'IT Help',
        img: 'ITHelp.png'
    },
    {
        id: 15,
        name: 'Library Books',
        img: 'libraryBooks.png'
    },
    {
        id: 16,
        name: 'Music Lessons',
        img: 'musicLessons.png'
    },
    {
        id: 17,
        name: 'New Books',
        img: 'newBooks.png'
    },
    {
        id: 18,
        name: 'RiverClean',
        img: 'riverClean.png'
    },
    {
        id: 19,
        name: 'School Suffiles',
        img: 'schoolSuffiles.png'
    },
    {
        id: 20,
        name: 'Study Group',
        img: 'studyGroup.png'
    },
]

const VolunteerCard = () => {
    return (
        <div className="row mx-5 px-5 mt-5">
            {
                card.map(cd => <VolunteerInfo card={cd}></VolunteerInfo>)
            }
        </div>
    );
};

export default VolunteerCard;