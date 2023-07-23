import { useContext } from "react";
import { AuthContest } from "./Auth";
import { Navigate, useLocation } from "react-router-dom";

const Private = ({ children }) => {
    const { user, loading } = useContext(AuthContest);
    const location = useLocation();
    if (user) {
        return children;
    }
    if (loading) {
        return (
            <progress className="progress w-56"></progress>
        );
    }

    return (
        <div>
            <Navigate state={{from:location}} to='/login' replace></Navigate>

        </div>
    );
};

export default Private;