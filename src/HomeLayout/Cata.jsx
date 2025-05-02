import React, { use } from 'react';

const categoryPromise = fetch("/public/categories.json")
.then(response => response.json())

const Cata = () => {
    //console.log(categoryPromise)
    const catagories = use(categoryPromise);

    return (
        <div>
             <h2 className='font-bold'> All Caragories ({catagories.length})</h2>
        </div>
    );
};

export default Cata;