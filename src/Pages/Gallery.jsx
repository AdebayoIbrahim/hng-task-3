import React, { useState, useContext } from "react";
import { Box, Typography, Grid, Stack, Button } from "@mui/material";
import Navbar from "../layout/Navbar";
import GalleryList from "../components/Galleries/galleryList";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import GalleryContext from "../Context/galleryContext";
import Spinner from "../shared/Spinner";
const Gallery = () => {
  const { images, setImages } = useContext(GalleryContext);
  const [lazyload, setLazy] = useState(true);
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const newImages = Array.from(images);
    const [draggedImage] = newImages.splice(result.source.index, 1);
    newImages.splice(result.destination.index, 0, draggedImage);

    setImages(newImages);
  };
  setTimeout(() => {
    setLazy(false);
  }, 2500);
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
        {lazyload && <Spinner />}
        {images.length < 1 || lazyload ? (
          lazyload ? null : (
            <Box>
              <Typography pt={4} pb={4} variant="body1" color="primary">
                No Images to Display Here!!
              </Typography>
              <Button
                mt={3}
                onClick={() => {
                  window.location.reload();
                }}
                variant="contained"
              >
                Refresh
              </Button>
            </Box>
          )
        ) : (
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
                  <div {...provided.droppableProps} ref={provided.innerRef}>
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
        )}
      </Box>

      <footer
        style={{
          width: "100%",
          display: "block",
          position: lazyload || images.length < 1 ? "absolute" : "unset",
          bottom: "0",
        }}
      >
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
