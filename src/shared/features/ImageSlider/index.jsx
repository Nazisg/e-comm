import React, { useState } from "react";
import mainImage from '../../media/imgs/product-sneakers-2.png'
import sliderImage1 from '../../media/imgs/slider-image-1.png'
import sliderImage2 from '../../media/imgs/slider-image-2.png'
import sliderImage3 from '../../media/imgs/slider-image-3.png'

const ImageSlider = () => {
    const images = [
        sliderImage1,
        sliderImage2,
        mainImage,
        sliderImage3
    ];

    const [selectedImage, setSelectedImage] = useState(mainImage);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    return (
        <div>
            <div className="w-full lg:w-[375px] h-[271px] bg-[#F6F6F6] rounded-lg">
                <img src={selectedImage} alt="product" className="w-full h-full object-contain" />
            </div>

            <div className="items-center gap-3 mt-3 hidden lg:flex">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`bg-[#F6F6F6] w-[85px] h-[85px] border-[3px] ${selectedImage === image ? "border-[#006CFF]" : "border-[#E5E8EA]"
                            }`}
                        onClick={() => handleImageClick(image)}
                    >
                        <img src={image} alt={`product thumbnail ${index + 1}`} className="w-full h-full object-contain cursor-pointer" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
