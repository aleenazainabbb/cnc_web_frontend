// "use client";

// import React, { useEffect, useRef } from "react";
// import { useMessage, Message } from "@/context/MessageContext"; // import Message from context
// import styles from "../Booking/styles/message.module.css";

// const ChatApp: React.FC = () => {
//   const {
//     activeConversationId,
//     setActiveConversationId,
//     messageText,
//     setMessageText,
//     localMessages,
//     handleSendMessage,
//     initializeConversations,
//   } = useMessage();

//   const messagesEndRef = useRef<HTMLDivElement>(null);
//   const POLLING_INTERVAL = 5000;
//   const pollingRef = useRef<number | null>(null);

//   const ADMIN_CONVERSATION_ID = 0;

//   useEffect(() => {
//     initializeConversations();
//     if (!localMessages[ADMIN_CONVERSATION_ID]) {
//       setActiveConversationId(ADMIN_CONVERSATION_ID);
//     }
//   }, []);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [localMessages, activeConversationId]);

//   useEffect(() => {
//     let socketActive = false;

//     const pollMessages = async () => {
//       try {
//         const res = await fetch(
//           `${process.env.NEXT_PUBLIC_API_URL}/chat/conversations`
//         );
//         const data = await res.json();
//         if (data.conversations) {
//           data.conversations.forEach((conv: any) => {
//             const existingIds =
//               localMessages[conv.id]?.map((m: Message) => m.id) || [];
//             const newMessages = conv.messages.filter(
//               (m: any) => !existingIds.includes(m.id)
//             );

//             newMessages.forEach((m: any) => {
//               const formatted: Message = {
//                 id: m.id ?? Date.now(), // always a number
//                 text: m.content,
//                 sender: m.direction === "outgoing" ? "me" : "them",
//                 time: new Date(m.createdAt).toLocaleTimeString([], {
//                   hour: "2-digit",
//                   minute: "2-digit",
//                 }),
//                 userId: m.senderId,
//                 isSent: true,
//               };
//               localMessages[conv.id]
//                 ? localMessages[conv.id].push(formatted)
//                 : (localMessages[conv.id] = [formatted]);
//             });
//           });
//         }
//       } catch (err) {
//         console.error("Polling failed:", err);
//       }
//     };

//     try {
//       const socket = (window as any).socket;
//       if (socket) {
//         socketActive = true;
//         socket.on("newMessage", (msg: any) => {
//           const formatted: Message = {
//             id: msg.id ?? Date.now(),
//             text: msg.content,
//             sender: msg.direction === "outgoing" ? "me" : "them",
//             time: new Date(msg.createdAt).toLocaleTimeString([], {
//               hour: "2-digit",
//               minute: "2-digit",
//             }),
//             userId: msg.senderId,
//             isSent: true,
//           };
//           localMessages[msg.conversationId]
//             ? localMessages[msg.conversationId].push(formatted)
//             : (localMessages[msg.conversationId] = [formatted]);
//         });
//       }
//     } catch {
//       socketActive = false;
//     }

//     if (!socketActive) {
//       pollingRef.current = window.setInterval(pollMessages, POLLING_INTERVAL);
//     }

//     return () => {
//       if (pollingRef.current) clearInterval(pollingRef.current);
//     };
//   }, [localMessages]);

//   const conversations = [
//     { id: ADMIN_CONVERSATION_ID, name: "Support Admin" },
//     ...Object.keys(localMessages)
//       .filter((id) => parseInt(id) !== ADMIN_CONVERSATION_ID)
//       .map((id) => ({ id: parseInt(id), name: `Conversation ${id}` })),
//   ];

//   const activeMessages = activeConversationId
//     ? localMessages[activeConversationId] || []
//     : [];

//   return (
//     <div className={styles.chatContainer}>
//       <div className={styles.sidebar}>
//         <h2 className={styles.sidebarTitle}>Conversations</h2>
//         {conversations.map((conv) => {
//           const lastMsg =
//             conv.id === ADMIN_CONVERSATION_ID
//               ? activeMessages[activeMessages.length - 1]
//               : localMessages[conv.id]?.[localMessages[conv.id].length - 1];
//           return (
//             <div
//               key={conv.id}
//               className={`${styles.conversationItem} ${
//                 activeConversationId === conv.id
//                   ? styles.activeConversation
//                   : ""
//               }`}
//               onClick={() => setActiveConversationId(conv.id)}
//             >
//               <p className={styles.conversationTitle}>{conv.name}</p>
//               {lastMsg && (
//                 <p className={styles.conversationLastMsg}>{lastMsg.text}</p>
//               )}
//             </div>
//           );
//         })}
//       </div>

