import React from 'react';
import Gallery from "react-photo-gallery";

/**
 * This is a mock data, but, we could be serving the photos based in an endpoint
 */
const photos = [
    {
        src: "https://www.harley-davidson.com/content/dam/h-d/images/motorcycles/my19/softail/fxdr-114/overview/dom/19-softail-fxdr114-hero.jpg",
        width: 4,
        height: 2
    },
    {
        src: "https://www.harley-davidson.com/content/dam/h-d/images/motorcycles/my20/softail/fxdr-114/gallery/20-softail-fxdr114-k2.jpg?impolicy=myresize&rw=1137",
        width: 4,
        height: 3
    },
    {
        src: "https://static01.nyt.com/images/2019/07/31/fashion/SIXTHSTREET1/merlin_154775961_069407f1-3c9e-444b-aa44-138b6146e78a-superJumbo.jpg?quality=90&auto=webp",
        width: 3,
        height: 4
    },
    {
        src: "https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/800x450/format/jpg/quality/85/https://s.aolcdn.com/os/ab/_cms/2019/07/28084844/carlin-dunne-ducati.jpeg",
        width: 4,
        height: 2
    },
    {
        src: "https://cdn.shopify.com/s/files/1/1099/2822/products/IMG_9586_003af6f1-4587-431d-8c6c-8b2962d12c97.jpg?v=1557781019",
        width: 4,
        height: 3
    },
  ];
  
/**
 * Renders a vertical and scrollable gallery of photos
 */
const ImageList = () => {
    return (
        <div style={{ paddingRight: 16, paddingLeft: 16}}>
            <Gallery photos={photos} direction="column" columns={1} />
        </div>
    );
};
  
export default ImageList;