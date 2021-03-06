import cloudData from './cloud_data';

export const getAllData = (cb) => Promise.resolve(cloudData).then(res => cb(res));

// const isLocalhost = Boolean(
//   window.location.hostname === 'localhost' ||
//     // [::1] is the IPv6 localhost address.
//     window.location.hostname === '[::1]' ||
//     // 127.0.0.1/8 is considered localhost for IPv4.
//     window.location.hostname.match(
//       /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
//     )
// );
//
// const apiUrl = isLocalhost ? 'http://localhost:3001/'
//                            : 'https://corsback.herokuapp.com/';
//
// export const getAllData = (cb) => fetch(apiUrl)
//                                   .then((response) => { return response.json(); })
//                                   .then((obj) => cb(obj))
//                                   .catch(e => console.log('request failed'));
