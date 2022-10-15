import { Box, IconButton, Stack, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import React from "react";
import "./FilterBar.css";

function FliterTab({name, removeFilter}) {
    return (
        <Box className="filter-tab">
            <Box className="filter-text">
                <Typography variant="body1" sx={{fontWeight: "700", fontSize: "14px"}} gutterBottom>
                    {name}
                </Typography>
            </Box>
            <Stack p={0} className="cross" onClick={() => removeFilter(name)}>
                {/* <CloseIcon /> */}
            </Stack>
        </Box>
    );
}

export default function FilterBar({filters, clear, remove}) {
    return (
        <Box className="filter-bar">
            <Stack direction="row" sx={{flexWrap: "wrap", paddingRight: "1rem"}}>
                {filters.map(filter => <FliterTab name={filter} removeFilter={remove} key={filter} />)}
            </Stack>
                <a className="clear-button" onClick={clear}>Clear</a>
        </Box>
    );
}