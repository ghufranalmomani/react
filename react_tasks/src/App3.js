import React from 'react';



const App3 = () => {
    const Fruits = [
        { id: 1, name: "Apple", color: "Yellow" },
        { id: 2, name: "Strawberry", color: "Red" },
        { id: 3, name: "Kiwi", color: "Green" }
    ];


    return (

        <table className="table container">
            {/* <thead className="thead-dark"> */}
                {/* <th scope="col">id</th>
                <th scope="col">name</th>
                <th scope="col">color</th> */}
            {/* </thead> */}
            {
                Fruits.map((fruit) => (

                    <tr>
                        <td>{fruit.id}</td>
                        <td>{fruit.name}</td>
                        <td>{fruit.color}</td>
                    </tr>

                ))
            }
        </table >
    );
};
export default App3;