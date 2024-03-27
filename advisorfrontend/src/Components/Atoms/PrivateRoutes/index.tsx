import { FC, ReactElement, ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../../../store/useAuthStore";

interface PrivateRoutesProps {
    children?: ReactNode;
}

const PrivateRoutes: FC<PrivateRoutesProps> = ({ children }): ReactElement | null => {
    const { currentUser } = useAuthStore();
    return currentUser ? (children ? <>{children}</> : <Outlet />) : <Navigate to="/login" replace />;
};

export default PrivateRoutes;
