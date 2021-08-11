import { BASE_URL } from './client';

console.log(BASE_URL);

//we can make the function async to avoid
//returning promise explicitly

const postOptions = {
  method: 'POST',
  // headers: {
  //   'Content-Type': 'multipart/form-data',
  // },
};

const fileExtension = (val) => '.' + val.split('.').pop()

const createFormData = (listingData) => {
  const formData = new FormData();
  formData.append('title', listingData.title);
  formData.append('price', listingData.price);
  formData.append('categoryId', listingData.category.value);
  // formData.append('categoryId', 10);
  formData.append('description', listingData.description);

  // images: looping through to add multiple images
  listingData.images.forEach((val, index) => {
    formData.append('images', {
      name: 'image' + index + fileExtension(val),
      type: 'image/jpeg',
      uri: val,
    });
  });

  return formData;
};

const getListings = () => {
  return new Promise((resolve, reject) => {
    fetch(BASE_URL + '/listings')
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

// const addListing = (listingData) => {
//   const data = createFormData(listingData);

//   return new Promise((resolve, reject) => {
//     fetch(BASE_URL + '/listings/add_new', { ...postOptions, body:data })
//       .then((response) => response.json())
//       .then((data) => resolve(data))
//       .catch((err) => reject(err));
//   });
// };

//xmlHttpVersion
const addListing = (listingData,progressHandler) =>{
  const formData = createFormData(listingData)

  return new Promise((resolve,reject)=>{
    let xhr = new XMLHttpRequest()
    xhr.open('POST',BASE_URL+'/listings/add_new')
    xhr.onload = ()=>{
      try{
        let data = JSON.parse(xhr.response)
        resolve(data)
      }catch(err){
        reject(err)
      }
    }
    xhr.onerror = ()=>{
      reject('Network Error')
    }
    //track upload progress
    xhr.upload.onloadstart = ()=>{
      console.log('Upload started')
    }

    xhr.upload.onprogress = (event)=>{
      // console.log(event.total,event.loaded)
      // console.log('Uploaded:',event.loaded/event.total)
      progressHandler(event.loaded/event.total)
    }

    xhr.upload.onload = ()=>{
      console.log('Upload completed sucessfully')
    }

    //send request
    xhr.send(formData)
  })
}

// const getListings = async() => {
//   return fetch(BASE_URL + '/listings')
//       .then((response) => response.json())
//       .catch((error) => Promise.reject(error));
// }

// const getListings = () => console.log(10);
// const addListing = () => console.log(20);

export { getListings, addListing };
