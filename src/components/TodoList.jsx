import * as React from 'react';
import { Container, CssBaseline } from "@mui/material";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import{useQuery} from '@tanstack/react-query'
import axios from 'axios';
import { useTodosQuery } from '../queries/useTodosQuery';

export default function TodoList() {

  //  const todosQuery = useQuery({
  //     queryKey: ['todos'],
  //     queryFn: getTodos,
  //     staleTime: 10000,
  //  });
  const todosQuery=useTodosQuery();
    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];
  
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
  
      setChecked(newChecked);
    };

    console.log(todosQuery.data);
    
    // if(todosQuery.isError){
    //   return <h2>{todosQuery.error.message}</h2>
    // }
  return (
    
      <Container component="main" maxWidth="xs">
          <CssBaseline/>
          <h1>Todos</h1>
          {todosQuery.isError 
            ? <div>Unable to load todos</div>
            :todosQuery.isFetching
              ?  <div>Loading todos ...</div>
              :(
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {todosQuery.data.map((todo) => {
                  const labelId = `checkbox-list-label-${todo.id}`;
          
                  return (
                    <ListItem
                      key={todo.id}
                      secondaryAction={
                        <IconButton edge="end" aria-label="comments">
                          <CommentIcon />
                        </IconButton>
                      }
                      disablePadding
                    >
                      <ListItemButton role={undefined} onClick={handleToggle(todo.id)} dense>
                        <ListItemIcon>
                          <Checkbox
                            edge="start"
                            checked={checked.indexOf(todo.id) !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': labelId }}
                          />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={todo.todo} />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
                )
           
         }
    </Container>
  
  );
}

// async function getTodos(){ // API function that gets data from the server
//   // const response = await fetch('https://dummyjson.com/todos');
//   // const result = await response.json();
//   const result = await axios.get ('https://dummyjson.com/todos');
//   return  result.data.todos;
// }
