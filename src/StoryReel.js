import React from 'react';
import Story from './Story';
import './StoryReel.css';


function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                image="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                profileSrc="https://randomwordgenerator.com/img/picture-generator/52e9d3414854aa14f1dc8460962e33791c3ad6e04e507441722a72dd964bc7_640.jpg"
                title="Story_1"
            />
            <Story
                image="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                profileSrc="https://randomwordgenerator.com/img/picture-generator/53e0d2474f56ac14f1dc8460962e33791c3ad6e04e50744172277fd7964ec6_640.jpg"
                title="Story_2"
            />
            <Story
                image="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                profileSrc="https://randomwordgenerator.com/img/picture-generator/52e9d3414854aa14f1dc8460962e33791c3ad6e04e507441722a72dd964bc7_640.jpg"
                title="Story_3"
            />
            <Story
                image="https://randomwordgenerator.com/img/picture-generator/54e3d1474b57ac14f1dc8460962e33791c3ad6e04e507441722a72dc954ac3_640.jpg"
                profileSrc="https://randomwordgenerator.com/img/picture-generator/52e9d3414854aa14f1dc8460962e33791c3ad6e04e507441722a72dd964bc7_640.jpg"
                title="Story_4"
            />
            <Story
                image="https://randomwordgenerator.com/img/picture-generator/53e4d2424d53aa14f1dc8460962e33791c3ad6e04e507440722d7cd3924cc2_640.jpg"
                profileSrc="https://randomwordgenerator.com/img/picture-generator/52e9d3414854aa14f1dc8460962e33791c3ad6e04e507441722a72dd964bc7_640.jpg"
                title="Story_5"
            />
        </div>
    )
}

export default StoryReel