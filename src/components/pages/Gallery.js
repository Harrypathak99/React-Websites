import React from 'react'
import './Page.css'
import Footer from '../Footer';

const Gallery = () => {
    const images = [
        { id: 11, src: 'https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg?s=612x612&w=0&k=20&c=FSGliJ4EKFP70Yjpzso0HfRR4WwflC6GKfl4F3Hj7fk=', alt: 'Image 2' },
        { id: 1, src: 'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-346529.jpg&fm=jpg', alt: 'Image 1' },
        { id: 2, src: 'https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg?s=612x612&w=0&k=20&c=FSGliJ4EKFP70Yjpzso0HfRR4WwflC6GKfl4F3Hj7fk=', alt: 'Image 2' },
        
        { id: 4, src: 'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-346529.jpg&fm=jpg', alt: 'Image 1' },
        { id: 3, src: 'https://media.istockphoto.com/id/500177214/photo/moraine-lake-in-banff-national-park-canada.jpg?s=612x612&w=0&k=20&c=Fh7pn-ehTArjENrATrs1Y8vD5bc7n1MWe19_NbSHbCU=', alt: 'Image 3' },
        { id: 5, src: 'https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg?s=612x612&w=0&k=20&c=FSGliJ4EKFP70Yjpzso0HfRR4WwflC6GKfl4F3Hj7fk=', alt: 'Image 2' },
        { id: 6, src: 'https://media.istockphoto.com/id/500177214/photo/moraine-lake-in-banff-national-park-canada.jpg?s=612x612&w=0&k=20&c=Fh7pn-ehTArjENrATrs1Y8vD5bc7n1MWe19_NbSHbCU=', alt: 'Image 3' },
        { id: 7, src: 'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-346529.jpg&fm=jpg', alt: 'Image 1' },
        { id: 8, src: 'https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg?s=612x612&w=0&k=20&c=FSGliJ4EKFP70Yjpzso0HfRR4WwflC6GKfl4F3Hj7fk=', alt: 'Image 2' },
        { id: 9, src: 'https://media.istockphoto.com/id/500177214/photo/moraine-lake-in-banff-national-park-canada.jpg?s=612x612&w=0&k=20&c=Fh7pn-ehTArjENrATrs1Y8vD5bc7n1MWe19_NbSHbCU=', alt: 'Image 3' },
        { id: 10, src: 'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-346529.jpg&fm=jpg', alt: 'Image 1' },
        { id: 11, src: 'https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg?s=612x612&w=0&k=20&c=FSGliJ4EKFP70Yjpzso0HfRR4WwflC6GKfl4F3Hj7fk=', alt: 'Image 2' },
        { id: 12, src: 'https://media.istockphoto.com/id/500177214/photo/moraine-lake-in-banff-national-park-canada.jpg?s=612x612&w=0&k=20&c=Fh7pn-ehTArjENrATrs1Y8vD5bc7n1MWe19_NbSHbCU=', alt: 'Image 3' },
        // Add more images as needed
      ];
  return (
    <div>
    <div className="gallery">
      {images.map(image => (
        <img key={image.id} src={image.src} alt={image.alt} className="gallery-image" />
      ))}
    </div>
        <Footer />
    </div>

  )
}

export default Gallery