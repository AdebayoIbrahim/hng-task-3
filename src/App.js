import React, { useState } from "react";
import { Box } from "@mui/material";
import Gallery from "./Pages/Gallery";
import { GalleryContextProvider } from "./Context/galleryContext";
import Build from "./shared/Build";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/clerk-react";

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

function App() {
  const [build, setBuild] = useState(true);

  //clear-up-build
  setTimeout(() => {
    setBuild(false);
  }, 2000);
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <GalleryContextProvider>
        <Box>
          {build ? (
            <Build />
          ) : (
            <>
              <SignedIn>
                <Gallery />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          )}
        </Box>
      </GalleryContextProvider>
    </ClerkProvider>
  );
}

export default App;
