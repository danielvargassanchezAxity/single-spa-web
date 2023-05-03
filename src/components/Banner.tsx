import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Typography } from '@mui/material'


const Banner = () => {
    var items = [
        {
            title: "Bienvenido a nuestra tienda virtual",
            description: "Inicia sesión y disfruta de nuestros productos",
            image: 'https://thumbs.dreamstime.com/b/empty-wood-table-top-supermarket-grocery-store-blurred-defocused-background-bokeh-light-montage-product-display-153708475.jpg',
            hasRedirection: false
        },
        {
            title: "Oferta del mes",
            description: "Compra 10 productos y llevate el segundo gratis. Válido solo el mes de Abril.",
            image: 'https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-63770.jpg',
            hasRedirection: true
        },

    ]

    return (
        <Carousel height={'400px'}>
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}
function Item(props) {
    return (
        <Paper style={{ height: 'calc(100% - 40px)', padding: '20px', backgroundImage: `url(${props.item.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 10 }}>
                <div>
                    <Typography variant="h4" component="h2" style={{ paddingBottom: 10, fontWeight: 'bold' }}>
                        {props.item.title}
                    </Typography>

                    <Typography variant="h5" component="h5">
                        {props.item.description}
                    </Typography>
                </div>

                {props.item.hasRedirection &&
                    <Button style={{ fontSize: 20 }}>
                        Ver promo
                    </Button>}
            </div>
        </Paper>
    )
}
export default Banner;