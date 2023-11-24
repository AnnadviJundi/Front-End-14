import React, { useEffect, useState } from 'react';
import Hero from '../Components/Hero/Hero';
import Movies from '../Components/Movies/Movies';
import Button from '../Components/ui/Button';
import GetDataUpcoming from '../utils/networks/GetDataUpcoming';

const Upcoming = () => {
    const [movies, setMovies] = useState([])
    const [pages, setPages] = useState(1)

    const getData = async(number) => {
        const data = await GetDataUpcoming(number)
        await setMovies(data.results)
    }

    const handleNext = () => {
        const data = pages
        setPages(data+1)
    }

    const handleBefore = () => {
        if(pages > 1) {
            const data = pages
            setPages(data-1)
        } else {
            setPages(1)
        }
    }


    useEffect(
        function(){
            getData(pages)
        }, [pages]
    )

    return (
        <div>
            <div>
            <Hero/>
            <Movies item={movies} title={"Upcoming Movies"}/>
            <Button onClick={handleBefore} variant="primary">Kembali</Button>
            <Button onClick={handleNext} variant="secondary">Selanjutnya</Button>
        </div>
        </div>
    );
}

export default Upcoming;
