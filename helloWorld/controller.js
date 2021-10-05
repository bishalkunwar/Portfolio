const encoding = (input) => {
    const buffering = Buffer.from(input, 'utf8');
    return buffering.toString('base64');
};

const decoding = (input) => {
    const buffering = Buffer.from(input, 'base64');
    return buffering.toString('utf8');
};

module.exports = {
    encoding,
    decoding
}