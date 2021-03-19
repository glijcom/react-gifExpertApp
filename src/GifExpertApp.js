import React, {useState} from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';


const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Daft Punk'])

    // const handleAdd = () => {
    //     //setCategories( [...categories, 'Gabriel']);
    //     setCategories( ['Lijtenstein', ...categories]);

    // }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={ setCategories } />

            {/* <button onClick={ handleAdd }>Agregar elemento</button> */}
            

                { 
                    categories.map( category => (
                        <GifGrid key={category} category={category} />
                    )
                    )
                }

        </>
    )
}

export default GifExpertApp

