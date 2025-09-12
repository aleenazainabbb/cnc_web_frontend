// // src/lib/socket.ts
// import { io, Socket } from "socket.io-client";

// // Define the type of your socket's event map (customize as needed)
// interface ServerToClientEvents {
//   message: (msg: string) => void;
//   // Add other server-to-client events here
// }

// interface ClientToServerEvents {
//   message: (msg: string) => void;
//   // Add other client-to-server events here
// }

// let socket: Socket<ServerToClientEvents, ClientToServerEvents> | null = null;

// export const getSocket = (): Socket<
//   ServerToClientEvents,
//   ClientToServerEvents
//   > => {
//   if (!socket) {
//     socket = io("https://whatsapp.marifahsol.com"); // Change this URL in production
//   }
//   alert("Socket initialized");

//   return socket;
// };

// src/lib/socket.ts

// src/lib/socket.ts

import { io, Socket } from "socket.io-client";

// Define the type of your socket events
interface ServerToClientEvents {
  message: (msg: string) => void;
  // Add more server-to-client events here
}

interface ClientToServerEvents {
  message: (msg: string) => void;
  // Add more client-to-server events here
}

// Singleton pattern to avoid multiple socket instances
let socket: Socket<ServerToClientEvents, ClientToServerEvents> | null = null;

export const getSocket = (): Socket<
  ServerToClientEvents,
  ClientToServerEvents
> => {
  if (!socket) {
    console.log("Initializing new socket connection...");
    socket = io("https://whatsapp.marifahsol.com", {
      transports: ["websocket"],
      auth: {
    });

    socket.on("connect", () => {
      console.log("✅ Socket connected:", socket!.id);

      // Test message to confirm connection to backend
      socket!.emit(
        "message",
        "🔔 Hello from frontend (TypeScript test message)"
      );
    });

    socket.on("connect_error", (err) => {
      console.error("❌ Connection error:", err.message);
    });

    socket.on("disconnect", (reason) => {
      console.warn("⚠️ Socket disconnected:", reason);
    });
  }

  return socket;
};
