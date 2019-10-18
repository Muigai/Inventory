const dateSeed = Date.parse("2015-01-01");

export const nextId = (prefix: number) => (Date.now() - dateSeed) + prefix * 100000000000;
