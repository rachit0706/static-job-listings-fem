import { AppBar, Box, IconButton, Toolbar, Typography, Button, Avatar, Stack, Paper, Chip } from "@mui/material";
// import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from "react";
import "./JobCard.css";
import { styled } from '@mui/material/styles';

const Bubble = ({ label }) => {
    return (
        <Box className="category" sx={{ }}>{label}</Box>
    );
}

export default function JobCard({ cardData }) {
    const newNFeaturedStyle = {
        fontSize: '13px',
        color: "white",
        fontWeight: "700",
        padding: "0",
        height: "1.2rem",
    }

    return (
        <Box sx={{ flexGrow: 1 }} className={cardData.featured ? "job-card featuredCard" : "job-card"} key={cardData.id}>
            <Box className="left-part" >
                <img alt="#" src={cardData.logo} className="card-logo" />
                <Stack spacing={2} sx={{ padding: "8px"}}>
                    <Stack direction="row" spacing={1} sx={{ alignItems: "center", flexWrap: "wrap" }}>
                        <span className="company">{cardData.company}</span>
                        {cardData.new && (<Chip label="New!" sx={{ backgroundColor: "hsl(180, 29%, 50%)", ...newNFeaturedStyle }} />)}
                        {cardData.featured && (<Chip label="Featured" className="featured" backColor="black" sx={{ backgroundColor: "black", ...newNFeaturedStyle }} />)}
                    </Stack>
                    <p className="designation">{cardData.position}</p>
                    <Stack direction="row" sx={{ justifyContent: "space-between", flexWrap: "wrap" , width: "10rem" }}>
                        <span className="mute">{cardData.postedAt}</span>
                        <span className="mute">{cardData.contract}</span>
                        <span className="mute">{cardData.location}</span>
                    </Stack>
                </Stack>
            </Box>
            <Box className="categories">
                <Bubble label={cardData.role} />
                <Bubble label={cardData.level} />
                {cardData.languages.map(language => <Bubble label={language} />)}
                {cardData.tools.map(tool => <Bubble label={tool} />)}
            </Box>
        </Box>
    );
}