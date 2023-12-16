import './Loader.css'

const Loader = () => {
    return(
        <div className="loader">
            <h2>Fetching data...</h2>
            <h3>Please wait patiently. 🙏</h3>
            <h4>The backend is slow to load because of the free tier, may take up to a minute.</h4>
        </div>
    )
}

export default Loader;