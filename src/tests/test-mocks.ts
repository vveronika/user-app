import { User } from 'models/user';
import { UsersStateType } from 'models/types';

export const UsersInitialState: UsersStateType = {
  users: [],
  loading: true,
  fetchError: false,
};

export const FetchedUsersArray: User[] = [
  {
    id: 0,
    name: 'First user name',
    username: 'First user nickname',
    email: 'First user email',
    phone: 'First user phone number',
    address: {
      street: 'Street name example',
      suite: 'Suite number 1',
      city: 'Example city',
      zipcode: 'Zip code example',
    },
  },
  {
    id: 1,
    name: 'Second user name',
    username: 'Second user nickname',
    email: 'Second user email',
    phone: 'Second user phone number',
    address: {
      street: 'Street name example',
      suite: 'Suite number 2',
      city: 'Example city',
      zipcode: 'Zip code example',
    },
  },
  {
    id: 2,
    name: 'Third user name',
    username: 'Third user nickname',
    email: 'Third user email',
    phone: 'Third user phone number',
    address: {
      street: 'Street name example',
      suite: 'Suite number 3',
      city: 'Example city',
      zipcode: 'Zip code example',
    },
  },
];