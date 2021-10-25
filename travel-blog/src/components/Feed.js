import React, { useState } from "react";
import Post from "./Post";
import "./Feed.css";

const Feed = () => {
  const data = [
    {
      name: "Berlin",
      image:
        "https://images.unsplash.com/photo-1551354515-519f5506542c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
      text: "I had the most amazing time here!",
    },
    {
      name: "Paris",
      image:
        "https://images.unsplash.com/photo-1471623320832-752e8bbf8413?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=810&q=80",
      text: "Now I know what chocolate crepes are supposed to taste like",
    },
    {
      name: "Bali",
      image:
        "https://images.unsplash.com/photo-1573790387438-4da905039392?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=850&q=80",
      text: "Bali was otherworldly.",
    },
    {
      name: "Seoul",
      image:
        "https://images.unsplash.com/photo-1538485399081-7191377e8241?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=748&q=80",
      text: "I'm already planning my next trip!",
    },
  ];
  const [posts, setPosts] = useState(data);
  const [location, setLocation] = useState("");
  const [imgURL, setImgUrl] = useState("");
  const [text, setText] = useState("");

  const newPostHandler = () => {
    setPosts([{ name: location, image: imgURL, text: text }, ...posts]);
    setText("");
    setImgUrl("");
    setLocation("");
  };

  const locationChangeHandler = (event) => {
    setLocation(event.target.value);
  };

  const textChangeHandler = (event) => {
    setText(event.target.value);
    console.log(text);
  };

  const imageChangeHandler = (event) => {
    setImgUrl(event.target.value);
    console.log(imgURL);
  };
  return (
    <div>
      <div className="container">
        <h2>New Post</h2>
        <div className="newPost">
          <label>Location</label>
          <input className="field" onChange={locationChangeHandler}></input>
          <label>Text Content</label>
          <input className="field" onChange={textChangeHandler}></input>
          <label>Image URL</label>
          <input className="field" onChange={imageChangeHandler}></input>
        </div>

        <button onClick={newPostHandler}>Add New Post</button>
        {posts.map((location) => (
          <Post
            name={location.name}
            image={location.image}
            text={location.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;
