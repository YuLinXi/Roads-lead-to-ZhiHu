import { UserBlob } from '../models';

export const getUserBy = (attr, value) => UserBlob.findOne({ [attr]: value });

export const updateUser = (id, data) => UserBlob.update({ _id: id }, data);
