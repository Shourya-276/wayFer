import React, { useState, useEffect, useRef } from 'react';
import { Volume2, Music } from 'lucide-react';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export const BackgroundAudio: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<any>(null);
  const hasSeekedRef = useRef<boolean>(false);

  // Send direct postMessage command to YouTube iframe as fallback
  const sendIframeCommand = (command: string, args: any[] = []) => {
    try {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func: command, args }),
          '*'
        );
      }
    } catch (e) {
      console.warn('YouTube postMessage error:', e);
    }
  };

  const startPlayback = () => {
    try {
      if (playerRef.current && typeof playerRef.current.playVideo === 'function') {
        playerRef.current.unMute();
        if (typeof playerRef.current.setVolume === 'function') {
          playerRef.current.setVolume(100);
        }
        if (!hasSeekedRef.current && typeof playerRef.current.seekTo === 'function') {
          playerRef.current.seekTo(15, true);
          hasSeekedRef.current = true;
        }
        playerRef.current.playVideo();
      } else {
        sendIframeCommand('unMute');
        sendIframeCommand('setVolume', [100]);
        if (!hasSeekedRef.current) {
          sendIframeCommand('seekTo', [15, true]);
          hasSeekedRef.current = true;
        }
        sendIframeCommand('playVideo');
      }
      setIsPlaying(true);
    } catch (err) {
      console.warn('Playback attempt:', err);
    }
  };

  useEffect(() => {
    // 1. Load YouTube IFrame API script
    const loadYT = () => {
      if (window.YT && window.YT.Player) {
        initPlayer();
      } else {
        const existingScript = document.querySelector('script[src="https://www.youtube.com/iframe_api"]');
        if (!existingScript) {
          const tag = document.createElement('script');
          tag.src = 'https://www.youtube.com/iframe_api';
          document.body.appendChild(tag);
        }
        window.onYouTubeIframeAPIReady = initPlayer;
      }
    };

    const initPlayer = () => {
      if (playerRef.current || !iframeRef.current) return;
      try {
        playerRef.current = new window.YT.Player(iframeRef.current, {
          events: {
            onReady: (event: any) => {
              try {
                event.target.unMute();
                event.target.setVolume(100);
                if (!hasSeekedRef.current) {
                  event.target.seekTo(15, true);
                  hasSeekedRef.current = true;
                }
                event.target.playVideo();
                if (event.target.getPlayerState?.() === 1) {
                  setIsPlaying(true);
                }
              } catch (e) {
                console.log('Autoplay pending user interaction', e);
              }
            },
            onStateChange: (event: any) => {
              // 1 = PLAYING
              if (event.data === 1) {
                setIsPlaying(true);
              } else if (event.data === 0) {
                // When ended, loop back to 0:15s and keep playing
                if (typeof event.target.seekTo === 'function') {
                  event.target.seekTo(15, true);
                }
                event.target.playVideo();
                setIsPlaying(true);
              } else if (event.data === 2) {
                // If paused for any reason, auto-resume always
                event.target.playVideo();
                setIsPlaying(true);
              }
            },
          },
        });
      } catch (e) {
        console.warn('YT Player init:', e);
      }
    };

    loadYT();

    // 2. Modern browsers require 1 physical gesture (click/touch/key) before unmuted sound can play.
    const handleFirstInteraction = () => {
      startPlayback();
      cleanupListeners();
    };

    const cleanupListeners = () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction, { once: true, passive: true });
    window.addEventListener('touchstart', handleFirstInteraction, { once: true, passive: true });
    window.addEventListener('keydown', handleFirstInteraction, { once: true, passive: true });
    window.addEventListener('scroll', handleFirstInteraction, { once: true, passive: true });

    // Ensure audio stays alive when tab visibility changes
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        startPlayback();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      cleanupListeners();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (playerRef.current && typeof playerRef.current.destroy === 'function') {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <>
      {/*
        Audio-Only YouTube Embed:
        Starts at 0:15s, unmuted, looping continuously, zero option to mute/pause.
      */}
      <iframe
        ref={iframeRef}
        id="wayfer-bg-soundtrack"
        title="WayFer Background Soundtrack"
        src="https://www.youtube.com/embed/pfVODjDBFxU?enablejsapi=1&autoplay=1&mute=0&start=15&loop=1&playlist=pfVODjDBFxU&controls=0&playsinline=1&rel=0"
        allow="autoplay; encrypted-media"
        tabIndex={-1}
        aria-hidden="true"
        className="fixed bottom-0 right-0 w-48 h-32 opacity-[0.001] pointer-events-none -z-50"
      />

      {/* Floating Soundtrack Indicator (Display-only pill, no mute/pause option) */}
      <div className="fixed bottom-4 right-4 z-50">
        <div
          onClick={startPlayback}
          className="flex items-center gap-2.5 px-3.5 py-2 rounded-full border border-white/25 bg-black/85 text-white shadow-[0_0_25px_rgba(255,255,255,0.15)] backdrop-blur-xl transition-all duration-300 select-none cursor-default"
        >
          {isPlaying ? (
            <>
              {/* Dynamic Soundwave Equalizer Bars */}
              <div className="flex items-end gap-[3px] h-3.5 w-3.5 pb-0.5">
                <span className="w-0.5 h-full bg-white rounded-full animate-bounce [animation-duration:600ms]" />
                <span className="w-0.5 h-3/5 bg-white rounded-full animate-bounce [animation-duration:800ms] [animation-delay:150ms]" />
                <span className="w-0.5 h-4/5 bg-white rounded-full animate-bounce [animation-duration:500ms] [animation-delay:300ms]" />
              </div>
              <span className="text-[11px] font-mono tracking-tight text-neutral-200 font-medium">
                Satisfya Playing
              </span>
              <Volume2 className="w-3.5 h-3.5 text-white ml-0.5" />
            </>
          ) : (
            <>
              <Music className="w-3.5 h-3.5 text-white animate-pulse" />
              <span className="text-[11px] font-mono tracking-tight text-white font-medium">
                Satisfya (WayFer Theme)
              </span>
              <Volume2 className="w-3.5 h-3.5 text-neutral-300 ml-0.5" />
            </>
          )}
        </div>
      </div>
    </>
  );
};
