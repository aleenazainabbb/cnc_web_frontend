// services/complaintService.ts
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// ✅ Helper: get token dynamically (important for Next.js hydration issues)
const getToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("token");
  }
  return null;
};

// ======================= Complaints =======================

// ✅ Submit Complaint
export const createComplaint = async (
  bookingId: string,
  serviceName: string,
  message: string,
  files: File[],
) => {
  const token = getToken();
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
  const token = getToken();
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

// ======================= Suggestions =======================

// ✅ Submit Suggestion
export const createSuggestion = async (content: string) => {
  const token = getToken();

  const res = await fetch(`${BASE_URL}/seggestion/create`, { // ✅ fixed endpoint
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
     body: JSON.stringify({ content}), // 👈 correct key for backend
  });

  if (!res.ok) {
    throw new Error("Failed to submit suggestion");
  }

  const data = await res.json();
  return data.seggestion.content; // ✅ backend typo requires "seggestion"
};

// ✅ Get Suggestions
// export const fetchSuggestions = async () => {
//   const token = getToken();

//   const res = await fetch(`${BASE_URL}/suggestion/get`, {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch suggestions");
//   }

//   return res.json();
// };
