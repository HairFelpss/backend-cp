import mongoose from 'moongose';

const CP_donationsSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      default: 0,
    },
    account: {
      type: String,
      required: true,
    },
    coins_amount: {
      type: Number,
      required: true,
    },
    coins_delivered: {
      type: Number,
      required: true,
      default: 0,
    },
    coins_bonus: {
      type: Number,
      required: true,
      default: 0,
    },
    value: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
    payment_method: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    transaction_code: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
);

CP_donationsSchema.plugin(AutoIncrement, { id: 'id_sequenc', inc_field: 'id' });
export default mongoose.model('donations', CP_donationsSchema);
