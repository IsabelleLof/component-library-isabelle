export default function CustomPicture({
    size,
    color,
    href,
    imgAlt,
    imgSrc,
    className,
    // title,
    children,
}) {
    const PictureStyle = {
      backgroundColor: color,
      height: size,
      width: size,
    
    };
  
    return (
      <>
        <a href={href} target="_blank" rel="noopener noreferrer">
          <div style={PictureStyle} className={`relative ${className} cardimg bg-clip-border mx-4 overflow-hidden relative mt-4`}>
            {/* {title} */}
            {imgSrc && (
              <img
                src={imgSrc}
                alt={imgAlt}
                className="object-cover w-full h-full"
              />
            )}
            {children}
          </div>
        </a>
      </>
    );
  }