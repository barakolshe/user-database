import { Sequelize } from "sequelize";
import { User } from "../../models/user";
import UserRequest from "../../types/UserRequest.interafce";
import sequelize from "sequelize";
import { Status } from "../../types/Status.interface";

export const dbAddUser = async (userData: UserRequest) => {
  return await User.create({
    ...userData,
  });
};

export const dbGetOneUser = async (userId?: number) => {
  return await User.findOne({
    where: { id: userId },
  });
};

export interface GetAllUsersRequest {
  name?: {
    value: string;
    exact?: boolean;
  };
  email?: {
    value: string;
    exact?: boolean;
  };
}
export const dbGetAllUsers = async ({ name, email }: GetAllUsersRequest) => {
  const whereClause: any = {};
  if (name !== undefined) {
    if (name.exact === false) {
      whereClause["name"] = {
        [sequelize.Op.like]: `%${name.value}%`,
      };
    } else {
      whereClause["name"] = name;
    }
  }
  if (email !== undefined) {
    if (email.exact === false) {
      whereClause["email"] = {
        [sequelize.Op.like]: `%${email.value}%`,
      };
    } else {
      whereClause["email"] = name;
    }
  }

  return await User.findAll({
    where: whereClause,
  });
};

export const getUsersWithPagination = async (offset: number, limit: number) => {
  return User.findAll({
    limit: limit,
    offset: offset,
  });
};

export interface StatusUpdate {
  userId: number;
  status: Status;
}

export const updateMultiUserMultiStatus = async (data: StatusUpdate[]) => {
  const organizedUpdates = new Map<Status, number[]>();

  for (const statusUpdate of data) {
    const { status, userId } = statusUpdate;
    if (organizedUpdates.has(status)) {
      organizedUpdates.get(status)?.push(userId);
    } else {
      organizedUpdates.set(status, [userId]);
    }
  }

  organizedUpdates.forEach((userIds, status) =>
    updateMultiUserStatus(userIds, status)
  );
};

export const updateMultiUserStatus = async (
  userIds: number[],
  status: Status
) => {
  User.update(
    {
      status: status,
    },
    {
      where: {
        id: {
          [sequelize.Op.in]: userIds,
        },
      },
    }
  );
};
