import logo from './end-logo.png'
import './Divider.css'

const Divider = () => {
    return (
        <div className="flex flex-col w-full border-opacity-50">

            <div className="divider">
                <img className='animate-slide-right-left  h-8  w-10' src={logo} alt="" />
            </div>
        </div>
    );
};

export default Divider;