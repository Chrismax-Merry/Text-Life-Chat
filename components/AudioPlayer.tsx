interface Props {
  src: string;
}

export default function AudioPlayer({ src }: Props) {

  return (
    <>
      <audio id="audio" preload="none" controls className="audio-player">
        <source id="mp3" src={src} />
      </audio>
    </>
  );
}
