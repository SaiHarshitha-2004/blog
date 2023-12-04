import axios from 'axios';

export default async function UploadToImgur(file) {
 const clientID = process.env.REACT_APP_IMGUR_CLIENT_ID
 const url = 'https://api.imgur.com/3/image';
 const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Client-ID ${clientID}`,
    },
 };

 const formData = new FormData();
 formData.append('image', file);

 try {
    const response = await axios.post(url, formData, config);
    console.log('Imgur Response:', response.data);
    return response.data.data.link;
 } catch (error) {
    console.error('Imgur Upload Error:', error);
    return null;
 }
}