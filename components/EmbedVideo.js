export default function VideoPage({url}) {
    return (
        <div className='flex items-center justify-center mt-4'>
            <div className="iframe-parent relative lg:h-[50%] lg:w-[50%] lg:aspect-w-16 lg:aspect-h-4 md:w-[100%] md:h-[100%] h-[100%] w-[80%] aspect-w-16 aspect-h-8">
                    <iframe
                        src={url}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full"
                        allowtransparency='true'
                        
                    />
            </div>
        </div>
    );
}
