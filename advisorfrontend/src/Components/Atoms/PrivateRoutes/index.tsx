// PrivateRoutes.tsx
import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import {useAuthStore} from "../../../store/useAuthStore";

const PrivateRoutes: FC = () => {
    const { currentUser } = useAuthStore();
    console.log(currentUser);
    return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoutes;