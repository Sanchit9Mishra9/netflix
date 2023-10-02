import React from "react";
import "./Home.scss";
// import avengers from "../../avengers.png";

const Card = ({ img }) => <img className="card" src={img} alt="cover" />;

const Row = ({
  title,
  arr = [
    {
      img: "http://media.comicbook.com/2018/03/avengers-infinity-war-poster-1093756.jpeg",
    },
  ],
}) => (
  <div className="row">
    <h2>{title}</h2>
    <div>
      {arr.map((item) => (
        <Card img={item.img} />
      ))}
    </div>
  </div>
);

const Home = () => {
  return (
    <section className="home">
      <div className="banner"></div>
      <Row title={"Popular on Netflix"} />
    </section>
  );
};

export default Home;
