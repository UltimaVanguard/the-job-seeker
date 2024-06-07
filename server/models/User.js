const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['JOB_SEEKER', 'EMPLOYER'],
    required: true
  },
  seekerProfile: {
      fName: {
        type: String,
      },
      lName: {
        type: String,
      },
      address: {
        type: String,
      },
      phone: {
        type: String,
      },
  },
  employerProfile: {
    companyName: {
      type: String,
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
    industry: {
      type: String,
      enum: ['Technology', 'Construction', 'Finance', 'Health']
    }
  } 
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
