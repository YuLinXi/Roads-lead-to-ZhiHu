import { UserBlob } from '../models';

export const getUserBy = (attr, value) => UserBlob.findOne({ [attr]: value });
