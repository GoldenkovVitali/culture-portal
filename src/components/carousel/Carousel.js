import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './carousel.css';
import GitHubProfile from '../gitHubProfile/gitHubProfile';

const CarouselComponent = () => (
  <Carousel
    showThumbs={false}
    showIndicators={false}
    showStatus={false}
    showArrows={false}
    infiniteLoop
    autoPlay
    interval={3000}
    transitionTime={700}
  >
    <div className="carousel-item">
      <GitHubProfile
        name="Yury Chuchvaha"
        git="uniorunr"
        image="https://avatars2.githubusercontent.com/u/33601725?s=460&v=4"
      />
      <GitHubProfile
        name="Evgeniy Oleshkevich"
        git="systemghost"
        image="https://avatars3.githubusercontent.com/u/5677074?s=460&v=4"
      />
      <GitHubProfile
        name="Anton Yahorau"
        git="antosha33"
        image="https://avatars1.githubusercontent.com/u/28390094?s=400&v=4"
      />
    </div>
    <div className="carousel-item">
      <GitHubProfile
        name="Darya Novak"
        git="daryanovak"
        image="https://avatars1.githubusercontent.com/u/25826685?s=460&v=4"
      />
      <GitHubProfile
        name="Vadzim Zartaiski"
        git="zartaich"
        image="https://avatars3.githubusercontent.com/u/33836291?s=460&v=4"
      />
      <GitHubProfile
        name="Aliaksei Petrakou"
        git="tppd67421"
        image="https://avatars2.githubusercontent.com/u/25455143?s=460&v=4"
      />
    </div>
  </Carousel>
);

export default CarouselComponent;
