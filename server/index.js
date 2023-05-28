// const express = require('express');
// const axios = require('axios');
// const app = express();

// // Your Facebook Graph API access token
// const access_token = '<YOUR_ACCESS_TOKEN>';

// // Your Facebook page ID
// const page_id = '<YOUR_PAGE_ID>';

// app.get('/postToFacebook', async (req, res) => {
//     // The message you want to post
//     const message = 'Hello, world!';

//     try {
//         const response = await axios.post(`https://graph.facebook.com/${page_id}/feed`, {
//             // const response = await axios.post(`https://graph.facebook.com/${page_id}/feed`, {

//             message: message,
//             access_token: access_token
//         });

//         console.log(`Status code: ${response.status}`);
//         console.log('Body: ', response.data);

//         // Sending response to the client
//         res.status(200).send({ status: response.status, body: response.data });
//     } catch (error) {
//         console.error(error);

//         // Sending error to the client
//         res.status(500).send({ error: 'Error posting to Facebook' });
//     }
// });

// const port = 3000;

// app.listen(port, () => {
//     console.log(`Server running on http://localhost:${port}`);
// });



// // https://graph.facebook.com/${pageId}/photos?url=${fileUrl}&message=${text}&access_token=${page_access_token}




const axios = require('axios');

// Your Facebook Graph API access token
const access_token = 'EAADQlvi0xrgBALAV1pZBJh0kJO6KIQOYY7rzSr80rlfTMu1tKt0c7bFLlpsg0lHQoh72pKjZCg0clmM42ujzUDlThoXZAryuH6NvduB2Hm9FmIocUntCXTrZAOjZBuptQnRk3yZCAchVlQvUsiuLPuGfuZBER09R2kkB3HP8Fay1s9vaoHNpSuWeo4WFb6k3mpZBl0pe4ZC8uOmROayZBbvLw7';

// Your Facebook page ID
const page_id = '100091357234120';

// The message you want to post
const message = 'Hello, world!';

axios({
    method: 'post',
    url: `https://graph.facebook.com/${page_id}/feed`,
    //url: `https://graph.facebook.com/${page_id}/message=${message}&`,

    params: {
        access_token: access_token,
        message: message,
    },
}).then((res) => {
    console.log(`Status code: ${res.status}`);
    console.log('Body: ', res.data);
}).catch((error) => {
    console.error(error);
});
