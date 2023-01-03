import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import {  CardActionArea, CardActions } from '@mui/material';
import "../card/HomeCardPage.css"

export default function HomeCardPage() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea className='card-for-home-page'>
        <CardMedia
          height="200"
        />
        <div className='textInCard'>CATEGORY</div>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
  );
}