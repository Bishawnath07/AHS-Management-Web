

import { useState } from 'react';
import studentData from '../../../public/studentResults.json'; // Importing the JSON file
import Divider from '../Divider/Divider';

function Result() {
    const [rollNumber, setRollNumber] = useState('');
    const [department, setDepartment] = useState('');
    const [semester, setSemester] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleSearch = () => {
        const foundResult = studentData.find(
            (student) => student.rollNumber === rollNumber && student.department === department && student.semester === Number(semester)
        );

        if (foundResult) {
            setResult(foundResult);
            setError(null);
        } else {
            setResult(null);
            setError('Result not found for the given criteria');
        }
    };

    return (
        <div className='my-10'>
            <h1 className='text-[24px] font-semibold grid place-items-center my-5 '>Home  ~ Result</h1>
            <Divider ></Divider>
            <div className='grid place-items-center mt-8'>
                <h1 className='my-3 text-3xl font-bold'>Student Result Search</h1>
                <div className='border-[1px] border-green-400 rounded-lg p-5'>
                    <label>
                        Enter Roll Number:
                        <input type="text" value={rollNumber} onChange={(e) => setRollNumber(e.target.value)} placeholder="Enter Roll Number" className="input input-bordered  w-full max-w-xs" />
                    </label>

                    <h1 className='my-3'>Select Department:</h1>
                    <label>
                        <select value={department} onChange={(e) => setDepartment(e.target.value)} style={{ width: '90%', border: '1px solid #ccc', padding: '5px' }}>
                            <option value="">Select Department</option>
                            <option value="Computer Science">Computer Science</option>
                            <option value="Electrical Engineering">Electrical Engineering</option>
                            <option value="Mechanical Engineering">Mechanical Engineering</option>
                            {/* Add more options as needed */}
                        </select>
                    </label>

                    <h1 className='my-4'>Select Semester:</h1>
                    <label>
                        <select value={semester} onChange={(e) => setSemester(e.target.value)} style={{ width: '90%', border: '1px solid #ccc', padding: '5px' }}>
                            <option value="">Select Semester</option>
                            <option value="1">Semester 1</option>
                            <option value="2">Semester 2</option>
                            <option value="3">Semester 3</option>
                            {/* Add more options as needed */}
                        </select>
                    </label>

                    <button onClick={handleSearch} className="btn mt-4 btn-outline btn-success">Search</button>


                    {result && (
                        <div>
                            <h2>Result:</h2>
                            <p>Name: {result.name}</p>
                            <p>Marks: {result.marks}</p>
                            <p>Department: {result.department}</p>
                            <p>Semester: {result.semester}</p>
                        </div>
                    )}

                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
            </div>
        </div>
    );
}


export default Result;
