const express = require('express')
const app = express();
const port = 8000;

const { encoding, decoding } = require('./controller');

app.get('/', (req, res) => {

    const toEncode = "i wanna be a geeky tech pro.";
    const toDecode = "aSB3YW5uYSBiZSBhIGdlZWt5IHRlY2ggcHJvLg==";

    const result = {
        inputText: toEncode,
        encodedToBase64: encoding(toEncode),
        decodedFromBase64: decoding(toDecode)
    }
    res.send(result);

});


app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
});