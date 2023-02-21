import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Post.css'

const Post = ({ card }) => {
	return (
			<Card sx={{ maxWidth: 345 }} className='post-card'>
				<CardMedia
					sx={{ height: 140 }}
					image={card.image}
					title="green iguana"
				/>
			<CardContent style={{ height:"30%"}}>
					<Typography gutterBottom variant="h5" component="div">
						{card.name}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						<b>Species:</b>{card.species}
						<br />
						<b>Status:</b>{card.status}
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small">Kill</Button>
					<Button size="small">No Kill</Button>
				</CardActions>
			</Card>
	)
}

export default Post