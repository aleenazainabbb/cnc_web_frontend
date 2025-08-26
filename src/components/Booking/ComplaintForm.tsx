"use client";

import React, { useEffect, useState } from "react";
// import "./style/Complaint.css";
import styles from "./styles/complaint.module.css";

import { createComplaint, fetchComplaints } from "@/context/ComplaintContext";
import { useBooking } from "@/context/BookingContext";

interface TicketFile {
  fileName: string;
  filePath: string;
}

interface Ticket {
  id: number;
  bookingId: string;
  message: string;
  serviceName: string;
  status: string;
  createdAt: string;
  file?: TicketFile[];
}

const ComplaintForm = () => {
  const [orderId, setOrderId] = useState("");
  const [message, setMessage] = useState("");
  
  const [selectedService, setSelectedService] = useState("");

  const [image, setImage] = useState<File | null>(null);
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [activeTab, setActiveTab] = useState("submit");
  const [loading, setLoading] = useState(false);
  const { allOrdersObject, allOrders, fetchAllOrders, ordersLoading } =
    useBooking();

  // ✅ Fetch orders ONCE when component mounts
  useEffect(() => {
    fetchAllOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // 👈 empty dependency, prevents infinite calls

  // ✅ Fetch complaints when switching tab
  useEffect(() => {
    if (activeTab === "myComplaints") {
      const loadComplaints = async () => {
        try {
          setLoading(true);
          const data = await fetchComplaints();
          setTickets(data?.tickets || []);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };
      loadComplaints();
    }
  }, [activeTab]);

  // ✅ Submit complaint
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!orderId || !message) {
      alert("Please fill in all required fields!");
      return;
    }

    try {
      setLoading(true);
      await createComplaint(
        orderId,
        selectedService,
        message,
        image ? [image] : []
      );

      // reset form
      setOrderId("");
      setMessage("");
      setImage(null);

      // switch to complaints tab and reload
      setActiveTab("myComplaints");
    } catch (error) {
      console.error(error);
      alert("Failed to submit complaint. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    //    <div> <h2 className={styles.topHeader}>Submit Complaints</h2>
    <div className={styles.main}>
      <div className={styles.container}>
        {/* Tabs */}
        <div className={styles.complaintTabs}>
          <button
            className={`${styles.tabButton} ${
              activeTab === "submit" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("submit")}
          >
            Submit Complaint
          </button>
          <button
            className={`${styles.tabButton} ${
              activeTab === "myComplaints" ? "active" : ""
            }${styles.tabButton} `}
            onClick={() => setActiveTab("myComplaints")}
          >
            My Complaints
          </button>
        </div>

        {activeTab === "submit" ? (
          <>
            <form onSubmit={handleSubmit} className={styles.complaintForm}>
              {/* Order ID Dropdown */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Order ID</label>
                <select
                  value={orderId}
                  onChange={(e) => {
                    const bookingId = e.target.value;
                    setOrderId(bookingId);

                    
                    const selectedOrder = allOrdersObject?.find(
                      (order: any) => order.bookingId === bookingId
                    );
                    const serviceLabel =
                      selectedOrder?.subSubService ||
                      selectedOrder?.service ||
                      "-";
                    setSelectedService(serviceLabel);
                  }}
                  className={styles.formInput}
                  disabled={ordersLoading}
                >
                  <option value="">-- Select Order --</option>
                  {allOrdersObject?.map((order: any, index: number) => {
                    const serviceLabel =
                      order.subSubService || order.service || "-";
                    const dateLabel = order.createdAt
                      ? new Date(order.createdAt).toLocaleDateString()
                      : "-";
                    return (
                      <option key={index} value={order.bookingId}>
                        {serviceLabel} - {dateLabel}
                      </option>
                    );
                  })}
                </select>

                {ordersLoading && (
                  <p className="loading-text">Loading orders...</p>
                )}
              </div>

              {/* Complaint Message */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your complaint..."
                  rows={4}
                  className={styles.formTextarea}
                />
              </div>

              {/* Image Upload */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>
                  Upload Image (Optional)
                </label>
                <div className={styles.imageuploadContainer}>
                  <label
                    htmlFor="image-upload"
                    className={styles.imageuploadlabel}
                  >
                    <i className="upload-icon">📷</i>
                    <span>{image ? "Change Image" : "Choose an image"}</span>
                  </label>
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      setImage(e.target.files ? e.target.files[0] : null)
                    }
                    className={styles.imageInput}
                  />

                  {image && (
                    <div className={styles.imageInfo}>
                      <i className="file-icon">📄</i>
                      <span>{image.name}</span>
                      <button
                        type="button"
                        onClick={() => setImage(null)}
                        className={styles.textremoveBtn}
                      >
                        ×
                      </button>
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit Complaint"}
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className={styles.complaintsList}>
            <h2 className="complaint-title">My Complaints</h2>
            {loading ? (
              <p className={styles.noComplains}>Loading complaints...</p>
            ) : tickets.length === 0 ? (
              <p className={styles.noComplains}>No complaints submitted yet.</p>
            ) : (
              <div className={styles.complaintsContainer}>
                {tickets.map((ticket) => (
                  <div key={ticket.id} className={styles.complaintItem}>
                    <div className={styles.set}>
                      <span className={styles.ticket}>Tickets</span>
                      <span className={styles.complaintDate}>
                        {new Date(ticket.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <div className={styles.complaintHeader}>
                      <span className={styles.complaintOrder}>
                        Order: {ticket.bookingId}
                      </span>
                      <div className={styles.complaintStatus}>
                        Status: <span>{ticket.status}</span>
                      </div>
                    </div>
                    <span>Message :</span>
                    <p className={styles.complaintMessage}>{ticket.message}</p>

                    {/* Files */}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ComplaintForm;
