import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactInquiry {
    name: string;
    email?: string;
    message: string;
    timestamp: Time;
    phoneNumber: string;
}
export type Time = bigint;
export interface backendInterface {
    getContactInfo(): Promise<{
        address: string;
        phoneNumber: string;
        chatUrl: string;
    }>;
    getContactInquiryByTimestamp(timestamp: Time): Promise<ContactInquiry>;
    getSortedContactInquiries(): Promise<Array<ContactInquiry>>;
    submitContactForm(name: string, message: string, phoneNumber: string, email: string | null): Promise<void>;
}
