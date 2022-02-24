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
      name: "Hideout",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/669e6ed53ce0d385e072ea9c77d159297bbca41f-1024x1024.jpg",
      artist: "Tesk",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8481",
      color: ["#DA826C", "#D5767E"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Last Snow",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/bb0db71fd74f15627e9912ad2278c13cee72ac2d-1024x1024.jpg",
      artist: "Philanthrope, B-Side, Yasper",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=7871",
      color: ["#0DA8B9", "#038B86"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Coda",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg",
      artist: "Aarigod",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=13001",
      color: ["#99AE69", "#C9AE60"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Soupeddd!",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/e2c1d247228c0f82e459dc340741e0b1a46c8f5f-1024x1024.jpg",
      artist: "Philanthrope, mommy, weird inside",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9242",
      color: ["#9B97A0", "#4D4B5B"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Colors Fade",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/686808356b2bbc6a368e372ea604150bc346c788-1024x1024.jpg",
      artist: "Sleepy Fish",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10023",
      color: ["#CAE5E8", "#658799"],
      id: uuidv4(),
      active: false,
    },
  ];
}
export default chillHopSongs;
