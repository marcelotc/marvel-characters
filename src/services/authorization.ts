import md5 from 'md5';

const privateKey = '2ab5449f40643a3688303c66d80232e0026ffde1';
export const publicKey = 'bc9835768982ec80ae7be4fc38fb0d31';
export const time = Number(new Date());

export const hash = md5(time + privateKey + publicKey);