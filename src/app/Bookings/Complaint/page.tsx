"use client";

// import React, { useEffect, useState } from "react";
// import "./style/Complaint.css";
// import {createComplaint, fetchComplaints } from "../../../context/ComplaintContext";
// import { useBooking } from "../../../context/BookingContext"; // ✅ import Booking context
import ComplaintForm from "@/components/Booking/ComplaintForm";
import HeaderBar from "@/components/navbar/HeaderBar";

// interface TicketFile {
//   fileName: string;
//   filePath: string;
// }

// interface Ticket {
//   id: number;
//   bookingId: string;
//   message: string;
//   serviceName: string;
//   status: string;
//   createdAt: string;
//   file?: TicketFile[];
// }

const page = () => {
  //   const [orderId, setOrderId] = useState("");
  //   const [message, setMessage] = useState("");
  //   // Add a new state to track the selected service
  // const [selectedService, setSelectedService] = useState("");

  //   const [image, setImage] = useState<File | null>(null);
  //   const [tickets, setTickets] = useState<Ticket[]>([]);
  //   const [activeTab, setActiveTab] = useState("submit");
  //   const [loading, setLoading] = useState(false);
  //   const { allOrdersObject,allOrders, fetchAllOrders, ordersLoading } = useBooking();

  //   // ✅ Fetch orders ONCE when component mounts
  //   useEffect(() => {
  //     fetchAllOrders();
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []); // 👈 empty dependency, prevents infinite calls

  //   // ✅ Fetch complaints when switching tab
  //   useEffect(() => {
  //     if (activeTab === "myComplaints") {
  //       const loadComplaints = async () => {
  //         try {
  //           setLoading(true);
  //           const data = await fetchComplaints();
  //           setTickets(data?.tickets || []);
  //         } catch (error) {
  //           console.error(error);
  //         } finally {
  //           setLoading(false);
  //         }
  //       };
  //       loadComplaints();
  //     }
  //   }, [activeTab]);

  //   // ✅ Submit complaint
  //   const handleSubmit = async (e: React.FormEvent) => {
  //     e.preventDefault();

  //     if (!orderId || !message) {
  //       alert("Please fill in all required fields!");
  //       return;
  //     }

  //     try {
  //       setLoading(true);
  //       await createComplaint(orderId,selectedService , message, image ? [image] : []);

  //       // reset form
  //       setOrderId("");
  //       setMessage("");
  //       setImage(null);

  //       // switch to complaints tab and reload
  //       setActiveTab("myComplaints");
  //     } catch (error) {
  //       console.error(error);
  //       alert("Failed to submit complaint. Try again.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  return (
    <div>
      <HeaderBar title="Submit Complaints" />
      <ComplaintForm />
    </div>
  );
};

export default page;
