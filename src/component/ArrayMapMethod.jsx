import React from 'react'

function ArrayMapMethod() {
    // Example 1
    const names = ["Alice", "Bob", "Charlie", "Bhaskar"];

    // Exmaple 2 Array of Objects
    const products = [
        {
            id: 1,
            name: "Product 1",
            price: 10,
        },
        {
            id: 2,
            name: "Product 2",
            price: 20,
        },
        
    ];

    // Example 3 return map function
    const fruits = ["Apple", "Banana", "Orange", "Mango"];

    // Using map to tranform the array of fruits into an array of react elements
    const fruitItems = fruits.map((fruit, index) => <li key={index}>{fruit}</li>);
    return (
        <>
            <h1>Array Map Method</h1>
            {/* Example 1  return ke case mai {} use karate hai */}
            <ul>    
                {names.map((name, index) => (   
                    <li key={index}>{name}</li>
                ))}
            </ul>

            {/* Example 2 */}
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                    </li>
                ))}
            </ul>

            {/* Example 3 */}
            <ul>{fruitItems}</ul>
        </>

    )
}

export default ArrayMapMethod