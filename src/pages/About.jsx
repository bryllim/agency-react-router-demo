import { useState, useEffect } from "react";
import { db } from '../firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';

function About(){

    const [data, setData] = useState([]);

    const [newStudent, setNewStudent] = useState({
        id: 0,
        firstname: '',
        lastname: '',
        grade: 0,
    })

    function handleFirstName(e){
        setNewStudent({...newStudent, firstname: e.target.value})
    }
    function handleLastName(e){
        setNewStudent({...newStudent, lastname: e.target.value})
    }
    function handleGrade(e){
        setNewStudent({...newStudent, grade: e.target.value})
    }

    const addStudent = async() =>{

        const docRef = await addDoc(collection(db, 'students'), {
            firstname: newStudent.firstname,
            lastname: newStudent.lastname,
            grade: newStudent.grade,
        });

        alert(`New student added!`);
        fetchData();
    }


    const fetchData = async () => {

        const querySnapshot = await getDocs(collection(db, "students"));
        const fetchedData = querySnapshot.docs.map((doc) => doc.data());

        setData(fetchedData);
    }

    useEffect(()=>{


        fetchData();

    }, []);

    return(
        <section className="container p-5">

            {/* Input area */}
            <input type="text" onChange={handleFirstName} className="form-control my-2" placeholder="First name"/>
            <input type="text" onChange={handleLastName} className="form-control my-2" placeholder="Last name"/>
            <input type="number" onChange={handleGrade} className="form-control my-2" placeholder="Grade"/>
            <button onClick={addStudent} className="btn btn-success">Add Student</button>
            <hr />

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