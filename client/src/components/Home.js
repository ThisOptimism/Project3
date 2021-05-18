import React from 'react';
import courseImg from "../images/courses__language__speak.jpg";
import dictionaryImg from "../images/dictionaryVector.jpg";
import poetryImg from "../images/free-poem-vector.jpg";
import HomePageServiceDiv from './HomePageServiceDiv';
import { Link } from 'react-router-dom';

class Home extends React.Component {


  render() {
    return (
      <main>
        <section id="landing" className="flex flex-col items-center my-4">
          <h1 className="text-white text-6xl my-6">LingoFish</h1>
          <p className=" text-white text-3xl ">Language learning made authentic</p>
 
        </section>
        <section className="text-center">
          <div id="infoSection" className="flex flex-wrap justify-around p-10">
            <HomePageServiceDiv heading="Instant translations" text="Just click on any word to see its translation in your chosen language" img={courseImg} />
            <HomePageServiceDiv text="Add words to your vocab lists, use flashcards and view lists from other users." heading="Create your own lists and dictionary" img={dictionaryImg} />
            <HomePageServiceDiv heading="Authentic, interesting texts" text="Choose from our library of articles, books and poems, or upload your favourite texts" img={poetryImg} />
            
          </div>
          <Link to="/signup"><button className="bg-white p-4 rounded-lg hover:bg-green-200 ">Get started!</button></Link>
        </section>
      </main>
    )
  }
}

export default Home;