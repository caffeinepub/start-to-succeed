import List "mo:core/List";
import Int "mo:core/Int";
import Order "mo:core/Order";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";

actor {
  type ContactInquiry = {
    name : Text;
    message : Text;
    phoneNumber : Text;
    email : ?Text;
    timestamp : Time.Time;
  };

  module ContactInquiry {
    public func compareByTimestamp(isInquiry1 : ContactInquiry, isInquiry2 : ContactInquiry) : Order.Order {
      Int.compare(isInquiry1.timestamp, isInquiry2.timestamp);
    };
  };

  let contactInquiries = List.empty<ContactInquiry>();

  public shared ({ caller }) func submitContactForm(name : Text, message : Text, phoneNumber : Text, email : ?Text) : async () {
    let inquiry : ContactInquiry = {
      name;
      message;
      phoneNumber;
      email;
      timestamp = Time.now();
    };
    contactInquiries.add(inquiry);
  };

  public query ({ caller }) func getContactInfo() : async {
    phoneNumber : Text;
    address : Text;
    chatUrl : Text;
  } {
    {
      phoneNumber = "+49 123 4567890";
      address = "Schwedter Straße 263, 10119 Berlin";
      chatUrl = "https://wa.me/491234567890";
    };
  };

  public query ({ caller }) func getSortedContactInquiries() : async [ContactInquiry] {
    contactInquiries.toArray().sort(ContactInquiry.compareByTimestamp);
  };

  public shared ({ caller }) func getContactInquiryByTimestamp(timestamp : Time.Time) : async ContactInquiry {
    switch (contactInquiries.find(func(inquiry) { inquiry.timestamp == timestamp })) {
      case (?contactInquiry) { contactInquiry };
      case (null) { Runtime.trap("Contact inquiry not found") };
    };
  };
};
