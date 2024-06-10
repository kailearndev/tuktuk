import { YouTubeEmbed } from "react-social-media-embed";

const Home = () => {
  return (
    <div className="flex justify-center items-center  flex-col overflow-auto gap-5 mb-20 scroll-smooth">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <YouTubeEmbed
          style={{
            borderRadius: 10,
          }}
          url="https://www.youtube.com/watch?v=Qyh8ZArkHMs"
          width={360}
          height={840}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <YouTubeEmbed
          style={{
            borderRadius: 10,
          }}
          url="https://www.youtube.com/watch?v=Qyh8ZArkHMs"
          width={360}
          height={830}
        />
      </div>
    </div>
  );
};

export default Home;
