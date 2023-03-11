import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import { Field, reduxForm } from 'redux-form'

const MyPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}  className={styles.text_input}>
      <Field component={'textarea'} name={'postText'} placeholder={'Star typing your post'} className={styles.text_input_area}  />
      <button className={styles.text_input_button} > Publish</button>
    </form>
  )
}
const MyPostReduxForm = reduxForm({ form: 'post'})(MyPostForm)
const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

  let addPost = (values) => {props.addPost(values.postText)}

  return (
    <div className={styles.posts_container}>
      <h3>My posts</h3>
      <MyPostReduxForm onSubmit={addPost} />
      <div className={styles.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;