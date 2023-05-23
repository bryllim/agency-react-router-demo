import { useState, useEffect } from "react";

function About(){

    const [todo, setTodo] = useState({});

    const [count, setCount] = useState(1);

    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/'+count);
        const json = await response.json();
        setTodo(json);
        setIsLoading(false);
    };

    useEffect(() =>{
        fetchData();
    }, [count])

    return(
        <>
            
            <h1>
                {isLoading ? (<div className="spinner-border text-dark" role="status"></div>) : todo.title}
            </h1>

            <button onClick={
                () => {
                    setCount(count + 1)
                }
            } className="btn btn-dark my-5">Get todo</button>
        </>
    )
}

export default About;