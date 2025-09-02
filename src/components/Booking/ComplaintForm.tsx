"use client";

import React, { useEffect, useState } from "react";
import styles from "./styles/complaint.module.css";
import {
  createComplaint,
  createSuggestion,
  fetchComplaints,
} from "@/context/ComplaintContext";
import { useBooking } from "@/context/BookingContext";
import Snackbar from "../popups/Snackbar";

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

interface Suggestion {
  id: number;
  message: string;
  createdAt: string;
}

const ComplaintForm = () => {
  const [orderId, setOrderId] = useState("");
  const [message, setMessage] = useState("");
  const [suggestionText, setSuggestionText] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [activeTab, setActiveTab] = useState("submit");
  const [loading, setLoading] = useState(false);
  const { allOrdersObject, fetchAllOrders, ordersLoading } = useBooking();
  const [submittedContent, setSubmittedContent] = useState<string | null>(null);

  const [snackbarMsg, setSnackbarMsg] = useState("");
  const [snackbarType, setSnackbarType] = useState<"success" | "error">(
    "success"
  );
  const [showSnackbar, setShowSnackbar] = useState(false);

  // Show snackbar
  const displaySnackbar = (message: string, type: "success" | "error") => {
    setSnackbarMsg(message);
    setSnackbarType(type);
    setShowSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };

  // ✅ Fetch orders ONCE when component mounts
  useEffect(() => {
    fetchAllOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ✅ Fetch complaints or suggestions when switching tab
  useEffect(() => {
    if (activeTab === "myComplaints") {
      loadComplaints();
    } else if (activeTab === "suggestions") {
      loadSuggestions();
    }
  }, [activeTab]);

  const loadComplaints = async () => {
    try {
      setLoading(true);
      const data = await fetchComplaints();
      setTickets(data?.tickets || []);
    } catch (error) {
      console.error(error);
      displaySnackbar("Failed to load complaints", "error");
    } finally {
      setLoading(false);
    }
  };

  const loadSuggestions = async () => {
    try {
      setLoading(true);
      // Use the same API endpoint but with a different parameter or handle differently
      // This is a placeholder - you might need to adjust based on your actual API
      const data = await fetchComplaints();
      // Assuming the API returns suggestions in a different format
      // You might need to create a separate fetchSuggestions function
      setSuggestions(data?.suggestions || []);
    } catch (error) {
      console.error(error);
      displaySnackbar("Failed to load suggestions", "error");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Submit complaint
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!orderId || !message) {
      displaySnackbar("Please fill in all required fields!", "error");
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

      // show success message
      displaySnackbar("Complaint submitted successfully!", "success");

      // switch to complaints tab and reload
      setActiveTab("myComplaints");
    } catch (error) {
      console.error(error);
      displaySnackbar("Failed to submit complaint. Try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleSuggestionSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!suggestionText) {
      displaySnackbar("Please write your suggestion!", "error");
      return;
    }

    try {
      setLoading(true);

      // ✅ returns only the suggestion content (string)
      const content = await createSuggestion(suggestionText);
      setSubmittedContent(content);

      console.log("Submitted content:", content);

      // reset form
      setSuggestionText("");

      // show success message
      displaySnackbar("Suggestion submitted successfully!", "success");
    } catch (error) {
      console.error(error);
      displaySnackbar("Failed to submit suggestion. Try again.", "error");
    } finally {
      setLoading(false);
    }
  };
  const formatDateWithOrdinal = (date: Date): string => {
    const day = date.getDate();
    const month = date
      .toLocaleString("default", { month: "long" })
      .toLowerCase();
    const year = date.getFullYear();

    // Add ordinal suffix (st, nd, rd, th)
    const getOrdinalSuffix = (n: number): string => {
      if (n > 3 && n < 21) return "th";
      switch (n % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    return `${day}${getOrdinalSuffix(day)}-${month}-${year}`;
  };

  return (
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
              activeTab === "myComplaints" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("myComplaints")}
          >
            My Complaints
          </button>

          <button
            className={`${styles.tabButton} ${
              activeTab === "suggestions" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("suggestions")}
          >
            Suggestions
          </button>
        </div>

        {activeTab === "submit" && (
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
                  console.log("complaint order id", selectedOrder);
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
                    order.subService ||
                    order.subSubService || [
                      order.service && order.subService,
                    ] ||
                    "-";
                  const dateLabel = order.createdAt
                    ? new Date(order.createdAt).toLocaleDateString()
                    : "-";
                  return (
                    <option key={index} value={order.bookingId}>
                      {order.bookingId} - {serviceLabel} - {dateLabel}
                    </option>
                  );
                })}
              </select>

              {ordersLoading && (
                <p className={styles.loadingText}>Loading orders...</p>
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
        )}

        {activeTab === "myComplaints" && (
          <div className={styles.complaintsList}>
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
                        Order Submition Date : {""}
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
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "suggestions" && (
          <div className={styles.complaintsList}>
            <form
              onSubmit={handleSuggestionSubmit}
              className={styles.complaintForm}
            >
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Your Suggestion</label>
                <textarea
                  value={suggestionText}
                  onChange={(e) => setSuggestionText(e.target.value)}
                  placeholder="Share your suggestions or feedback..."
                  rows={4}
                  className={styles.formTextarea}
                />
              </div>
              <button
                type="submit"
                className={styles.submitBtn}
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit Suggestion"}
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Snackbar component */}
      {showSnackbar && (
        <Snackbar
          message={snackbarMsg}
          type={snackbarType}
          onClose={handleCloseSnackbar}
        />
      )}
    </div>
  );
};

export default ComplaintForm;
