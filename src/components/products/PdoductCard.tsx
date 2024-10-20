import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ProductImg from "../../assets/default_product.jpeg";
import { CardActionArea, Chip, Divider, Grid2, Rating } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Product } from "../../services/product-service";
interface Props {
  product: Product;
}
export default function ProductCard({
  product: { title, price, images, inventory },
}: Props) {
  return (
    <Card
      sx={{ bgcolor: "#ffdabc40", maxWidth: 320, borderRadius: 5, margin: 2 }}
    >
      <CardActionArea color="red">
        <CardMedia
          sx={{ height: 250 }}
          image={images.length > 0 ? images[0]?.image : ProductImg}
          title={title}
        >
          <Chip
            icon={<LocalOfferIcon />}
            label={"$" + price}
            color="warning"
            // variant="outlined"
          />
        </CardMedia>
        <CardContent>
          <Grid2 container spacing={3}>
            <Grid2 size={6}>
              <Typography
                fontWeight={"bold"}
                gutterBottom
                variant="h5"
                component="div"
              >
                {title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                description
              </Typography>
              <Rating
                sx={{ color: "#ED6C02" }}
                name="read-only"
                value={4}
                readOnly
              />
            </Grid2>
            <Divider
              sx={{ bgcolor: "#ED6C02" }}
              orientation="vertical"
              flexItem
            />

            <Grid2 size={5}>
              <Typography color="warning"> Stock Available</Typography>
              <Typography
                mb={2}
                variant="body2"
                sx={{ color: "text.secondary" }}
              >
                {inventory}
              </Typography>
              <Typography color="warning">Some Title</Typography>
              <Typography
                mb={2}
                variant="body2"
                sx={{ color: "text.secondary" }}
              >
                Lizards are a widesp read group
              </Typography>
            </Grid2>
          </Grid2>
        </CardContent>
      </CardActionArea>

      <CardActions
        sx={{ display: "flex", justifyContent: "center", marginY: 1 }}
      >
        <Button
          disableElevation={true}
          startIcon={<AddShoppingCartIcon />}
          sx={{ borderRadius: 5, paddingX: 3 }}
          color="warning"
          variant="contained"
          size="small"
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
