import React, { useState } from "react";
import { Box, Typography, Grid, Stack } from "@mui/material";
import Navbar from "../layout/Navbar";
import { Images } from "../data/images";
import GalleryList from "../components/Galleries/galleryList";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
const Gallery = () => {
  const [images, setImages] = useState(Images);
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const newImages = Array.from(images);
    const [draggedImage] = newImages.splice(result.source.index, 1);
    newImages.splice(result.destination.index, 0, draggedImage);

    setImages(newImages);
  };
  return (
    <Box
      sx={{
        color: "white",
        textAlign: "center",
      }}
    >
      <Navbar />
      <Box>
        <Typography component="h1" pt={4} fontSize={25} fontWeight={500}>
          Welcome To Gallery-Hub
        </Typography>
      </Box>
      <Box
        sx={{
          paddingInline: "8%",
          margin: "auto",
        }}
        pt={7}
        pb={4}
      >
        <Grid
          container
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
          className="grid"
        >
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="gallery">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="image-gallery"
                >
                  {images.map((image, index) => (
                    <Draggable
                      key={image.id}
                      draggableId={image.id.toString()}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="image-item"
                        >
                          <GalleryList item={image} key="index" />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </Grid>
      </Box>

      <footer>
        <Stack direction="row" justifyContent="space-between">
          <Typography sx={{ textAlign: "center" }}>Gallery-Hub</Typography>
          <Typography sx={{ textAlign: "center" }}>
            SetUp&copy;{new Date().getFullYear()}
          </Typography>
        </Stack>
      </footer>
    </Box>
  );
};

export default Gallery;
