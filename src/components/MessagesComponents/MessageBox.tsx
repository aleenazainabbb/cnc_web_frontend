"use client";
import React, { useState, useRef, useEffect } from "react";
import { useMessage } from "@/context/MessageContext";
import styles from "../Booking/styles/message.module.css";

// ---------------- MessageBubble ----------------
const MessageBubble: React.FC<{
  message: any;
  onImageClick: (url: string) => void;
}> = ({ message, onImageClick }) => {
  const isOutgoing = message.direction === "outgoing";
  const isSending = message.isSent === false && !message.failed;
  const isFailed = message.failed === true;
  const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

  const images = Array.isArray(message.images) ? message.images : [];
  const videos = Array.isArray(message.videos) ? message.videos : [];
  const docs = Array.isArray(message.docs) ? message.docs : [];

  const renderMessageContent = () => {
    const content = (
      typeof message.content === "string" ? message.content : ""
    ).trim();

    switch (message.messageType) {
      case "image":
        if (!images.length)
          return (
            <div className={styles.imageMessage}>🖼️ Image not available</div>
          );
        return (
          <div className={styles.imageMessage}>
            {images.map((img: any, i: number) => {
              const url =
                typeof img === "string" && !img.startsWith("blob")
                  ? `${BASE_URL}${img}`
                  : img instanceof File
                  ? URL.createObjectURL(img)
                  : img.url || null;
              return (
                <div key={i} className={styles.imageWrapper}>
                  <img
                    src={url}
                    alt="image"
                    className={styles.messageImage}
                    onClick={() => onImageClick(url)}
                    onLoad={() =>
                      img instanceof File && URL.revokeObjectURL(url)
                    }
                  />
                  {content && <p className={styles.imageCaption}>{content}</p>}
                </div>
              );
            })}
          </div>
        );

      case "video":
        if (!videos.length)
          return (
            <div className={styles.videoMessage}>🎥 Video not available</div>
          );
        return (
          <div className={styles.videoMessage}>
            {videos.map((video: any, i: number) => {
              const url =
                typeof video === "string" && !video.startsWith("blob")
                  ? `${BASE_URL}${video}`
                  : video instanceof File
                  ? URL.createObjectURL(video)
                  : video.url || null;
              return (
                <div key={i} className={styles.videoWrapper}>
                  <video controls className={styles.messageVideo}>
                    <source src={url} type="video/mp4" />
                    Your browser does not support video.
                  </video>
                  {content && <p className={styles.videoCaption}>{content}</p>}
                </div>
              );
            })}
          </div>
        );

      case "file":
        if (!docs.length) {
          return (
            <div className={styles.fileMessage}>
              <div className={styles.fileIcon}>📄</div>
              <span>File not available</span>
            </div>
          );
        }

        return (
          <div className={styles.fileMessage}>
            {docs.map((doc: any, i: number) => {
              // Generate a valid URL
              const url =
                doc instanceof File
                  ? URL.createObjectURL(doc)
                  : typeof doc === "string" && doc.trim() !== ""
                  ? doc.startsWith("http")
                    ? doc
                    : `${BASE_URL}${doc}`
                  : doc?.url || null;

              const fileName =
                typeof doc === "string"
                  ? doc.split("/").pop() || "Document"
                  : doc.name || doc.filename || "Document";

              if (!url) {
                // If URL is invalid, show placeholder
                return (
                  <div key={i} className={styles.fileItem}>
                    <div className={styles.fileIcon}>📄</div>
                    <span>{fileName || "File not available"}</span>
                  </div>
                );
              }

              return (
                <div key={i} className={styles.fileItem}>
                  <div className={styles.fileIcon}>📄</div>
                  <div className={styles.fileInfo}>
                    <span className={styles.fileName}>{fileName}</span>
                    <a
                      href={url}
                      download={fileName}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download
                    </a>
                  </div>
                </div>
              );
            })}
            {content && <p className={styles.fileCaption}>{content}</p>}
          </div>
        );

      default:
        return (
          <div className={styles.messageContent}>
            {content || "Empty message"}
          </div>
        );
    }
  };

  return (
    <div
      className={`${styles.messageWrapper} ${
        isOutgoing ? styles.messageRight : styles.messageLeft
      }`}
    >
      <div
        className={`${styles.messageBubble} ${
          isOutgoing ? styles.bubbleMe : styles.bubbleThem
        }`}
      >
        {renderMessageContent()}
        <div className={styles.messageMeta}>
          <span className={styles.messageTime}>
            {message.createdAt
              ? new Date(message.createdAt).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })
              : "Sending..."}
          </span>
          {isOutgoing && (
            <span className={styles.messageStatus}>
              {isSending ? (
                <span className={styles.sending}>⏳</span>
              ) : isFailed ? (
                <span className={styles.error}>X</span>
              ) : message.read ? (
                <span className={styles.readIcon}>✓✓</span>
              ) : (
                <span className={styles.sentIcon}>✓</span>
              )}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------------------

const MessageBox: React.FC = () => {
  const {
    conversations,
    conversationId,
    setConversationId,
    handleSendMessage,
    isLoading,
    isSending: contextIsSending,
    currentUser,
    startSupportChat,
  } = useMessage();
  const [messageText, setMessageText] = useState("");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [localIsSending, setLocalIsSending] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const isSending = contextIsSending || localIsSending;

  const activeConversation =
    conversations.find((c) => c.id === conversationId) || conversations[0];

  const [hasSentMessage, setHasSentMessage] = useState(false);
  const [chatStatus, setChatStatus] = useState<"open" | "closed">("closed");

  const sendMessageIfClosed = (message: string) => {
    if (chatStatus === "closed") {
      // call your existing logic
      startSupportChat(message);
    } else {
      console.log("⚠️ Chat is already open, message not sent.");
    }
  };

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [activeConversation?.messages]);

  // Deduplicate messages - prevent showing the same message twice

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setSelectedFiles((prev) => [...prev, ...files]);
    }
  };

  const removeFile = (index: number) =>
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));

  const handleSend = async () => {
    if (isSending || isLoading || !conversationId) return;
    if (!messageText.trim() && selectedFiles.length === 0) return;

    setLocalIsSending(true);

    let messageType: string = "text";

    if (selectedFiles.length > 0) {
      const hasImages = selectedFiles.some((f) => f.type.startsWith("image/"));
      const hasVideos = selectedFiles.some((f) => f.type.startsWith("video/"));
      const hasDocs = selectedFiles.some(
        (f) => !f.type.startsWith("image/") && !f.type.startsWith("video/")
      );

      if ([hasImages, hasVideos, hasDocs].filter(Boolean).length > 1) {
        messageType = "file"; // or "mixed" if you want a new type
      } else if (hasImages) {
        messageType = "image";
      } else if (hasVideos) {
        messageType = "video";
      } else if (hasDocs) {
        messageType = "file";
      }
    }

    try {
      await handleSendMessage(messageText.trim(), messageType, selectedFiles);
      setMessageText("");
      setSelectedFiles([]);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (err) {
      console.error("Failed to send message:", err);
    } finally {
      setLocalIsSending(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const isSendDisabled =
    (!messageText.trim() && selectedFiles.length === 0) ||
    isLoading ||
    isSending ||
    !conversationId;

  const getMessageKey = (message: any, index: number) => {
    if (message.id) return `msg-${message.id}-${index}`;
    if (message.tempId) return `temp-${message.tempId}-${index}`;
    if (message.createdAt) return `time-${message.createdAt}-${index}`;
    return `fallback-${Date.now()}-${Math.random()
      .toString(36)
      .substr(2, 9)}-${index}`;
  };

  const getConversationContact = (conversation: any) => {
    return conversation.admin || conversation.agent || null;
  };

  const getContactName = (contact: any): string => {
    if (!contact) return "Support";
    return `${contact.firstName} ${contact.lastName}`;
  };

  const getContactRole = (contact: any): string => {
    if (!contact) return "Admin";
    return contact.role === "admin" ? "Admin" : "Agent";
  };

  // Filter out duplicate messages
  const getUniqueMessages = (messages: any[]) => {
    if (!messages) return [];

    const seenIds = new Set();
    return messages.filter((msg) => {
      const id = msg.id || msg.tempId;
      if (id && seenIds.has(id)) {
        return false;
      }
      if (id) seenIds.add(id);
      return true;
    });
  };

  return (
    <div className={styles.chatContainer}>
      <button
        className={styles.sidebarToggle}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? "✕" : "☰"}
      </button>

      {/* Sidebar */}
      <div
        className={`${styles.sidebar} ${
          isSidebarOpen ? styles.sidebarOpen : styles.sidebarClosed
        }`}
      >
        <div className={styles.sidebarHeader}>
          <button
            className={styles.newChatButton} // ✅ your original class name preserved
            disabled={hasSentMessage && chatStatus !== "closed"}
            onClick={() => startSupportChat("Hello, I need assistance")}
          >
            + New Chat
          </button>
        </div>

        <div className={styles.conversationList}>
          {isLoading ? (
            <div className={styles.loading}>
              <div className={styles.spinner}></div>
              Loading conversations...
            </div>
          ) : conversations.length === 0 ? (
            <div className={styles.noConversations}>
              <div className={styles.noConversationsIcon}>💬</div>
              <p>No conversations yet</p>
              <p>Start a new conversation to get started</p>
            </div>
          ) : (
            conversations.map((conversation) => {
              const contact = getConversationContact(conversation);
              const contactName = getContactName(contact);
              const contactRole = getContactRole(contact);

              return (
                <div
                  key={conversation.id}
                  className={`${styles.conversationItem} ${
                    conversationId === conversation.id
                      ? styles.activeConversation
                      : ""
                  } ${
                    conversation.status === "closed"
                      ? styles.closedConversation
                      : ""
                  }`}
                  onClick={() => {
                    setConversationId(conversation.id);
                    if (window.innerWidth < 768) setIsSidebarOpen(false);
                  }}
                >
                  <div className={styles.conversationAvatar}>
                    {contact
                      ? `${contact.firstName?.charAt(0) || ""}${
                          contact.lastName?.charAt(0) || ""
                        }`
                      : "A"}
                  </div>
                  <div className={styles.conversationContent}>
                    <div className={styles.conversationHeader}>
                      <span className={styles.conversationName}>
                        {contactName}
                        <span className={styles.contactRole}>
                          ({contactRole})
                        </span>
                      </span>
                      <span className={styles.lastMessageTime}>
                        {conversation.lastMessageAt
                          ? new Date(
                              conversation.lastMessageAt
                            ).toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })
                          : ""}
                      </span>
                    </div>
                    {conversation.messages?.length > 0 && (
                      <p className={styles.lastMessagePreview}>
                        {(() => {
                          const lastMsg =
                            conversation.messages[
                              conversation.messages.length - 1
                            ];
                          if (
                            typeof lastMsg.content === "string" &&
                            lastMsg.content.trim() !== ""
                          ) {
                            return lastMsg.content.length > 50
                              ? lastMsg.content.substring(0, 50) + "..."
                              : lastMsg.content;
                          }
                          if (lastMsg.images?.length) return "🖼️ Image";
                          if (lastMsg.videos?.length) return "🎥 Video";
                          if (lastMsg.docs?.length) return "📄 File";
                          return "No content";
                        })()}
                      </p>
                    )}
                  </div>
                  {conversation.status === "closed" && (
                    <span className={styles.closedBadge}>Closed</span>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Chat Window */}
      <div className={styles.chatMain}>
        {conversationId && activeConversation ? (
          <>
            {/* Header */}
            <div className={styles.chatHeader}>
              <div className={styles.chatHeaderInfo}>
                <div className={styles.chatAvatar}>
                  {activeConversation.admin
                    ? `${activeConversation.admin.firstName?.charAt(0) || ""}${
                        activeConversation.admin.lastName?.charAt(0) || ""
                      }`
                    : activeConversation.agent
                    ? `${activeConversation.agent.firstName?.charAt(0) || ""}${
                        activeConversation.agent.lastName?.charAt(0) || ""
                      }`
                    : "A"}
                </div>
                <div>
                  <h3>
                    {activeConversation.admin
                      ? `${activeConversation.admin.firstName} ${activeConversation.admin.lastName}`
                      : activeConversation.agent
                      ? `${activeConversation.agent.firstName} ${activeConversation.agent.lastName}`
                      : "Admin"}
                    <span className={styles.contactRole}>
                      {activeConversation.admin
                        ? "Admin"
                        : activeConversation.agent
                        ? "Agent"
                        : "Admin"}
                    </span>
                  </h3>
                  <span
                    className={styles.chatStatus}
                    style={{
                      color:
                        activeConversation.status === "closed"
                          ? "#e53e3e"
                          : "#38a169",
                    }}
                  >
                    {activeConversation.status === "closed"
                      ? "Closed"
                      : "Online"}
                  </span>
                </div>
              </div>
              <div className={styles.chatActions}></div>
            </div>

            {/* Messages */}
            <div
              className={styles.messagesContainer}
              ref={messagesContainerRef}
            >
              {activeConversation.messages?.length ? (
                getUniqueMessages(activeConversation.messages).map(
                  (message: any, index: number) => (
                    <MessageBubble
                      key={getMessageKey(message, index)}
                      message={message}
                      onImageClick={setZoomedImage}
                    />
                  )
                )
              ) : (
                <div className={styles.noMessages}>
                  <div className={styles.noMessagesIcon}>💬</div>
                  <p>No messages yet</p>
                  <p>Start the conversation by sending a message</p>
                </div>
              )}
            </div>

            {/* Selected files preview */}
            {selectedFiles.length > 0 && (
              <div className={styles.filePreview}>
                {selectedFiles.map((file, index) => (
                  <div key={index} className={styles.fileItem}>
                    <div className={styles.fileIcon}>
                      {file.type.startsWith("image/")
                        ? "🖼️"
                        : file.type.startsWith("video/")
                        ? "🎥"
                        : "📄"}
                    </div>
                    <span className={styles.fileName}>{file.name}</span>
                    <button
                      className={styles.removeFileButton}
                      onClick={() => removeFile(index)}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div className={styles.inputContainer}>
              <button
                onClick={() => fileInputRef.current?.click()}
                className={styles.fileButton}
                aria-label="Attach files"
                disabled={
                  isSending ||
                  isLoading ||
                  activeConversation.status === "closed"
                }
              >
                <span className={styles.icon}>📎</span>
              </button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileSelect}
                multiple
                className={styles.fileInput}
                accept="image/*,video/*,.pdf,.doc,.docx,.txt"
                disabled={
                  isSending ||
                  isLoading ||
                  activeConversation.status === "closed"
                }
              />
              <div className={styles.messageInputWrapper}>
                <input
                  type="text"
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder={
                    activeConversation.status === "closed"
                      ? "This conversation is closed. Start a new chat to continue."
                      : "Type a message..."
                  }
                  className={styles.messageInput}
                  disabled={isLoading || activeConversation.status === "closed"}
                />
              </div>

              <button
                onClick={handleSend}
                className={styles.sendButton}
                disabled={
                  isSendDisabled || activeConversation.status === "closed"
                }
                aria-label="Send message"
              >
                {isSending ? (
                  <span className={styles.sendSpinner}></span>
                ) : (
                  <span className={styles.sendIcon}>➤</span>
                )}
              </button>
            </div>

            {/* Show new chat prompt if current conversation is closed */}
            {activeConversation?.status === "closed" && (
              <div className={styles.newChatPrompt}>
                <p>This conversation is {activeConversation.status}.</p>
              </div>
            )}
          </>
        ) : (
          <div className={styles.noConversationSelected}>
            <div className={styles.welcomeIllustration}>💬</div>
            <h2>Welcome to Messages</h2>
            <p>Select a conversation or start a new one to begin chatting</p>
            <button className={styles.startChatButton} onClick={undefined}>
              Start a conversation
            </button>
          </div>
        )}
      </div>

      {/* Zoom Modal - ROOT LEVEL */}
      {zoomedImage && (
        <div
          className={styles.imageModalOverlay}
          onClick={() => setZoomedImage(null)}
        >
          <div
            className={styles.imageModalContent}
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            {/* Close Icon */}
            <button
              className={styles.closeButton}
              onClick={() => setZoomedImage(null)}
            >
              ✕
            </button>

            <img
              src={zoomedImage}
              alt="zoomed"
              className={styles.zoomedImage}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageBox;
