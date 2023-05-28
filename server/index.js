const express = require('express');
// const axios = require('axios');
const app = express();

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




// const axios = require('axios');

// // Your Facebook Graph API access token
// const access_token = 'EAADQlvi0xrgBALAV1pZBJh0kJO6KIQOYY7rzSr80rlfTMu1tKt0c7bFLlpsg0lHQoh72pKjZCg0clmM42ujzUDlThoXZAryuH6NvduB2Hm9FmIocUntCXTrZAOjZBuptQnRk3yZCAchVlQvUsiuLPuGfuZBER09R2kkB3HP8Fay1s9vaoHNpSuWeo4WFb6k3mpZBl0pe4ZC8uOmROayZBbvLw7';

// // Your Facebook page ID
// const page_id = '100091357234120';

// // The message you want to post
// const message = 'Hello, world!';

// axios({
//     method: 'post',
//     url: `https://graph.facebook.com/${page_id}/feed`,
//     //url: `https://graph.facebook.com/${page_id}/message=${message}&`,

//     params: {
//         access_token: access_token,
//         message: message,
//     },
// }).then((res) => {
//     console.log(`Status code: ${res.status}`);
//     console.log('Body: ', res.data);
// }).catch((error) => {
//     console.error(error);
// });









const pageId = "100091357234120"
const page_access_token = "EAADQlvi0xrgBANPrHYEFzIOIvWPmJTcY57wZBRl0JAJgfufGEF6pQ6ZCYhrR1Kr9qJH8zqXRUawluPvmGLWnZA9kBRi7BaWSTLr3JsTnpcOc0zdGUNZCtZAn4MOS8zg4p7BZBy2IIQ8CMvgPq9BhlXv5YjBvAkiSPwZBy0xUP2VZAxG0aywfnSOKNCPLaw8rrm8IRZAe5SljEFhfxLx3SFEA7"


const path_to_photo = "https://i.pinimg.com/736x/fd/12/43/fd124315d7f435562e9b5eadeee9d784.jpg"
const postText = "example text 3dddd"
// const page_access_token = ""
// const pageId = "" /Users/sushobhanpramanik/Desktop/My folder/img.jpeg


app.post("/posttopage", (req, res) => {

    const text = postText;
    // req.body.text;
    const img = path_to_photo;
    // req.body.img;

    axios.post(
        // `https://graph.facebook.com/${pageId}/feed?message=morning&access_token=${page_access_token}`,
        // `https://graph.facebook.com/${pageId}/photos?url=${path_to_photo}?&message=${postText}&access_token=${page_access_token}`,
        `https://graph.facebook.com/${pageId}/photos?url=${path_to_photo}?&message=${postText}&access_token=${page_access_token}`,

        null

        ).then(function (response){ 
            console.log(response);
        }) 
        .catch(function (error){ 
            console.log(error);
        });

});




const port = 3000;

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
