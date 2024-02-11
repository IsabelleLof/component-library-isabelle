export default function CustomCard({
    size,
    color,
    href,
    imgAlt,
    imgSrc,
    className,
    // title,
    children,
}) {
    const CardStyle = {
      backgroundColor: color,
      height: size,
      width: size,
    
    };
  
    return (
      <>
        <a href={href} target="_blank" rel="noopener noreferrer">
          <div style={CardStyle} className={`relative ${className} cardimg bg-clip-border mx-4 overflow-hidden relative mt-4`}>
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