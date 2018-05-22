// data.js

//the hardcoded data for api simulation

// TODO: I was using additional property "isLogin" to identify user session
//In the real wold example despite of this variable there has to be hached session ID
// Usually for that I am using "passport.js"

export default {
  account: { username: 'user1', password: '123456' },
  countries: [
    { name: 'Canada' },
    { name: 'United States' },
    { name: 'Mexico' },
    { name: 'United Kingdom' },
    { name: 'France' }
  ],
  selectedCountryIndex: -1,
  options: ['Help', 'About', 'Settings', 'Advanced'],
  isLogin: false
};
