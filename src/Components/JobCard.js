import { AppBar, Box, IconButton, Toolbar, Typography, Button, Avatar, Stack, Paper, Chip } from "@mui/material";
// import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from "react";
import "./JobCard.css";
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function JobCard({ cardData }) {

    return (
        <Box sx={{ flexGrow: 1 }} className="job-card">
            <Stack direction="row" spacing={1} sx={{alignItems: "center", flexWrap: "wrap"}} key={cardData.id}>
                <img alt="#" src={cardData.logo} className="card-logo" />
                <Stack spacing={2} sx={{ padding: "8px" }}>
                    <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                        <span className="company">{cardData.company}</span>
                        {cardData.new && (<Chip label="New!" sx={{ backgroundColor: "hsl(180, 29%, 50%)", color: "white", fontSize: "13px", fontWeight: "700", padding: "0", height: "1.2rem" }} />)}
                        {cardData.featured && (<Chip label="Featured" sx={{ backgroundColor: "black", color: "white", fontSize: "13px", fontWeight: "700", padding: "0", height: "1.2rem" }} />)}
                    </Stack>
                    <h1 className="designation">{cardData.position}</h1>
                    <Stack direction="row" sx={{ justifyContent: "space-between", width: "10rem" }}>
                        <span className="mute">{cardData.postedAt}</span>
                        <span className="mute">{cardData.contract}</span>
                        <span className="mute">{cardData.location}</span>
                    </Stack>
                </Stack>
            </Stack>
            <Stack direction="row" spacing={1} p={2} sx={{flexWrap: "wrap"}}>
                <Chip label={cardData.role} className="category" />
                <Chip label={cardData.level} className="category" />
                {cardData.languages.map(language => <Chip label={language} className="category" />)}
                {cardData.tools.map(tool => <Chip label={tool} className="category" />)}
            </Stack>
        </Box>
    );
}