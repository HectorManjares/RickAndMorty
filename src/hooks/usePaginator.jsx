import React, {useState, useEffect} from 'react';

const usePaginator = (len) => {
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState([])
    const [index, setIndex] = useState(1)
    
    useEffect(()=>{
        const countPages = Math.ceil(data.length/len)
        if(countPages>= index){
            const ini = len*(index-1)
            setCurrentPage(data.slice(ini, (ini+len)))
        }
    },[data])

    return {currentPage, setData, setIndex}
};

export default usePaginator;