//       <div className={styles.chatBox}>
//         <div className={styles.messagesContainer}>
//           {!activeConversationId && (
//             <p className={styles.noConversationSelected}>
//               Select a conversation to start chatting
//             </p>
//           )}

//           {activeMessages.map((msg, index) => (
//             <div
//               key={msg.id ?? `${msg.userId}-${index}`}
//               className={`${styles.messageWrapper} ${
//                 msg.sender === "me" ? styles.messageRight : styles.messageLeft
//               }`}
//             >
//               <div
//                 className={`${styles.messageBubble} ${
//                   msg.sender === "me" ? styles.bubbleMe : styles.bubbleThem
//                 }`}
//               >
//                 {msg.text}
//                 <div className={styles.messageTime}>{msg.time}</div>
//               </div>
//             </div>
//           ))}
//           <div ref={messagesEndRef} />
//         </div>

//         {activeConversationId !== null && (
//           <div className={styles.inputContainer}>
//             <input
//               type="text"
//               value={messageText}
//               onChange={(e) => setMessageText(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
//               placeholder="Type a message..."
//               className={styles.messageInput}
//             />
//             <button onClick={handleSendMessage} className={styles.sendButton}>
//               Send
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ChatApp;

// "use client";

// import { useEffect, useState } from "react";
// import { getSocket } from "./../../lib/socket";

// export default function Chat() {
//   const [messages, setMessages] = useState<string[]>([]);
//   const [socketConnected, setSocketConnected] = useState(false);

//   useEffect(() => {
//     const socket = getSocket();

//     socket.on("connect", () => {
//       console.log("Socket connected");
//       setSocketConnected(true);
//     });

//     socket.on("message", (msg: string) => {
//       setMessages((prev) => [...prev, msg]);
//     });

//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   const sendMessage = () => {
//     const socket = getSocket();
//     socket.emit("message", "Hello from client (TS)!");
//   };

//   return (
//     <div>
//       <h2>Chat (TypeScript)</h2>
//       <button onClick={sendMessage} disabled={!socketConnected}>
//         Send Message
//       </button>
//       <ul>
//         {messages.map((msg, idx) => (
//           <li key={idx}>{msg}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import { getSocket } from "../../lib/socket";

// export default function Chat() {
//   const [messages, setMessages] = useState<string[]>([]);
//   const [socketConnected, setSocketConnected] = useState(false);
//   const [input, setInput] = useState(""); // state to track input field

//   useEffect(() => {
//     const socket = getSocket();

//     socket.on("connect", () => {
//       console.log("Socket connected");
//       setSocketConnected(true);
//     });

//     socket.on("message", (msg: string) => {
//       setMessages((prev) => [...prev, msg]);
//     });

//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   const sendMessage = () => {
//     const trimmed = input.trim();
//     if (!trimmed) return;

//     const socket = getSocket();
//     socket.emit("message", trimmed);

//     setInput(""); // clear input after sending
//   };

//   const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter") {
//       sendMessage();
//     }
//   };

//   return (
//     <div style={{ padding: "1rem", maxWidth: "600px", margin: "0 auto" }}>
//       <h2>Chat </h2>

//       <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={handleKeyPress}
//           placeholder="Type your message..."
//           disabled={!socketConnected}
//           style={{ flex: 1, padding: "0.5rem" }}
//         />
//         <button
//           onClick={sendMessage}
//           disabled={!socketConnected || !input.trim()}
//         >
//           Send
//         </button>
//       </div>

//       <ul>
//         {messages.map((msg, idx) => (
//           <li key={idx} style={{ marginBottom: "0.5rem" }}>
//             {msg}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { getSocket } from "@/lib/socket"; // adjust path if needed

export default function Chat() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const socket = getSocket();

    socket.on("connect", () => {
      setIsConnected(true);
    });

    socket.on("message", (msg: string) => {
      console.log("📨 Message received:", msg);
      setMessages((prev) => [...prev, msg]);
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const socket = getSocket();
    socket.emit("message", trimmed);
    setInput("");
  };

  return (
    <div style={{ padding: "1rem", maxWidth: "600px", margin: "0 auto" }}>
      <h2>Chat</h2>
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type a message..."
          disabled={!isConnected}
          style={{ flex: 1, padding: "0.5rem" }}
        />
        <button onClick={sendMessage} disabled={!isConnected || !input.trim()}>
          Send
        </button>
      </div>

      <ul>
        {messages.map((msg, idx) => (
          <li key={idx} style={{ marginBottom: "0.5rem" }}>
            {msg}
          </li>
        ))}
      </ul>
    </div>
  );
}
