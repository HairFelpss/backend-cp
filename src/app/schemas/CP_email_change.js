import mongoose from 'moongose';

const CP_email_changeSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    account: {
      type: String,
      required: true,
    },
    new_email: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('email_change', CP_email_changeSchema);
