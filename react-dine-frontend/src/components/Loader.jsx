import './Loader.css'
import { BounceLoader, ClipLoader } from 'react-spinners';

const Loader = () => {
    return(
        <div className="loader">
            <h2>Fetching data, please wait.</h2>
            <BounceLoader className='loader-animation'
                size={50}
            />
            <h4>Loading the page for the first time may take up to a few minutes.</h4>
        </div>
    )
}

export default Loader;