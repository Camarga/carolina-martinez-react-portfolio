import React from "react";
import profilePicture from "../../../static/assets/images/bio/devcamp.jpg";

export default function() {
    return (
        <div className="content-page-wrapper">
            <div 
                className="left-column"
                style={{
                    background: "url(" + profilePicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
             />
            <div className="right-column">
                So I want you to imagine that you are working for a development company or you are just building out your own application. You've been handed this task, you've been told exactly what you are supposed to go build, and then I want you to pause the video right now, and I want you to go do it. You have already learned each one of the skills needed in order to implement this.
                So, in review, I want you to have an image that takes up exactly 50% of the width and 100% of the height on the left-hand side here, and then I want you to have content that is centered on the right-hand side. Feel free to pause the video now and I'm going to start showing my own personal solution for implementing this.

                So, I'm going to start by creating a dedicated layout file. So, I'm gonna open up main here and I'm gonna create a new file here called import and called layouts, then I'm gonna copy layouts before hitting save, and I'm going to add that to our style directory. And this is where I'm gonna place all of the styles for our layout, this is going to work both for our About page and our Contact page.
            </div>
        </div>
    ); 
}