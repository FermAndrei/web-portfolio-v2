import React from "react";
import { ProjectData } from "../data/ProjectData";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";

const ProjectPage = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center h-[300px]">
      {ProjectData.map((project) => (
        <Card
          key={project.id}
          sx={{
            flex: "1 1 300px", // responsive width
            maxWidth: 400,
            minWidth: 250,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardActionArea sx={{ flexGrow: 1 }}>
            <CardMedia
              component="img"
              image={project.tumbler}
              alt={project.name}
              sx={{
                objectFit: "cover",
              }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h6" component="div">
                {project.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {project.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default ProjectPage;
