import styles from './Profile.module.css';

import MyPostsContainer from '../MyPosts/MyPostsContainer';
import ProfileInfo from '../ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={styles.profile}>
      <ProfileInfo {...props} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
