function DashboardCards({ dashboard }) {

    if (!dashboard) return null;

    return (

        <div className="dashboard-cards">

            <div className="card-box">
                <h3>👨 Total Drivers</h3>
                <p>{dashboard.total_drivers}</p>
            </div>

            <div className="card-box">
                <h3>🚖 Total Rides</h3>
                <p>{dashboard.total_rides}</p>
            </div>

            <div className="card-box">
                <h3>✅ Completed</h3>
                <p>{dashboard.completed_rides}</p>
            </div>

            <div className="card-box">
                <h3>❌ Cancelled</h3>
                <p>{dashboard.cancelled_rides}</p>
            </div>

        </div>

    );

}

export default DashboardCards;