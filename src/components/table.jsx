import React from 'react';
import MaterialTable from 'material-table';

export default function Table() {
    const [state, setState] = React.useState({
        columns: [
            { title: 'First', field: 'name' },
            { title: 'Last', field: 'surname' },
            { title: 'Employee ID', field: 'employeeID', type: 'numeric' },
            { title: 'Salary', field: 'salary', type: 'numeric' },
            { title: 'Location', field: 'location' },
            {
                title: 'Job Title',
                field: 'jobTitle',
                lookup: { 34: 'HR Specialist', 63: 'Microbiologist', 1: 'Director', 2: 'Chemist', 3: 'Software Developer', 4: 'Commissioner', 5: 'Intern' },
            },
        ],
        data: [
            { name: 'Israel', surname: 'Medina', salary: 40592.14, location: 'Austin', employeeID: 583021, jobTitle: 5 },
            { name: 'Mehmet', surname: 'Baran', salary: 89291.34, location: 'New York', employeeID: 981987, jobTitle: 63 },
            { name: 'Wolfgang', surname: 'Schreiber', salary: 92930.21, location: 'Austin', employeeID: 284721, jobTitle: 3 },
            { name: 'Matilde', surname: 'Wilson', salary: 159820.53, location: 'San Francisco', employeeID: 329479, jobTitle: 1 },
            { name: 'Anthony', surname: 'Thomas', salary: 91048.79, location: 'New York', employeeID: 902847, jobTitle: 3 },
            { name: 'Claire', surname: 'Underwood', salary: 110382.45, location: 'Austin', employeeID: 832110, jobTitle: 4 },
            { name: 'Arya', surname: 'Stark', salary: 78029.26, location: 'Austin', employeeID: 768390, jobTitle: 34 },
            { name: 'Henry', surname: 'Hanks', salary: 79258.13, location: 'New York', employeeID: 899003, jobTitle: 63 },
            { name: 'Maria', surname: 'Browder', salary: 91002.46, location: 'Austin', employeeID: 833271, jobTitle: 2 },
            { name: 'Amara', surname: 'Hanks', salary: 39104.19, location: 'Seattle', employeeID: 538291, jobTitle: 5 },
            { name: 'Joe', surname: 'Bradley', salary: 74502.58, location: 'Seattle', employeeID: 786542, jobTitle: 34 },
            { name: 'Paul', surname: 'Green', salary: 89532.24, location: 'San Francisco', employeeID: 382813, jobTitle: 3 },
            { name: 'Zerya', surname: 'Baran', salary: 74501.80, location: 'New York', employeeID: 207717, jobTitle: 34 },
            { name: 'Rikke', surname: 'Hansen', salary: 78530.22, location: 'Austin', employeeID: 393748, jobTitle: 2 },
            { name: 'Camil', surname: 'Chacon', salary: 76028.15, location: 'New York', employeeID: 653940, jobTitle: 63 },
            { name: 'Lynn', surname: 'Smith', salary: 93012.89, location: 'Austin', employeeID: 687432, jobTitle: 3 },
            { name: 'Amber', surname: 'Ly', salary: 70432.15, location: 'Seattle', employeeID: 490021, jobTitle: 63 },
            { name: 'Kevin', surname: 'Garza', salary: 85943.20, location: 'San Francisco', employeeID: 382941, jobTitle: 34 },
        ],
    });

    return (
        <MaterialTable
            title="Employee Database"
            columns={state.columns}
            data={state.data}
            editable={{
                onRowAdd: newData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            setState(prevState => {
                                const data = [...prevState.data];
                                data.push(newData);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            if (oldData) {
                                setState(prevState => {
                                    const data = [...prevState.data];
                                    data[data.indexOf(oldData)] = newData;
                                    return { ...prevState, data };
                                });
                            }
                        }, 600);
                    }),
                onRowDelete: oldData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            setState(prevState => {
                                const data = [...prevState.data];
                                data.splice(data.indexOf(oldData), 1);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
            }}
        />
    );
}