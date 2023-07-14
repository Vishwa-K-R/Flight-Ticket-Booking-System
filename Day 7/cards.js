import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../Navbar/card.css";

export default function MediaCard() {
  return (
    <div className='containerr'>
    <div className='cardd'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image="https://images.unsplash.com/photo-1610312278520-bcc893a3ff1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        title="green iguana"
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
         America
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The United States of America (U.S.A. or USA), commonly known as the United States (U.S. or US) or America, is a country, primarily located in North America, that consists of 50 states, a federal district, five major unincorporated territories, nine Minor Outlying Islands, and 326 Indian reservations. It is the world's third-largest country by both land and total area. It shares land borders with Canada to its north and with Mexico.
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height:200}}
        image="https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQ1oS-DeKDIgvicoSyoD8KKoIAinTTDeC6VO7erBHEsAggFjaZYZ6YP1HkFahtlKTb_"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Paris
        </Typography>
        <Typography variant="body2" color="text.secondary">
        There’s a reason Paris is one of the most popular cities among travelers. Known as the “City of Light” or the “City of Love,” the streets of Paris overflow with culture, art, beauty, and history. Whether searching out Monet’s Water Lilies at Musée de l’Orangerie, climbing the many steps of Sacré-Cœur, standing before the Eiffel Tower in awe.Paris is a city that captures the hearts of millions ever year.
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height:200}}
        image="https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2luZ2Fwb3JlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Singapore
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Singapore is one of the most marvellous cities in the world. It has everything from natural beauty to man-made wonders. It is a cultural hub and people from all nationalities and backgrounds happily coexist on this tiny island nation. It is extremely modern in its architecture but it is very traditional in its culture. You find some of the most impressive
                </Typography>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height:200}}
        image="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Dubai
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Dubai is a city of skyscrapers, ports, and beaches, where big business takes place alongside sun-seeking tourism. Because of its large expatriate population, it feels like a Middle Eastern melting pot, and the atmosphere is generally tolerant. Religious affiliations are not a prominent aspect of city life. Islam is the majority religion, but churches and Hindu temples coexist with Dubai’s mosques.
                </Typography>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height:200}}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsd-ijr6fILvN2iL7vszeOMEUAiVnSdmHYPg&usqp=CAU"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Goa
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Whoever has been in Goa may say that he has seen the choicest rarities of India, for it is the most famous and celebrated city, on account of its commercial intercourse with people of all nationalities of the East who bring there the products of their respective countries, articles of merchandize, necessaries of life and other commodities                 </Typography>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height:200}}
        image="https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2VybWFueXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Germany
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Germany,officially the Federal Republic of Germany, is a country in Central Europe. It is the second-most populous country in Europe after Russia, and the most populous member state of the European Union. Germany is situated between the Baltic and North seas to the north, and the Alps to the south. Its 16 constituent states are bordered by Denmark.</Typography>
      </CardContent>
    </Card>
    </div>
    </div>
  );
}