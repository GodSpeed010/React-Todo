import logo from './logo.svg';
import './App.css';
import { Button, TextField, List, ListItem, IconButton, CommentIcon, ListItemText } from '@material-ui/core';
import { AddCircleOutline } from '@material-ui/icons';
import React, { useState } from 'react'

function App() {
    const [todos, setTodos] = useState([])
    const [text, setText] = useState("");

    const addClicked = () => {
        //add todo item
        let newArr = todos.slice();
        newArr.push(text)
        setTodos(newArr);
    }
    return (
        <div className="App">
            <div className='flex-row'>
                <TextField id="outlined-basic" onChange={e => setText(e.target.value)} label="Outlined" variant="outlined" />
                <Button variant='contained' onClick={addClicked} startIcon={<AddCircleOutline />}>Add</Button>
            </div>

            <div className="list">
                <List>
                    {todos.map((value) => (
                        <ListItem
                            key={value}>
                            <ListItemText primary={value} />
                        </ListItem>
                    ))}
                </List>
            </div>

        </div>
    );
}

export default App;
