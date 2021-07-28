import md5 from 'md5';

const privateKey = '5e524998a699636014a2a3aa4de9fa4a58079064';
export const publicKey = '13280928810462417a62f705124ce69f';
export const time = Number(new Date());

export const hash = md5(time + privateKey + publicKey);