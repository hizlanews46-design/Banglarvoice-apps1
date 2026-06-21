export const decode = (str: string) => Buffer.from(str, 'base64').toString('utf-8');
