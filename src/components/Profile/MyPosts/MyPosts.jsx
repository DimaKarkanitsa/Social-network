import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);
  
  let newPostElement = React.createRef();
  
  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  }

  return (
    <div>
      <h3>My posts</h3>
      <div className={s.text_input}>
        <textarea ref={newPostElement} className={s.text_input_area}></textarea>
        <button className={s.text_input_button} onClick={ addPost }> Publish</button>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;