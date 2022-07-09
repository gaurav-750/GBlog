import { useState, useEffect } from "react";


const useFetch = (url) => {
    console.log("in usefetch:", url)
    
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState('');


    //We can use useEffect to fire a function everytime the component renders itself!
    useEffect(() => { //This function is going to load everytime the component renders
        console.log('useEffect!');

        fetch(url)
            .then((res) => {
                if (!res.ok) { //if the req.cannot be fetched, throw an error => it'll go in catch block
                    throw Error("Oops! Could not fetch the request!");
                }

                return res.json();
            })
            .then((data) => {
                // console.log('data', data);
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
                setIsPending(false);
            })


    }, [url]);
    
    return {data, isPending, error};
}
//Whatever you put in the dependency array, if that changes, useEffect will take place
//i.e it'll invoke the function inside it

export default useFetch;