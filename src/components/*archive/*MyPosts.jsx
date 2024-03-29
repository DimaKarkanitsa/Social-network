import React from 'react';
import { Field, reduxForm } from 'redux-form';

import styles from './MyPosts.module.css';
import Post from '../Post/Post';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { Textarea } from '../common/FormControls/FormControls';

const maxLength15 = maxLengthCreator(15);

const MyPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={styles.text_input}>
      <Field
        component={Textarea}
        name={'postText'}
        validate={[required, maxLength15]}
        placeholder={'Star typing your post'}
        className={styles.text_input_area}
      />
      <button className={styles.text_input_button}> Publish</button>
    </form>
  );
};
const MyPostReduxForm = reduxForm({ form: 'post' })(MyPostForm);
const MyPosts = (props) => {
  const postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} key={p.id} />
  ));
  const addPost = (values) => {
    props.addPost(values.postText);
  };

  return (
    <div className={styles.posts_container}>
      <h3>My posts</h3>
      <MyPostReduxForm onSubmit={addPost} />
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
