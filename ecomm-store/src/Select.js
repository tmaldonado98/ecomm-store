import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { CartContext } from './CartContext';
import { useContext } from 'react';

export default function BasicSelect() {
  const [quantity, setQuantity] = React.useState(0);

  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  console.log(quantity);
  const cart = useContext(CartContext);

  function setItemQuantity(){
    cart.getSingleItemQuantity(quantity);
  }

  return (
    <Box >
      <FormControl sx={{ minWidth: 150 }} size="small">
        <InputLabel id="demo-simple-select-label">Quantity</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={quantity}
          label="Quantity"
          onChange={handleChange}
        >
          <MenuItem value={''} onClick={setItemQuantity}>0</MenuItem>
          <MenuItem value={1} onClick={setItemQuantity}>1</MenuItem>
          <MenuItem value={2} onClick={setItemQuantity}>2</MenuItem>
          <MenuItem value={3} onClick={setItemQuantity}>3</MenuItem>
          <MenuItem value={4} onClick={setItemQuantity}>4</MenuItem>
          <MenuItem value={5} onClick={setItemQuantity}>5</MenuItem>
          <MenuItem value={6} onClick={setItemQuantity}>6</MenuItem>
          <MenuItem value={7} onClick={setItemQuantity}>7</MenuItem>
          <MenuItem value={8} onClick={setItemQuantity}>8</MenuItem>
          <MenuItem value={9} onClick={setItemQuantity}>9</MenuItem>
          <MenuItem value={10} onClick={setItemQuantity}>10</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
