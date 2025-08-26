// services/complaintService.ts
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const token = localStorage.getItem('token');
console.log(token);
// ✅ Submit Complaint
export const createComplaint = async (
  bookingId: string,
  serviceName: string,
  message: string,
  files: File[],
) => {
  const formData = new FormData();
  formData.append("bookingId", bookingId);
  formData.append("serviceName", serviceName);
  formData.append("message", message);

  files.forEach((file) => {
    formData.append("file", file); // multiple files supported
  });

  const res = await fetch(`${BASE_URL}/complaint/create`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Failed to submit complaint");
  }

  return res.json();
};

// ✅ Get Complaints List
export const fetchComplaints = async () => {
  const res = await fetch(`${BASE_URL}/complaint/get`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch complaints");
  }

  return res.json();
};
