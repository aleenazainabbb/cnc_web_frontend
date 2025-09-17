"use client";
import React, { useState, useRef, useEffect } from "react";
import { useMessage } from "@/context/MessageContext";
import styles from "../Booking/styles/message.module.css";
import { OptimisticMessage, User } from "@/context/service/messageapi";

// ✅ Deduplication cache
const receivedMessageIds = new Set<string | number>();

const MessageBubble: React.FC<{ message: OptimisticMessage }> = ({
  message,
}) => {
  const isOutgoing = message.direction === "outgoing";
  const isFailed = !message.isSent;
  const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

  const images = Array.isArray(message.images) ? message.images : [];
  const videos = Array.isArray(message.videos) ? message.videos : [];
  const docs = Array.isArray(message.docs) ? message.docs : [];

  const renderMessageContent = () => {
    const content = message.content || "";
    const trimmedContent = content.trim();

    switch (message.messageType) {
      case "image":
        if (images.length === 0)
          return (
            <div className={styles.imageMessage}>🖼️ Image not available</div>
          );
        return (
          <div className={styles.imageMessage}>
            {images.map((image: any, index: number) => {
              const imageUrl =
                typeof image === "string"
                  ? `${BASE_URL}${image}`
                  : image?.url || URL.createObjectURL(image);
              return (
                <div key={index} className={styles.imageWrapper}>
                  <img
                    src={imageUrl}
                    alt="Sent image"
                    className={styles.messageImage}
                  />
                  {trimmedContent && (
                    <p className={styles.imageCaption}>{content}</p>
                  )}
                </div>
              );
            })}
          </div>
        );

      case "video":
        if (videos.length === 0)
          return (
            <div className={styles.videoMessage}>🎥 Video not available</div>
          );
        return (
          <div className={styles.videoMessage}>
            {videos.map((video: any, index: number) => {
              const videoUrl =
                typeof video === "string"
                  ? `${BASE_URL}${video}`
                  : video?.url || URL.createObjectURL(video);
              return (
                <video key={index} controls className={styles.messageVideo}>
                  <source src={videoUrl} type="video/mp4" />
                </video>
              );
            })}
            {trimmedContent && <p className={styles.videoCaption}>{content}</p>}
          </div>
        );

      case "file":
        if (docs.length === 0)
          return (
            <div className={styles.fileMessage}>
              <div className={styles.fileIcon}>📄</div>
              <span>File not available</span>
            </div>
          );
        return (
          <div className={styles.fileMessage}>
            {docs.map((doc: any, index: number) => {
              const docUrl =
                typeof doc === "string"
                  ? `${BASE_URL}${doc}`
                  : doc?.url || URL.createObjectURL(doc);
              const fileName =
                typeof doc === "string"
                  ? doc.split("/").pop() || "Document"
                  : doc?.name || doc?.filename || "Document";
              return (
                <div key={index} className={styles.fileItem}>
                  <div className={styles.fileIcon}>📄</div>
                  <div className={styles.fileInfo}>
                    <span className={styles.fileName}>{fileName}</span>
                    <a
                      href={docUrl}
                      download={fileName}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.fileDownloadLink}
                    >
                      Download
                    </a>
                  </div>
                </div>
              );
            })}
            {trimmedContent && <p className={styles.fileCaption}>{content}</p>}
          </div>
        );

      default:
        return (
          <div className={styles.messageContent}>
            {trimmedContent || "Empty message"}
          </div>
        );
    }
  };

  return (
    <div
      className={`${styles.messageWrapper} ${
        isOutgoing ? styles.messageRight : styles.messageLeft
      } ${isFailed ? styles.messageFailed : ""}`}
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
              {isFailed ? (
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
  } = useMessage();
  const [messageText, setMessageText] = useState("");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isSending, setIsSending] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Active conversation: pick by conversationId, fallback to first
  const activeConversation =
    conversations.find((c) => c.id === conversationId) || conversations[0];

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [activeConversation?.messages]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setSelectedFiles(Array.from(e.target.files));
  };

  const removeFile = (index: number) =>
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));

  const handleSend = async () => {
    if (isSending || isLoading || !conversationId) return;
    if (!messageText.trim() && selectedFiles.length === 0) return;

    setIsSending(true);

    let messageType: "text" | "image" | "video" | "file" = "text";
    if (selectedFiles.length > 0) {
      if (selectedFiles.some((f) => f.type.includes("image")))
        messageType = "image";
      else if (selectedFiles.some((f) => f.type.includes("video")))
        messageType = "video";
      else messageType = "file";
    }

    try {
      await handleSendMessage(messageText.trim(), messageType, selectedFiles);
      setMessageText("");
      setSelectedFiles([]);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (err) {
      console.error("Failed to send message:", err);
    } finally {
      setIsSending(false);
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

  const getMessageKey = (message: OptimisticMessage, index: number) => {
    if (message.id) return `msg-${message.id}-${index}`;
    if (message.tempId) return `temp-${message.tempId}-${index}`;
    if (message.createdAt) return `time-${message.createdAt}-${index}`;
    return `fallback-${Date.now()}-${Math.random()
      .toString(36)
      .substr(2, 9)}-${index}`;
  };

  // Function to get the contact for a conversation (admin or agent)
  const getConversationContact = (conversation: any): User | null => {
    return conversation.admin || conversation.agent || null;
  };

  // Function to get the contact name for display
  const getContactName = (contact: User | null): string => {
    if (!contact) return "Support";
    return `${contact.firstName} ${contact.lastName}`;
  };

  // Function to get the contact role for display
  const getContactRole = (contact: User | null): string => {
    if (!contact) return "Admin";
    return contact.role === "123" ? "123" : "Agent";
  };

  return (
    <div className={styles.chatContainer}>
      {/* Mobile sidebar toggle */}
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
          <h2 className={styles.sidebarTitle}>Conversations</h2>
          <button
            className={styles.newChatButton}
            onClick={() => {
              // ✅ Always connect to Admin
              if (conversations.length > 0) {
                const adminConversation = conversations.find((c) => c.admin);
                if (adminConversation) {
                  setConversationId(adminConversation.id);
                }
              }
            }}
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
                  }`}
                  onClick={() => {
                    setConversationId(conversation.id);
                    if (window.innerWidth < 768) setIsSidebarOpen(false);
                  }}
                >
                  <div className={styles.conversationAvatar}>
                    {contact
                      ? `${contact.firstName?.charAt(
                          0
                        )}${contact.lastName?.charAt(0)}`
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
                    {conversation.messages?.[0] && (
                      <p className={styles.lastMessagePreview}>
                        {conversation.messages[0].content ||
                          (conversation.messages[0].images?.length
                            ? "🖼️ Image"
                            : conversation.messages[0].videos?.length
                            ? "🎥 Video"
                            : conversation.messages[0].docs?.length
                            ? "📄 File"
                            : "Empty message")}
                      </p>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Chat Window */}
      <div className={styles.chatMain}>
        {conversationId ? (
          <>
            {/* Header */}
            <div className={styles.chatHeader}>
              <div className={styles.chatHeaderInfo}>
                <div className={styles.chatAvatar}>
                  {activeConversation?.admin
                    ? `${activeConversation.admin.firstName.charAt(
                        0
                      )}${activeConversation.admin.lastName.charAt(0)}`
                    : activeConversation?.agent
                    ? `${activeConversation.agent.firstName.charAt(
                        0
                      )}${activeConversation.agent.lastName.charAt(0)}`
                    : "A"}
                </div>
                <div>
                  <h3>
                    {activeConversation?.admin
                      ? `${activeConversation.admin.firstName} ${activeConversation.admin.lastName}`
                      : activeConversation?.agent
                      ? `${activeConversation.agent.firstName} ${activeConversation.agent.lastName}`
                      : "Admin"}
                    <span className={styles.contactRole}>
                      (
                      {activeConversation?.admin
                        ? "Admin"
                        : activeConversation?.agent
                        ? "Agent"
                        : "Admin"}
                      )
                    </span>
                  </h3>
                  <span className={styles.chatStatus}>
                    {activeConversation?.status || "Online"}
                  </span>
                </div>
              </div>
              <div className={styles.chatActions}>
                <button className={styles.headerButton}>
                  <span className={styles.icon}>📞</span>
                </button>
                <button className={styles.headerButton}>
                  <span className={styles.icon}>🎥</span>
                </button>
                <button className={styles.headerButton}>
                  <span className={styles.icon}>⋮</span>
                </button>
              </div>
            </div>

            {/* Messages */}
            <div
              className={styles.messagesContainer}
              ref={messagesContainerRef}
            >
              {activeConversation?.messages?.length ? (
                activeConversation.messages.map((message, index) => (
                  <MessageBubble
                    key={getMessageKey(message, index)}
                    message={message}
                  />
                ))
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
                      {file.type.includes("image")
                        ? "🖼️"
                        : file.type.includes("video")
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

            {/* Input */}
            <div className={styles.inputContainer}>
              <button
                onClick={() => fileInputRef.current?.click()}
                className={styles.fileButton}
                aria-label="Attach files"
                disabled={isSending || isLoading}
              >
                <span className={styles.icon}>📎</span>
              </button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileSelect}
                multiple
                className={styles.fileInput}
                accept="image/*,video/*,application/*"
                disabled={isSending || isLoading}
              />
              <div className={styles.messageInputWrapper}>
                <input
                  type="text"
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Type a message..."
                  className={styles.messageInput}
                  disabled={isLoading || isSending}
                />
              </div>
              <button
                onClick={handleSend}
                className={styles.sendButton}
                disabled={isSendDisabled}
                aria-label="Send message"
              >
                {isSending ? (
                  <span className={styles.sendSpinner}></span>
                ) : (
                  <span className={styles.sendIcon}>➤</span>
                )}
              </button>
            </div>
          </>
        ) : (
          <div className={styles.noConversationSelected}>
            <div className={styles.welcomeIllustration}>💬</div>
            <h2>Welcome to Messages</h2>
            <p>Select a conversation or start a new one to begin chatting</p>
            <button className={styles.startChatButton}>
              Start a conversation
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageBox;
