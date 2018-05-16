//Define Post Data Model
const post_data = {
  Post: {
    Description: '',
    Tags: [],
    Looking_For: [],
    Date: Date.now()
  }
};

//Define User Data Model
const user_data = {
  Location: '',
  Skill_Set: [],
  Bio: '',
  Social_Media_Connection: {
    Discord: '',
    Email: '',
    Facebook: '',
    Github: '',
    Google_Plus: '',
    Instagram: '',
    LinkedIn: '',
    Twitter: ''
  }
};

//Define Registration Data Model
const reg_data = {
  Name: '',
  Email: '',
  Password: '',
  Date: Date.now()
};

module.exports = {
  post_data: post_data,
  user_data: user_data,
  reg_data: reg_data
};
