export interface IUser {
  id: string
  firstName: string
  lastName: string
  email: string
  address: string
  dob: string
  phoneNumber: string
  gender: string
  role: string
}

const ALL_USERS: IUser[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    phoneNumber: '2023456789',
    gender: 'Nam',
    address: '123 Main St',
    dob: '1/2/2000',
    role: 'admin'
  },
  {
    id: '2',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane@example.com',
    phoneNumber: '2023456789',
    gender: 'Nam',
    address: '456 Elm St',
    dob: '1/2/2000',
    role: 'user'
  },
  {
    id: '3',
    firstName: 'Sara',
    lastName: 'Smith',
    email: 'sara@example.com',
    phoneNumber: '2023456789',
    gender: 'Nam',
    address: '789 Oak St',
    dob: '1/2/2000',
    role: 'admin'
  },
  {
    id: '4',
    firstName: 'Michael',
    lastName: 'Johnson',
    email: 'michael@example.com',
    phoneNumber: '2023456789',
    gender: 'Nam',
    address: '987 Pine St',
    dob: '1/2/2000',
    role: 'user'
  }
]

export default ALL_USERS
