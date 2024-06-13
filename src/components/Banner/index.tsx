import React, { ReactElement } from 'react';
import "./styles.css";

interface BannerProps {
  sourceImage: string;
  alternativeTxt?: string;
}

function Banner({ sourceImage, alternativeTxt }: BannerProps) {
  return (
    <header className="banner">
      <img src={sourceImage} alt={alternativeTxt} />
    </header>
  );
}

export default Banner;
