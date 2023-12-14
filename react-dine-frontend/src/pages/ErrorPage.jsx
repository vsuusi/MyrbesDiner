import Header from "../components/Header";

const ErrorPage = () => {

    const errorStyles = {
        padding: '200px 0',
        color: 'var(--black)'
    };

    return(
        <div style={errorStyles}>
            <Header/>   
            <h1>Oops! Something went wrong!</h1>
            <h3>❌The url you are looking for doesn't exist.❌</h3>
        </div>
    )

};

export default ErrorPage;