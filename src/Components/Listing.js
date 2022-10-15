import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';
import FilterBar from './FilterBar';
import "./Listing.css";

export default function Listing({ data }) {
    const [filteredData, setFilteredData] = useState([...data]);
    const [filters, setFilters] = useState([]);
    const [filterObj, setFilterObj] = useState({
        role: "",
        level: "",
        langs: [],
        tools: [],
    })

    useEffect(() => {
        changingFilters(filters);
    }, [filters]);

    const addFilters = (value) => {
        setFilters((prevFilters) => {
            if (prevFilters.includes(value)) {
                return prevFilters;
            } else {
                return [...prevFilters, value];
            }
        })
    }

    const changingFilters = (arr) => {
        const changedData = {
            role: "",
            level: "",
            langs: [],
            tools: [],
        }

        arr.forEach(elem => {
            if (elem === 'Frontend' || elem === 'Backend' || elem === 'Fullstack') {
                changedData.role = elem;
            } else if (elem === 'Junior' || elem === 'Midweight' || elem === 'Senior') {
                changedData.level = elem;
            } else if (elem === 'Python' || elem === 'Ruby' || elem === 'JavaScript' || elem === 'HTML' || elem === 'CSS') {
                changedData.langs.push(elem);
            } else {
                changedData.tools.push(elem);
            }
        });

        console.log(changedData);
        setFilterObj((prevObj) => {
            return {
                ...prevObj,
                ...changedData
            }
        })
    }

    const clearFilters = () => {
        setFilters([]);
    }

    const removeFilter = (value) => {

        setFilters((prevFilters) => {
            const currFilters = [...prevFilters];
            const targetIndex = currFilters.findIndex((item) => item === value);
            currFilters.splice(targetIndex, 1);

            return currFilters;
        });

    }

    return (
        <Box sx={{ width: "100%" }}>
            {filters.length === 0 ? null : (<FilterBar filters={filters} sx={{ marginBottom: "2rem" }} clear={clearFilters} remove={removeFilter} />)}
            <Box className="listings">
                {filteredData.map(data => <JobCard cardData={data} handleAddFilter={addFilters} key={data.id} />)}
            </Box>
        </Box>
    );
}