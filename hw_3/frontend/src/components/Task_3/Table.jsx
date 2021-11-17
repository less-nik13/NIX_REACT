import React from 'react';

import PageTitle from "../PageTitle/PageTitle";

const Table = () => {
    const users = [
        { id: 1, firstName: 'Vasya', lastName: 'Test1' },
        { id: 2, firstName: 'Vova', lastName: 'Test2' },
        { id: 3, firstName: 'Petya', lastName: 'Test3' }
    ];

    return (
        <div className="table__wrapper">
        <PageTitle>Task 3</PageTitle>
            <table className="table">
                <thead>
                    <tr className="table-header">
                        <td className="header__item">Id</td>
                        <td className="header__item">FirstName</td>
                        <td className="header__item">LastName</td>
                    </tr>
                </thead>
                <tbody className="table-content">
                {users.map((user) => (
                    <tr className="table-row" key={user.id}>
                        <td className="table-data">{user.id}</td>
                        <td className="table-data">{user.firstName}</td>
                        <td className="table-data">{user.lastName}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;