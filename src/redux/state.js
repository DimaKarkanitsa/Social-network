
import React from 'react';
import ReactDOM from 'react-dom/client';


const store = {
   _state: {
      profilePage: {
         posts: [
            { id: 1, message: "Hello! It's my first message!", likesCount: "48" },
            { id: 2, message: "Welcome to chat!", likesCount: "5" },
            { id: 3, message: "Lol!", likesCount: "1" },
            { id: 4, message: "Hi!", likesCount: "2" },
         ],
         newPostText: 'start typing your post',
      },
      dialogsPage: {
         dialogs: [
            { name: 'Ann', id: '1' },
            { name: 'Pete', id: '2' },
            { name: 'Nick', id: '3' },
            { name: 'Marie', id: '4' },
         ],
         messages: [
            { message: 'How are you today?', id: '1' },
            { message: 'Look what I found!', id: '2' },
            { message: 'Hi!', id: '3' },
         ],
      },
      friendsBar: {
         friendsData: [
            { id: 1, name: 'Dima' },
            { id: 2, name: 'Ann' },
            { id: 3, name: 'Marie' },
            { id: 4, name: 'Pete' },
            { id: 5, name: 'Mike' }
         ],
      },
   },
   _callSubscriber() { },

   getState() {
      return this._state;
   },
   subscribe(observer) {
      this._callSubscriber = observer;
   },

   dispatch(action) {
      if (action.type === "ADD-POST") {
         let newPost = {
            id: 6,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
         };
         this._state.profilePage.posts.push(newPost);
         this._state.profilePage.newPostText = '';
         this._callSubscriber(this._state);
      }
      else if (action.type === 'UPDATE-NEW-POST-TEXT') {
         this._state.profilePage.newPostText = action.newText;
         this._callSubscriber(this._state);
      }
   }

};

const add_post = 'ADD-POST'

export const  addPostActionCreator = () => ({type: add_post})

const update_new_post_text = 'UPDATE-NEW-POST-TEXT'

export const onPostChangeActionCreator = (text) => ({
      type: update_new_post_text,
      newText: text,
   })
export default store;