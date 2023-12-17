import './Loader.css'

const Loader = () => {
    return(
        <div className="loader">
            <h2>Fetching data...</h2>
            <h3>Please wait patiently. 🙏</h3>
            <h4>The fetching of the backend may take up to a minute, because of the free tier of the hosting service.</h4>
        </div>
    )
}

export default Loader;