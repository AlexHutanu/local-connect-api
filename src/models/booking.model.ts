import {Schema, model, Document, Types} from "mongoose";

export interface IBooking extends Document {
    status: string;
    clientId: Types.ObjectId;
    providerId: Types.ObjectId;
    serviceId: Types.ObjectId;
}

const bookingSchema = new Schema<IBooking>({
    status: { type: String, required: true },
    clientId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    providerId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    serviceId: { type: Schema.Types.ObjectId, ref: 'Service', required: true }
}, {
    timestamps: true
});

export const BookingModel = model<IBooking>('Booking', bookingSchema);

