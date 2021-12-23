import React, { useEffect } from 'react';

export const Hello = () => {
    useEffect(() => {
        console.log("rendered hello");

        return () => {
            console.log("called when unmounted")
        }
    })
    useEffect(() => {
        console.log("component did mount rendered hello");

        return () => {
            console.log("component did mount called when unmounted")
        }
    }, [])
    return (
        <div>hello</div>
    )
}