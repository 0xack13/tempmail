import { atom } from 'recoil';
import { Mailbox } from '../types';
import { getTempMail } from '../utils';

export const tempMail = atom({
  key: "tempMail",
  default: getTempMail().then(e => e)
})

export const inbox = atom({
  key: "inbox",
  default: [] as Mailbox[]
})

export const customEmailModal = atom({
  key: "customEmailModal",
  default: false
})