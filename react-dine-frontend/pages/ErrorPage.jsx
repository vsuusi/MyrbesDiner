import Header from "../components/Header";

const ErrorPage = () => {

    return(
        <>
            <Header/>   
            <h2>Oops! Something went wrong!</h2>
            <img src="https://thumbs.dreamstime.com/z/confused-businessman-white-background-unsure-afro-american-manager-giving-i-don-t-know-gesture-98326287.jpg?w=992" width="300" height="200"/>
            <p>The url you are looking for doesn't exist.</p>
        </>
    )

};

export default ErrorPage;