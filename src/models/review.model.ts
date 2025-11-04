import {Schema, model, Document} from 'mongoose';

export interface IReview extends Document {
    rating: number;
    comment: string;
    clientId: Schema.Types.ObjectId;
    bookingId: Schema.Types.ObjectId;
}

const reviewSchema = new Schema<IReview>({
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    clientId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    bookingId: { type: Schema.Types.ObjectId, ref: 'Booking', required: true }
}, {
    timestamps: true
});

export const ReviewModel = model<IReview>('Review', reviewSchema);