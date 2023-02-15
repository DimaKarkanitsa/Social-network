import React from 'react'
import styles from './Users.module.css'
import usersPhoto from '../../assets/images/user-profile-picture.jpeg'
import { NavLink } from 'react-router-dom'
import { usersAPI } from '../../API/Api'

const Users = (props) => {
   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
   let pages = []
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
   }
   return (
      <div>
         <div>
            {pages.map(p => {
               return <span
                  onClick={() => props.onPageChanged(p)}
                  className={props.currentPage === p ? styles.selected_page : ''}>{p}</span>
            })}
         </div>
         {props.users.map(u => (
            <div key={u.id}>
               <div>
                  <NavLink to={'/profile/' + u.id}>
                     <img src={u.photos.small != null ? u.photos.small : usersPhoto}
                        alt='user_photo' className={styles.user_photo} />
                  </NavLink>
               </div>
               <div>
                  {u.followed
                     ? <button onClick={() => {
                        usersAPI.setUnfollow(u.id)
                           .then((data) => {
                              if (data.resultCode === 0) {
                                 props.unfollow(u.id)
                              }
                           })
                     }
                     }>Unfollow</button>
                     : <button onClick={() => {
                        usersAPI.setFollow(u.id).then((data) => {
                           if (data.resultCode === 0) {
                              props.follow(u.id)
                           }
                        })
                     }
                     }>Follow</button>}
               </div>
               <div>
                  <div>{u.name}</div>
                  <div>{'u.country'}</div>
                  <div>{'u.city'}</div>
                  <div>{u.status}</div>
               </div>
            </div>))}
      </div>
   )
}
export default Users