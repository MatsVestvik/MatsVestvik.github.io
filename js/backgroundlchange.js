function initializeVideoBackground() {
    const div2 = document.querySelector('.two');
    const div3 = document.querySelector('.three');
    
    // Initialize for div2
    initializeMediaForDiv(div2, 2);
    
    // Initialize for div3
    initializeMediaForDiv(div3, 3);
}

function initializeMediaForDiv(divElement, contentDataIndex) {
    // Make sure div exists AND contentData has backgroundVideo or backgroundGif property
    const mediaData = contentData[contentDataIndex];
    if (divElement && mediaData && (mediaData.backgroundVideo || mediaData.backgroundGif)) {
        let backgroundMedia = null;
        
        divElement.addEventListener('mouseenter', () => {
            const mediaUrl = mediaData.backgroundVideo || mediaData.backgroundGif;
            const isGif = mediaData.backgroundGif ? true : false;
            
            if (isGif) {
                // Create and setup GIF element
                backgroundMedia = document.createElement('img');
                backgroundMedia.id = `page-background-media-${contentDataIndex}`;
                backgroundMedia.src = mediaUrl;
                backgroundMedia.alt = 'Background GIF';
            } else {
                // Create and setup video element
                backgroundMedia = document.createElement('video');
                backgroundMedia.id = `page-background-media-${contentDataIndex}`;
                backgroundMedia.autoplay = true;
                backgroundMedia.muted = true;
                backgroundMedia.loop = true;
                backgroundMedia.playsInline = true;
                
                // Add video source
                const source = document.createElement('source');
                source.src = mediaUrl;
                source.type = 'video/mp4';
                backgroundMedia.appendChild(source);
            }
            
            // Style the media (same for both video and GIF)
            backgroundMedia.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                min-width: 100%;
                min-height: 100%;
                width: auto;
                height: auto;
                z-index: -100;
                object-fit: cover;
            `;
            
            // Add to page
            document.body.appendChild(backgroundMedia);
            
            // Optional: Add dark overlay for better text readability
            let overlay = document.getElementById(`media-overlay-${contentDataIndex}`);
            if (!overlay) {
                overlay = document.createElement('div');
                overlay.id = `media-overlay-${contentDataIndex}`;
                overlay.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.4);
                    z-index: -99;
                `;
                document.body.appendChild(overlay);
            }
        });
        
        divElement.addEventListener('mouseleave', () => {
            // Remove media and overlay
            if (backgroundMedia && backgroundMedia.parentNode) {
                backgroundMedia.parentNode.removeChild(backgroundMedia);
            }
            const overlay = document.getElementById(`media-overlay-${contentDataIndex}`);
            if (overlay && overlay.parentNode) {
                overlay.parentNode.removeChild(overlay);
            }
        });
    } else {
        console.log(`Background media for contentData[${contentDataIndex}] not initialized. Check:`, {
            divExists: !!divElement,
            contentDataExists: !!mediaData,
            hasBackgroundVideo: mediaData ? !!mediaData.backgroundVideo : false,
            hasBackgroundGif: mediaData ? !!mediaData.backgroundGif : false
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    initializeVideoBackground();
});