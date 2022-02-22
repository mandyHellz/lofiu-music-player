import { v4 as uuidv4 } from "uuid";

function chillHopSongs() {
  return [
    {
      name: "Polaroid",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/09/1db4d2274604636097241aca0f7077594e95edc7-1024x1024.jpg",
      artist: "Makzo, Mama Aiuto",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=24767",
      color: ["#C0D8E2", "#6B2D47"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Slowly Gone",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/09/1db4d2274604636097241aca0f7077594e95edc7-1024x1024.jpg",
      artist: "Leavv",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=24706",
      color: ["#C0D8E2", "#6B2D47"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Hideout",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/669e6ed53ce0d385e072ea9c77d159297bbca41f-1024x1024.jpg",
      artist: "Tesk",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8481",
      color: ["#DA826C", "#D5767E"],
      id: uuidv4(),
      active: false,
    },
  ];
}
export default chillHopSongs;
