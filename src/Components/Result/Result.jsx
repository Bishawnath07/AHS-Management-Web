

import { useState } from 'react';
import studentData from '../../../public/studentResults.json'; // Importing the JSON file
import Divider from '../Divider/Divider';
import Swal from 'sweetalert2';

function Result() {
    const [rollNumber, setRollNumber] = useState('');
    const [semester, setSemester] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    console.log(result, error)
    const handleSearch = () => {
        const foundResult = studentData.find(
            (student) => student.rollNumber === rollNumber
        );

        if (foundResult) {
            setResult(foundResult);
            setError(null);
            Swal.fire({
                icon: 'success',
                title: 'Congratulations!',
                text: `Name: ${foundResult.name}\n Total Marks: ${foundResult.marks}\nClass: ${foundResult.semester}`,
            })
        } else {
            setResult(null);
            setError('Result not found for the given criteria');
            Swal.fire({
                icon: 'error',
                title: 'Result Not Found',
                text: 'Result not found for the given criteria',
            });
        }
    };

    return (
        <div className='md:my-10  my-2'>
            <h1 className='text-[15px] md:text-[24px] font-semibold grid place-items-center md:my-5 '>Home  ~ Result</h1>
            <Divider ></Divider>
            <div className='grid place-items-center md:mt-8'>
                <h1 className='my-3 text-[20px] md:text-3xl font-bold'>Student Result Search</h1>
                <div className='border-[1px] border-green-400 rounded-lg p-5'>
                    <label>
                        Enter Roll Number:
                        <input type="text" value={rollNumber} onChange={(e) => setRollNumber(e.target.value)} placeholder="Enter Roll Number" className="input input-bordered  w-full max-w-xs" />
                    </label>


                    <h1 className='my-4'>Select Class:</h1>
                    <label>
                        <select value={semester} onChange={(e) => setSemester(e.target.value)} style={{ width: '90%', border: '1px solid #ccc', padding: '5px' }}>
                            <option value="">Select Semester</option>
                            <option value="1">Six</option>
                            <option value="2">Seven</option>
                            <option value="3"> Eight</option>
                            <option value="3"> Nine</option>
                            {/* Add more options as needed */}
                        </select>
                    </label>

                    <button onClick={handleSearch} className="btn mt-4 btn-outline btn-success">Search</button>


                    {/* {result && (
                        <div>
                            <h2>Result:</h2>
                            <p>Name: {result.name}</p>
                            <p>Marks: {result.marks}</p>
                            <p>Semester: {result.semester}</p>
                        </div>
                    )} */}

                    {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
                </div>
            </div>
        </div>
    );
}


export default Result;
