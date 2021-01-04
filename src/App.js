import './css/sass/style.css';
import ReactMixitup from 'react-mixitup'
import Navbar from './components/Navbar';
import $ from "jquery"
import { Component } from 'react';
import Navbutton from './components/Navbutton';
import Main1 from './components/Main1'
import Titles from './components/Titles'
import Main2 from './components/Main2'
import Main3 from './components/Main3'
import Main4 from './components/Main4'
import Main5 from './components/Main5'
import Main6 from './components/Main6'
import Footer from './components/Footer'
import pic1 from './images/pic1.jpg'
import pic2 from "./images/pic2.jpg"
import pic3 from "./images/pic3.jpg"
import pic4 from "./images/pic4.jpg"
import person1 from "./images/person1.jpg"
import person2 from "./images/person2.jpg"







class App extends Component {
  state={
    navs:[
      {
        id:1,
        name:"Home",
        href:"#home"
      },
      {
        id:2,
        name:"About",
        href:"#about"
      },
      {
        id:3,
        name:"Services",
        href:"#services"
      },
      {
        id:4,
        name:"Portfolio",
        href:"#portfolio"
      },
      {
        id:5,
        name:"News",
        href:"#news"
      },
      {
        id:6,
        name:"Contact",
        href:"#contact"
      }
    ],
    headlines:[
      ["Biography","About Me","about"],
      ["Services","What I Do","services"],
      ["Portfolio","Featured Works","portfolio"],
      ["Contact","Get In Touch","contact"]
    ],
    infos:[
      {
        icon:"fa fa-birthday-cake color-change",
        value:"Birthday: 01.07.1990"
      },
      {
        icon:"fa fa-calendar color-change",
        value:"Age: 30"
      },
      {
        icon:"fa fa-map-marker color-change",
        value:"544 Place, Plano, USA"
      },
      {
        icon:"fa fa-gamepad color-change",
        value:"Interests: Playstation, Reading"
      },
      {
        icon:"fa fa-graduation-cap color-change",
        value:"Degree: Master"
      },
      {
        icon:"fa fa-phone color-change",
        value:"Phone: +77 022 177 05 05"
      }
    ],
    services:[
      {
        class:"fa fa-lightbulb-o color-change",
        h5:"Creative Design",
        p:"Web design is a similar process of creation, with the intention of presenting..."
      },
      {
        class:"fa fa-desktop color-change",
        h5:"Web Development",
        p:"Web design is a similar process of creation, with the intention of presenting..."
      },
      {
        class:"fa fa-telegram color-change",
        h5:"Brand Identity",
        p:"Web design is a similar process of creation, with the intention of presenting..."
      },
      {
        class:"fa fa-deviantart color-change",
        h5:"Photoshop",
        p:"Web design is a similar process of creation, with the intention of presenting..."
      },
      {
        class:"fa fa-superpowers color-change",
        h5:"Illustrator",
        p:"Web design is a similar process of creation, with the intention of presenting..."
      },
      {
        class:"fa fa-share-alt color-change",
        h5:"Social Media",
        p:"Web design is a similar process of creation, with the intention of presenting..."
      },
    ],
    progresses:[
      {
        span1:"Web Development",
        span2:"95%",
        class:"progress-bar progress1 background-color"
      },
      {
        span1:"Brand Identity",
        span2:"80%",
        class:"progress-bar progress2 background-color"
      },
      {
        span1:"JavaScript",
        span2:"90%",
        class:"progress-bar progress3 background-color"
      },
      {
        span1:"Wordpress",
        span2:"85%",
        class:"progress-bar progress4 background-color"
      },
    ],
    images:[
      {
        class:"col-xl-4 col-lg-6 col-md-6 all vimo",
        pic: pic1
      },
      {
        class:"col-xl-4 col-lg-6 col-md-6 all youtube",
        pic: pic2
      },
      {
        class:"col-xl-4 col-lg-6 col-md-6 all vimo",
        pic: pic3
      },
      {
        class:"col-xl-4 col-lg-6 col-md-6 all images",
        pic: pic4
      },
      {
        class:"col-xl-4 col-lg-6 col-md-6 all youtube",
        pic: person1
      },
      {
        class:"col-xl-4 col-lg-6 col-md-6 all images",
        pic: person2
      },
      
    ],
    slider:[
      {
        p:"I purchased the theme a few weeks ago. I had some issues with the theme, I asked customer support to help me with and they were helpful and kind to help me with all my problems. I definitely recommend this theme to everyone.",
        img: person1,
        h5: "Albert Walkers"
      },
      {
        p:"We were looking for a logo with a touch of modernism. Arlo grasped our needs and produced a stunning design. Awesome to work with Arlo. Incredibly organized, easy to communicate with, responsive with next iterations.",
        img: person2,
        h5: "Elias Peters"
      },
      {
        p:"Really the Code, Support, and design are awesome and its good support they are giving. They give an instant solution to our needs. Really awesome. I will strongly recommend to my friends. Great template, even better service!",
        img: pic2,
        h5: "Max Awesome"
      }
    ]
  }
  nav=()=>{
    $(".icon").toggleClass("close");
    $("header nav").slideToggle(400);
  }
  backgrounds=(e)=>{
    var x = e.target.value
    $(".color-change").css("color",x)
    $(".background-color").css("background",x)
  }
  colorSlider=()=>{
    $(".backgrounds").toggleClass("slider")
    $(".setting").toggleClass("setting-slide")
  }
  all=()=>{
    $(".all").hide()
    $(".all").fadeIn(500)
    $(".all-word").addClass("active")
    $(".all-word").siblings().removeClass("active")
  }
  vimo=()=>{
    $(".vimo").siblings().hide()
    $(".vimo").fadeIn(500)
    $(".vimo-word").addClass("active")
    $(".vimo-word").siblings().removeClass("active")
  }
  youtube=()=>{
    $(".youtube").siblings().hide()
    $(".youtube").fadeIn(500)
    $(".youtube-word").addClass("active")
    $(".youtube-word").siblings().removeClass("active")

  }
  pics=()=>{
    $(".images").siblings().hide()
    $(".images").fadeIn(500)
    $(".images-word").addClass("active")
    $(".images-word").siblings().removeClass("active")
  }
  render(){
    return (
      <div className="App">
        <i class="fa fa-cog setting" aria-hidden="true" onClick={this.colorSlider}></i>
        <div className="backgrounds">
          <i class="fa fa-paint-brush" aria-hidden="true"></i>
          <h5>Colors</h5>
          <button value="#333333" className="button1" onClick={this.backgrounds}></button>
          <button value="red" onClick={this.backgrounds}></button>
          <button value="green" onClick={this.backgrounds}></button>
          <button value="orange" onClick={this.backgrounds}></button><br/>
          <button value="#4169E1" onClick={this.backgrounds}></button>
          <button value="#00D4BD" onClick={this.backgrounds}></button>
          <button value="#66B95C" onClick={this.backgrounds}></button>
          <button value="#E54B4B" onClick={this.backgrounds}></button><br/>
          <button value="#9200EE" onClick={this.backgrounds}></button>
          <button value="#666D41" onClick={this.backgrounds}></button>
          <button value="#FF5E94" onClick={this.backgrounds}></button>
          <button value="yellow" onClick={this.backgrounds}></button><br/>
        </div>
        <Navbutton nav={this.nav} navresize={this.navresize}/>
        <header className="App-header">
            <Navbar navs={this.state.navs}/>  
        </header>
        <main>
          <Main1/>
          <Titles id={this.state.headlines[0][2]} span={this.state.headlines[0][0]} h2={this.state.headlines[0][1]}/>
          <Main2 infos={this.state.infos}/>
          <Titles id={this.state.headlines[1][2]} span={this.state.headlines[1][0]} h2={this.state.headlines[1][1]}/>
          <Main3 services={this.state.services} progresses={this.state.progresses}/>
          <Titles id={this.state.headlines[2][2]} span={this.state.headlines[2][0]} h2={this.state.headlines[2][1]}/>
          <Main4 images={this.state.images} vimo={this.vimo} youtube={this.youtube} all={this.all} pics={this.pics}/>
          <Main5 slider={this.state.slider}/>
          <Titles id={this.state.headlines[3][2]} span={this.state.headlines[3][0]} h2={this.state.headlines[3][1]}/>
          <Main6/>
          <Footer/>
        </main>
        
      </div>
    );
  }
}
function navresize(){
  if($(window).width()>991.98){
    $(".icon").removeClass("close");
    $("header nav").show();
  }else{
    $("header nav").hide();
  }
  if($(window).width()<=991.98){
    $(".icon").removeClass("close");
  }else if($(window).width()<=575.98){
    $(".icon").removeClass("close");
  }else if($(window).width()<=768){
    $(".icon").removeClass("close");
  }
}
window.addEventListener('resize',navresize)


 
export default App;
