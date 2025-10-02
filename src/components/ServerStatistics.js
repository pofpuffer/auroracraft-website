import { useEffect, useState } from "react";
import './ServerStatistics.css'

function ServerStatistics() {
    const [statistic, setStatistic] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
    fetch('https://api.mcstatus.io/v2/status/java/play.auroracraft.ca')
        .then(response => {
        if (!response.ok) {
            throw new Error('Network response failed.');
        }
        return response.json();
        })
        .then(fetchedData => {
        setStatistic(fetchedData);
        })
        .catch(err => {
        setError(err);
        })
        .finally(() => {
        setLoading(false);
        });
    }, []); 

    if (loading) return <p className="info">Loading statistics...</p>;
    if (error) return <p className="info">Error: {error.message}</p>;
    if (!statistic ) return <p className="info">No data available.</p>;
    
    
    if (statistic.online) return (
        <div>
            <pre className="info-online"><b>Status: </b>{statistic.online ? "Online" : "Offline"}</pre>
            <pre className="info-playercount"> <b>Players online: </b>{JSON.stringify(statistic.players.online, null, 2)} / {JSON.stringify(statistic.players.max, null, 2)}</pre>
        </div>
    );
}

export default ServerStatistics;