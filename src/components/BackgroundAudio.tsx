import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export const BackgroundAudio: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const playerRef = useRef<any>(null);
  const isInitializedRef = useRef<boolean>(false);

  useEffect(() => {
    // Function to create/mount the YouTube player
    const initPlayer = () => {
      if (isInitializedRef.current || !window.YT || !window.YT.Player) return;
      isInitializedRef.current = true;

      playerRef.current = new window.YT.Player('yt-bg-audio-player', {
        videoId: 'pfVODjDBFxU',
        playerVars: {
          autoplay: 1,
          loop: 1,
          playlist: 'pfVODjDBFxU', // Required for looping in YT player
          controls: 0,
          disablekb: 1,
          fs: 0,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          enablejsapi: 1,
        },
        events: {
          onReady: (event: any) => {
            // Attempt autoplay immediately
            try {
              event.target.playVideo();
            } catch (err) {
              console.log('Autoplay deferred until user interaction', err);
            }
          },
          onStateChange: (event: any) => {
            // 1 = PLAYING, 2 = PAUSED, 0 = ENDED, 3 = BUFFERING
            if (event.data === 1) {
              setIsPlaying(true);
            } else if (event.data === 2 || event.data === 0) {
              setIsPlaying(false);
            }
          },
        },
      });
    };

    // Load YouTube API script if not loaded
    if (!window.YT) {
      const existingScript = document.querySelector('script[src="https://www.youtube.com/iframe_api"]');
      if (!existingScript) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        document.body.appendChild(tag);
      }
      window.onYouTubeIframeAPIReady = initPlayer;
    } else {
      initPlayer();
    }

    // Browsers block autoplay of unmuted audio without user gesture.
    // Listen for the first user click / touch / key anywhere on the site to trigger playback if not already playing.
    const handleFirstUserInteraction = () => {
      if (playerRef.current && typeof playerRef.current.playVideo === 'function') {
        const state = typeof playerRef.current.getPlayerState === 'function' ? playerRef.current.getPlayerState() : -1;
        if (state !== 1) {
          playerRef.current.playVideo();
        }
      }
      removeListeners();
    };

    const removeListeners = () => {
      window.removeEventListener('click', handleFirstUserInteraction);
      window.removeEventListener('touchstart', handleFirstUserInteraction);
      window.removeEventListener('keydown', handleFirstUserInteraction);
      window.removeEventListener('scroll', handleFirstUserInteraction);
    };

    window.addEventListener('click', handleFirstUserInteraction, { once: true });
    window.addEventListener('touchstart', handleFirstUserInteraction, { once: true });
    window.addEventListener('keydown', handleFirstUserInteraction, { once: true });
    window.addEventListener('scroll', handleFirstUserInteraction, { once: true });

    return () => {
      removeListeners();
      if (playerRef.current && typeof playerRef.current.destroy === 'function') {
        playerRef.current.destroy();
        playerRef.current = null;
        isInitializedRef.current = false;
      }
    };
  }, []);

  const togglePlay = () => {
    if (!playerRef.current) return;
    try {
      if (isPlaying) {
        playerRef.current.pauseVideo();
        setIsPlaying(false);
      } else {
        playerRef.current.playVideo();
        setIsPlaying(true);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      {/* Invisible YouTube Player Container for Audio-Only */}
      <div
        className="fixed -top-[9999px] -left-[9999px] w-1 h-1 opacity-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div id="yt-bg-audio-player" />
      </div>

      {/* Floating Audio Controller Badge */}
      <div className="fixed bottom-4 right-4 z-40">
        <button
          type="button"
          onClick={togglePlay}
          className="flex items-center gap-2 px-3 py-2 rounded-full bg-black/80 hover:bg-neutral-900 border border-white/20 text-white shadow-[0_4px_24px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer group"
          title={isPlaying ? 'Pause Background Soundtrack' : 'Play Background Soundtrack'}
          aria-label={isPlaying ? 'Pause Background Soundtrack' : 'Play Background Soundtrack'}
        >
          {isPlaying ? (
            <>
              {/* Dynamic Soundwave Equalizer Bars */}
              <div className="flex items-end gap-[3px] h-3.5 w-3.5 pb-0.5">
                <span className="w-0.5 h-full bg-white rounded-full animate-bounce [animation-duration:600ms]" />
                <span className="w-0.5 h-3/5 bg-white rounded-full animate-bounce [animation-duration:800ms] [animation-delay:150ms]" />
                <span className="w-0.5 h-4/5 bg-white rounded-full animate-bounce [animation-duration:500ms] [animation-delay:300ms]" />
              </div>
              <span className="text-[11px] font-mono tracking-tight text-neutral-200 group-hover:text-white font-medium">
                Soundtrack Playing
              </span>
              <Volume2 className="w-3.5 h-3.5 text-white ml-0.5" />
            </>
          ) : (
            <>
              <Music className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white" />
              <span className="text-[11px] font-mono tracking-tight text-neutral-300 group-hover:text-white font-medium">
                Play Soundtrack
              </span>
              <VolumeX className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white ml-0.5" />
            </>
          )}
        </button>
      </div>
    </>
  );
};
