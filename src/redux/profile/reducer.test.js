import profileReducer, { deletePostActionCreator } from './profile-reducer';

test('delete post', () => {
  const state = {
    posts: [
      { id: 1, message: "Hello! It's my first message!", likesCount: '48' },
      { id: 2, message: 'Welcome to chat!', likesCount: '5' },
      { id: 3, message: 'Lol!', likesCount: '1' },
      { id: 4, message: 'Hi!', likesCount: '2' },
    ],
  };
  const action = deletePostActionCreator(1);
  const newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(3);
});
