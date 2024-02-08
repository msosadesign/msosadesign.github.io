import { NavLink } from "react-router-dom";

export default function Error404() {
    return (
        <main className="error404">
            <img alt="404 not found" src="https://cdn.pixabay.com/photo/2021/07/21/12/49/error-6482984_960_720.png"></img>
            <h1>Page Not found</h1>
            <h2 className="body-2">The page you are looking for doesn't exist or has been moved.</h2>
            <div>
                <NavLink className={"cta-button card-style"} to={"/"}>Go Home</NavLink>
            </div>
        </main>
    )
}