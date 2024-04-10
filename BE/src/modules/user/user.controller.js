import { StatusCodes } from 'http-status-codes';
import { userService } from './user.service';

const createUser = async (req, res) => {
  console.log(req.body, '[req]');
  const user = await userService.createUser(req.body);
  res.status(StatusCodes.OK).json({ user });
};

export const userController = {
  createUser: createUser
};
