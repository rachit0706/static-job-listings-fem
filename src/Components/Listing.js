import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';
import FilterBar from './FilterBar';
import "./Listing.css";

const removeHelper = (value, arr) => {
    const result = [...arr];
    const targetIndex = result.findIndex((item) => item === value);
    result.splice(targetIndex, 1);

    return result;
}

const compArr = (arr1, arr2) => {
    if (arr1.length === 0) return false;

    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            return true;
        }
    }

    return false;
}

export default function Listing({ data }) {
    const [filteredData, setFilteredData] = useState([...data]);
    const [filters, setFilters] = useState([]);
    const [filterObj, setFilterObj] = useState({
        role: "",
        level: "",
        langs: [],
        tools: [],
    });

    useEffect(() => {
        let filteredArr = [];
        if (filterObj.role) {
            filteredArr.push(filterObj.role);
        }

        if (filterObj.level) {
            filteredArr.push(filterObj.level);
        }

        filteredArr = [...filteredArr, ...filterObj.langs];
        filteredArr = [...filteredArr, ...filterObj.tools];

        setFilters(filteredArr);
    }, [filterObj]);

    useEffect(() => {
        let filteredArr = data.filter(obj => (!filterObj.role || filterObj.role === obj.role)).filter(obj => (!filterObj.level || filterObj.level === obj.level)).filter(obj => (!filterObj.langs.length || compArr(obj.languages, filterObj.langs))).filter(obj => (!filterObj.tools.length || compArr(obj.tools, filterObj.tools)));

        setFilteredData(filteredArr);

    }, [filters]);

    const addFilters = (value) => {
        changingFilters(value, 'add');
    }

    const changingFilters = (elem, action) => {
        setFilterObj((prevObj) => {
            const changedData = {
                role: prevObj.role,
                level: prevObj.level,
                langs: prevObj.langs,
                tools: prevObj.tools,
            }

            if (elem === 'Frontend' || elem === 'Backend' || elem === 'Fullstack') {
                changedData.role = action === 'remove' ? "" : elem;
            } else if (elem === 'Junior' || elem === 'Midweight' || elem === 'Senior') {
                changedData.level = action === 'remove' ? "" : elem;
            } else if (elem === 'Python' || elem === 'Ruby' || elem === 'JavaScript' || elem === 'HTML' || elem === 'CSS') {
                if (action === 'remove') {
                    changedData.langs = [...removeHelper(elem, changedData.langs)];
                } else {
                    if (!changedData.langs.includes(elem)) {
                        changedData.langs.push(elem);
                    }
                }
            } else {
                if (action === 'remove') {
                    changedData.tools = [...removeHelper(elem, changedData.tools)];
                } else {
                    if (!changedData.tools.includes(elem)) {
                        changedData.tools.push(elem);
                    }
                }
            }
            return {
                ...changedData,
            }
        });

    }

    const clearFilters = () => {
        setFilterObj({
            role: "",
            level: "",
            langs: [],
            tools: [],
        });
    }

    const removeFilter = (value) => {
        changingFilters(value, 'remove');
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