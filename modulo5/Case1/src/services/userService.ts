import { User } from '../models'
import { UserCreationAttributes } from '../models/user'

export const userService = {
  findByEmail: async (email: string) => {
    const user = await User.findOne({
      attributes: [
        'id',
        ['first_name', 'firstName'],
        ['last_name', 'lastName'],
        'phone',
        'birth',
        'email',
        'password'
      ],
      where: { email }
    })
    return user
  },

  create: async (attributes: UserCreationAttributes) => {
    const user = await User.create(attributes)
    return user
  }
}