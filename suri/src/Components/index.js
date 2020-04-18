import React from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';

export default function(props) {
    const history = useHistory();
    return (
        <div className="container centered">
            <div className="row">
                <div className="column" onClick={() => history.push('/upload/k-means')}>
                    <h1 className="cols">K-Means</h1>
                </div>
                <div className="column" onClick={() => history.push('/upload/db-scan')}>
                    <h1 className="cols">DB-Scan</h1>
                </div>
            </div>
        </div>
    );
}