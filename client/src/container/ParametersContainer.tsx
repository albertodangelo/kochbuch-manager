import React from "react";
import { useParams, useHistory } from "react-router";

interface RouteParams {
    id: string;
}

export const ParametersContainer: React.FC = () => {
    const routeParams = useParams<RouteParams>();
    const history = useHistory();
    if(routeParams.id === '5') {
        history.push('/users')
    }
    return <div>{routeParams.id}</div>;
}