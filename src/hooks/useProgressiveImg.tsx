import React from "react";
const useProgressiveImg = (lowQualitySrc:string, highQualitySrc:string) => {
    const [src, setSrc] = React.useState(lowQualitySrc);
    React.useEffect(() => {
        setSrc(lowQualitySrc);
        const img = new Image();
        img.src = highQualitySrc;
        img.onload = () => {
            setSrc(highQualitySrc);
        };
    }, [lowQualitySrc, highQualitySrc]);
    //   return [src, { blur: src === lowQualitySrc }];
    console.log('debugImg',{src, lowQualitySrc});
    return {src, blur: src === lowQualitySrc};

};

export default useProgressiveImg;