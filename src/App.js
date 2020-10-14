import React, { Component } from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import Axios from 'axios';
import InfiniteCarousel from 'react-leaf-carousel';
import { render } from '@testing-library/react';



class App extends Component {
  state={
    album:[],
    images:[]
    // album:[{
    //   userId: 1,
    //   id: 1,
    //   title: "quidem molestiae enim"
    //   }],
    // images:[{
    //   albumId: 1,
    //   id: 1,
    //   title: "accusamus beatae ad facilis cum similique qui sunt",
    //   url: "https://via.placeholder.com/600/92c952",
    //   thumbnailUrl: "https://via.placeholder.com/150/92c952"
    //   },
    //   {
    //   albumId: 1,
    //   id: 2,
    //   title: "reprehenderit est deserunt velit ipsam",
    //   url: "https://via.placeholder.com/600/771796",
    //   thumbnailUrl: "https://via.placeholder.com/150/771796"
    //   },
    //   {
    //   albumId: 1,
    //   id: 3,
    //   title: "officia porro iure quia iusto qui ipsa ut modi",
    //   url: "https://via.placeholder.com/600/24f355",
    //   thumbnailUrl: "https://via.placeholder.com/150/24f355"
    //   },
    //   {
    //     albumId: 1,
    //     id: 4,
    //     title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    //     url: "https://via.placeholder.com/600/d32776",
    //     thumbnailUrl: "https://via.placeholder.com/150/d32776"
    //     },
    //   {
    //   albumId: 1,
    //   id: 5,
    //   title: "natus nisi omnis corporis facere molestiae rerum in",
    //   url: "https://via.placeholder.com/600/f66b97",
    //   thumbnailUrl: "https://via.placeholder.com/150/f66b97"
    //   },
    //   {
    //   albumId: 1,
    //   id: 6,
    //   title: "accusamus ea aliquid et amet sequi nemo",
    //   url: "https://via.placeholder.com/600/56a8c2",
    //   thumbnailUrl: "https://via.placeholder.com/150/56a8c2"
    //   },
    //   {
    //   albumId: 1,
    //   id: 7,
    //   title: "officia delectus consequatur vero aut veniam explicabo molestias",
    //   url: "https://via.placeholder.com/600/b0f7cc",
    //   thumbnailUrl: "https://via.placeholder.com/150/b0f7cc"
    //   },
    //   {
    //   albumId: 1,
    //   id: 8,
    //   title: "aut porro officiis laborum odit ea laudantium corporis",
    //   url: "https://via.placeholder.com/600/54176f",
    //   thumbnailUrl: "https://via.placeholder.com/150/54176f"
    //   },
    //   {
    //   albumId: 1,
    //   id: 9,
    //   title: "qui eius qui autem sed",
    //   url: "https://via.placeholder.com/600/51aa97",
    //   thumbnailUrl: "https://via.placeholder.com/150/51aa97"
    //   },
    //   {
    //   albumId: 1,
    //   id: 10,
    //   title: "beatae et provident et ut vel",
    //   url: "https://via.placeholder.com/600/810b14",
    //   thumbnailUrl: "https://via.placeholder.com/150/810b14"
    //   }]
  }
 
  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/albums')
        .then((response) => {
          // console.log(response.data)
        this.setState({album: response.data});
    })
    .catch((error) => {
        console.log(error);
    })

    Axios.get('https://jsonplaceholder.typicode.com/photos')
    .then((res) => {
        this.setState({images: res.data});
    })
    .catch((err) => {
        console.log(err);
    })
}
  render(){

     
    return (
      <div className="App">
     
     <div>
       {this.state.album.map((items,pos) => {
      return (
              <div key={pos}  datakey={items.id}>
                  <h4  datakey={items.id}>{items.title}</h4>
                  <p  datakey={items.id}>ID:{items.id}     UserID:{items.userId}</p>
                  <InfiniteCarousel
                    dots={false}
                    showSides={false}
                    sidesOpacity={.5}
                    sideSize={.1}
                    slidesToScroll={1}
                    slidesToShow={5}
                    scrollOnDevice={false}
                  >
                  { this.state.images.map((items1,pos1) => {
                    
                    return (

                        items.id===items1.albumId ?
                        <div key={pos1}  datakey={items1.id}>
                          <img src={items1.thumbnailUrl} datakey={items1.id}></img>
                          <h4  datakey={items1.id}>{items1.title}</h4>
                          <h5 datakey={items1.id}>ID:{items1.id}</h5>
                        </div>:null
                    )
                  })}
                   </InfiniteCarousel>
              </div>
              
              
      )
  })}</div>
    
   
 
      </div>


    );
  }
 
}

export default App;
