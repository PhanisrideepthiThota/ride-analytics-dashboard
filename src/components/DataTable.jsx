function DataTable({ columns, rows }) {

    function getStatusBadge(value) {

        if (value === "Available")
            return "🟢 Available";

        if (value === "On Trip")
            return "🟡 On Trip";

        if (value === "Offline")
            return "🔴 Offline";

        if (value === "COMPLETED")
            return "🟢 COMPLETED";

        if (value === "CANCELLED")
            return "🔴 CANCELLED";

        return value;
    }

    return (

        <div className="table-container">

            <table>

                <thead>

                    <tr>

                        {columns.map((column) => (

                            <th key={column}>
                                {column.replace(/_/g, " ")}
                            </th>

                        ))}

                    </tr>

                </thead>

                <tbody>

                    {rows.length === 0 ? (

                        <tr>

                            <td
                                colSpan={columns.length}
                                style={{ textAlign: "center" }}
                            >
                                No Data Found
                            </td>

                        </tr>

                    ) : (

                        rows.map((row, index) => (

                            <tr key={index}>

                                {columns.map((column) => (

                                    <td key={column}>

                                        {getStatusBadge(row[column])}

                                    </td>

                                ))}

                            </tr>

                        ))

                    )}

                </tbody>

            </table>

        </div>

    );

}

export default DataTable;