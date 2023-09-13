import CloseIcon from '@mui/icons-material/Close';
import { TextareaAutosize } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import { FunctionComponent, useContext, useEffect, useState } from "react";
import { ChunkContext } from './Context';
import appConfig from './config/config.json';
import { CategoryType } from "./models/Category";
import { Chunk } from './models/Chunk';

interface DialogProps {
    data: Chunk;
    open: boolean;
    onClose: () => void;
    postSubmit: (success: boolean) => void;
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1)
    },
}));
export const EditCard: FunctionComponent<DialogProps> = ({ data, open = false, onClose, postSubmit }) => {
    const [categoriesData, setCategoriesData] = useState([]);
    const { selectedChunk, setSelectedChunk } = useContext(ChunkContext);
    useEffect(() => {
        const url = `${appConfig.backendUrl}/api/categories`;
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                setCategoriesData(json);
            });
    }, []);
    const handleClose = () => {
        open = false;
        onClose();
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const url = `${appConfig.backendUrl}/api/chunks/${selectedChunk.id}`;
        axios.put(url, selectedChunk).then((response) => {
            console.log(response.status, response.data.token);
            postSubmit(true);
            onClose();
        }).catch((error) => {
            console.log(error);
            postSubmit(false);
        });
    }

    const handleChange = (event: SelectChangeEvent) => {
        console.log('select', event);
    };
    const handleTextChange = (event: any) => {
        const value = event.target.value;
        setSelectedChunk({
            ...selectedChunk,
            [event.target.name]: value
        });
    };


    return (
        <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
            sx={{
                "& .MuiDialog-container": {
                    "& .MuiPaper-root": {
                        width: "100%",
                        maxWidth: "900px",  // Set your width here
                    },
                },
            }}
        >
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                Update Chunk
            </DialogTitle>
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <CloseIcon />
            </IconButton>
            <DialogContent dividers>
                <Container component="main" maxWidth="xl">
                    <Box
                        sx={{
                            marginTop: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: "100%",
                            maxWidth: "900px",  // Set your width here
                        }}
                    >
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="title"
                                label="Title"
                                name="title"
                                autoComplete="title"
                                autoFocus
                                value={selectedChunk.title}
                                onChange={handleTextChange}
                            />
                            <TextareaAutosize style={{ width: "850px", border: "1px solid lightgray" }} minRows={20} maxRows={80} minLength={40}
                                required
                                name="content"
                                placeholder="Content"
                                id="content"
                                autoComplete="content"
                                value={selectedChunk.content}
                                onChange={handleTextChange}
                            />
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label" >Category</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={selectedChunk.category}
                                    label="Category"
                                    onChange={handleChange}
                                >
                                    {
                                        categoriesData && categoriesData.map((category: CategoryType) =>
                                            <MenuItem value={category.code} key={category.code}>{category.description}</MenuItem>
                                        )
                                    }

                                </Select>
                            </FormControl>
                        </Box>
                    </Box>
                </Container>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleSubmit}>
                    Update
                </Button>
            </DialogActions>
        </BootstrapDialog>
    );
}