import { useQuery } from "react-query";

const TutorialList = () => {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch(
      "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&maxResults=50&key=AIzaSyCHT-JZ1WdmBmyKJEecK8jpQumVDvuVtxI"
    ).then((res) => res.json())
  );

  if (isLoading) return <> Loading...</>;

  if (error) return <>An error has occurred: {error} </>;

  return data.items.map((i: any, idx: number) => (
    <div key={idx}>
      <a
        href={`https://www.youtube.com/watch?v=${i.snippet.resourceId.videoId}`}
      >
        <img src={i.snippet.thumbnails.default.url} />
      </a>
    </div>
  ));
};

export default TutorialList;
