//Define Post Data Model
const post_data = {
  Post: {
    Description: 's',
    Tags: ['0', '1'],
    Looking_For: ['0', '1'],
    Date: Date.now()
  }
};

//Define User Data Model
const user_data = {
  Location: 's',
  Skill_Set: ['0', '1'],
  Bio: 's',
  Social_Media_Connection: {
    Discord: 's',
    Email: 's',
    Facebook: 's',
    Github: 's',
    Google_Plus: 's',
    Instagram: 's',
    LinkedIn: 's',
    Twitter: 's'
  }
};

module.exports = {
  postdata: post_data,
  userdata: user_data
};
