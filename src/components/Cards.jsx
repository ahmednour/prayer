import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Cards({ Image, Name, Time }) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Image}
          alt="green iguana"
        />
        <CardContent className="card-body">
          <h4>
            {Name}
          </h4>
          <h2>
            {Time}
          </h2>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
