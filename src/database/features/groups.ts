import { Group } from "../../models/group";
import { GroupStatus } from "../../types/GroupStatus.interface";

export const dbAddGroup = async (group: {
  name: string;
  status: GroupStatus;
}) => {
  return await Group.create({
    ...group,
  });
};

export const dbGetGroup = async (groupId: number) => {
  return Group.findByPk(groupId);
};

export const dbChangeGroupStatus = async (
  groupId: number,
  status: GroupStatus
) => {
  Group.update(
    {
      status: status,
    },
    {
      where: {
        id: groupId,
      },
    }
  );
};
