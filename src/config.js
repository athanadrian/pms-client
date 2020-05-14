const config = {
  GOOGLE_OAUTH_CLIENT_ID:
    '903735411526-0acivp8trkej45d75tpvlp020s0mf1s0.apps.googleusercontent.com',
  FACEBOOK_OAUTH_CLIENT_ID:
    '903735411526-0acivp8trkej45d75tpvlp020s0mf1s0.apps.googleusercontent.com',
  BASE_URL:
    process.env.NODE_ENV === 'production' ? 'TBD' : 'http://localhost:8000/api',
  CLOUDINARY_API: 'https://api.cloudinary.com/v1_1/atana/image/upload',
  MAPBOX_KEY:
    'pk.eyJ1IjoicmVlZGJhcmdlcmNvZGVzIiwiYSI6ImNqczVodXgzczAwM3E0M3MydzI0OHN0ZzEifQ.0qj4u8RW-Rj6An3WFLXKqA',
  // "pk.eyJ1IjoiYXRhbmEiLCJhIjoiY2s4c2ZwMGxnMGJxcDNkcnM1YjQ2czFjZSJ9.QVBBjyVHi3JzGz6Xefn3qQ",
  HOME: {
    longitude: 23.932003557059872,
    latitude: 38.02709627962513
  }
};
export default config;
