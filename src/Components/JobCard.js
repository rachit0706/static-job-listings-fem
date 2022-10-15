import { Box, Stack, Chip } from "@mui/material";
import React from "react";
import "./JobCard.css";

const Bubble = ({ label, addFilter }) => {
    return (
        <Box className="category" onClick={addFilter}>{label}</Box>
    );
}

export default function JobCard({ cardData, handleAddFilter }) {
    const newNFeaturedStyle = {
        fontSize: '13px',
        color: "white",
        fontWeight: "700",
        padding: "0",
        height: "1.2rem",
    }

    return (
        <Box sx={{ flexGrow: 1 }} className={cardData.featured ? "job-card featuredCard" : "job-card"}>
            <Box className="left-part" >
                <img alt="#" src={cardData.logo} className="card-logo" />
                <Stack spacing={2} sx={{ padding: "8px"}}>
                    <Stack direction="row" spacing={1} sx={{ alignItems: "center", flexWrap: "wrap" }}>
                        <span className="company">{cardData.company}</span>
                        {cardData.new && (<Chip label="New!" sx={{ backgroundColor: "hsl(180, 29%, 50%)", ...newNFeaturedStyle }} />)}
                        {cardData.featured && (<Chip label="Featured" className="featured" sx={{ backgroundColor: "black", ...newNFeaturedStyle }} />)}
                    </Stack>
                    <h1 className="designation">{cardData.position}</h1>
                    <Stack direction="row" sx={{ justifyContent: "space-between", flexWrap: "wrap" , width: "10rem" }}>
                        <span className="mute">{cardData.postedAt}</span>
                        <span className="mute">{cardData.contract}</span>
                        <span className="mute">{cardData.location}</span>
                    </Stack>
                </Stack>
            </Box>
            <Box className="categories">
                <Bubble label={cardData.role} addFilter={() => handleAddFilter(cardData.role)} />
                <Bubble label={cardData.level} addFilter={() => handleAddFilter(cardData.level)} />
                {cardData.languages.map(language => <Bubble label={language} addFilter={() => handleAddFilter(language)} key={language} />)}
                {cardData.tools.map(tool => <Bubble label={tool} addFilter={() => handleAddFilter(tool)} key={tool} />)}
            </Box>
        </Box>
    );
}