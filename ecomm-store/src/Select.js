import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { CartContext } from './CartContext';
import { useContext } from 'react';

export default function BasicSelect() {
  const cart = useContext(CartContext);


  const [quantity, setQuantity] = React.useState(0);

  const handleChange = (event) => {
    setQuantity(event.target.value);
    cart.getSingleItemQuantity(event.target.value);
    // cart.addItem(() => {cart.addItem(data, quant)})
  };

  console.log(quantity);

  // function setItemQuantity(){
  //   // return quantity;
  // }

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
          <MenuItem value={0} >0</MenuItem>
          <MenuItem value={1} >1</MenuItem>
          <MenuItem value={2} >2</MenuItem>
          <MenuItem value={3} >3</MenuItem>
          <MenuItem value={4} >4</MenuItem>
          <MenuItem value={5} >5</MenuItem>
          <MenuItem value={6} >6</MenuItem>
          <MenuItem value={7} >7</MenuItem>
          <MenuItem value={8} >8</MenuItem>
          <MenuItem value={9} >9</MenuItem>
          <MenuItem value={10} >10</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

// onClick={setItemQuantity}
// onClick={setItemQuantity}
// onClick={setItemQuantity}
// onClick={setItemQuantity}
// onClick={setItemQuantity}
// onClick={setItemQuantity}
// onClick={setItemQuantity}
// onClick={setItemQuantity}
// onClick={setItemQuantity}
// onClick={setItemQuantity}
// onClick={setItemQuantity}