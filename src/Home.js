import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images.unsplash.com/photo-1574722772633-e401c33eb317?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2854&q=80"
        alt=""
      />
      <div className="home__row">
        <Product
          id={Math.random()}
          title="Commodo non in quis aute officia ea ex."
          price={11.96}
          rating={5}
          image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQerh_2jvePb1sdytdzIV_0Y9E7E7ZyPNvEbrYSqd10iT6hWKinYNNksQve3qF6pOm2TPUyYqIl-vmp-zRECZv5gtvN2rEX-G8wPKikeQuji4oMO-5bDiOeSg&usqp=CAE"
        ></Product>
        <Product
          id={Math.random()}
          title="Commodo non in quis aute officia ea ex."
          price={11.96}
          rating={5}
          image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQerh_2jvePb1sdytdzIV_0Y9E7E7ZyPNvEbrYSqd10iT6hWKinYNNksQve3qF6pOm2TPUyYqIl-vmp-zRECZv5gtvN2rEX-G8wPKikeQuji4oMO-5bDiOeSg&usqp=CAE"
        ></Product>
      </div>
      <div className="home__row">
        <Product
          id={Math.random()}
          title="Commodo non in quis aute officia ea ex."
          price={11.96}
          rating={5}
          image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQerh_2jvePb1sdytdzIV_0Y9E7E7ZyPNvEbrYSqd10iT6hWKinYNNksQve3qF6pOm2TPUyYqIl-vmp-zRECZv5gtvN2rEX-G8wPKikeQuji4oMO-5bDiOeSg&usqp=CAE"
        ></Product>
        <Product
          id={Math.random()}
          title="Commodo non in quis aute officia ea ex."
          price={11.96}
          rating={5}
          image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQerh_2jvePb1sdytdzIV_0Y9E7E7ZyPNvEbrYSqd10iT6hWKinYNNksQve3qF6pOm2TPUyYqIl-vmp-zRECZv5gtvN2rEX-G8wPKikeQuji4oMO-5bDiOeSg&usqp=CAE"
        ></Product>
        <Product
          id={Math.random()}
          title="Commodo non in quis aute officia ea ex."
          price={11.96}
          rating={5}
          image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQerh_2jvePb1sdytdzIV_0Y9E7E7ZyPNvEbrYSqd10iT6hWKinYNNksQve3qF6pOm2TPUyYqIl-vmp-zRECZv5gtvN2rEX-G8wPKikeQuji4oMO-5bDiOeSg&usqp=CAE"
        ></Product>
      </div>
    </div>
  );
}

export default Home;
