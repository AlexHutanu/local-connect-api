import {Schema, model, Document, Types} from "mongoose";

export interface IService extends Document {
    title: string;
    description: string;
    price: number;
    userId: Types.ObjectId;
}

const serviceSchema = new Schema<IService>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }
}, {
    timestamps: true
});

export const ServiceModel = model<IService>('Service', serviceSchema);
