import { useState, useEffect } from "react";
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

function About(){

    const [data, setData] = useState([]);

    const [exampleState, setExampleState] = useState(0);

    useEffect(()=>{

        const fetchData = async () => {

            const querySnapshot = await getDocs(collection(db, "students"));
            const fetchedData = querySnapshot.docs.map((doc) => doc.data());

            setData(fetchedData);
        }

        fetchData();

    }, [exampleState]);

    return(
        <section className="container p-5">
            <button onClick={()=>{
                setExampleState(exampleState + 1)
            }}>{exampleState}</button>
            <div className="row">

                {data.map((student) => (
                    <div key={student.id} className="col-md-4 d-flex">
                    <div className="card">
                        <div className="card-body">
                            <h1>{student.firstname} {student.lastname}</h1>
                            <div className="alert bg-primary text-white">{student.grade}</div>
                        </div>
                    </div>
                </div>
                ))}
                
            </div>
        </section>
    )
}

export default About;