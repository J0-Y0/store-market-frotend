import { Search } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import useCollection from "../../hooks/useCollection";
import { LoadingButton } from "../../utils/Loading";

const ProductFilter = () => {
  const collections = useCollection();
  return (
    <Box padding={2} sx={{ display: "flex", flexDirection: "column" }}>
      <TextField
        variant="filled"
        placeholder="Search"
        type="search"
        size="small"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          },
        }}
      />
      <Divider sx={{ marginY: 2 }}>Filter</Divider>
      Price Range
      <Box padding={2} sx={{ display: "flex", flexDirection: "row" }}>
        <TextField
          sx={{ mx: 1 }}
          variant="standard"
          label="Greater thane"
          type="number"
        />
        <TextField
          sx={{ mx: 1 }}
          variant="standard"
          label="Less thane"
          type="number"
        />
      </Box>
      Product Category
      <Autocomplete
        disablePortal
        options={collections}
        getOptionLabel={(option) => option.title}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField sx={{ margin: 2, my: 2 }} {...params} label="Category" />
        )}
      />
      <FormControl sx={{ padding: 2, marginY: 2 }}>
        <FormLabel id="demo-radio-buttons-group-label">Sort By Price</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="price"
            control={<Radio />}
            label="Lowest Price first"
          />
          <FormControlLabel
            value="-price"
            control={<Radio />}
            label="Highest Price first"
          />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
      <LoadingButton value="Apply filter" width="100%" />
    </Box>
  );
};

export default ProductFilter;
