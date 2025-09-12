"use client";

import { useEffect, useRef, useState } from "react";
import styles from "../Booking/styles/message.module.css";

// Define TypeScript interfaces
interface Message {
  id?: number;
  tempId?: string;
  text: string;
  sender: string;
  time: string;
  isSent?: boolean;
  direction?: string;
  read?: boolean;
  timestamp?: string;
  createdAt?: string;
}

interface Conversation {
  id: number;
  agent?: {
    firstName: string;
    lastName: string;
  };
  admin?: {
    firstName: string;
    lastName: string;
  };
  messages?: Message[];
}

interface User {
  id: number;
  name: string;
  initials: string;
  status: string;
  unread: number;
  conversation: Conversation;
  time: string;
  lastMessage: string;
}

interface MessageBoxProps {
  isSocketConnected: boolean;
  apiConversations: Conversation[] | undefined;
  localMessages: { [key: number]: Message[] };
  activeConversationId: number | null;
  setActiveConversationId: (id: number) => void;
  messageText: string;
  setMessageText: (text: string) => void;
  handleSendMessage: () => void;
}

const MessageBox = ({
  isSocketConnected,
  apiConversations,
  localMessages,
  activeConversationId,
  setActiveConversationId,
  messageText,
  setMessageText,
  handleSendMessage,
}: MessageBoxProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [typingStatus, setTypingStatus] = useState<{ [key: number]: boolean }>(
    {}
  );
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Get active conversation
  const activeConversation = activeConversationId
    ? localMessages[activeConversationId] || []
    : [];

  // Get the active conversation data with null check
  const activeConversationData = apiConversations?.find(
    (conv) => conv.id === activeConversationId
  );

  // Helper functions
  const getReceiverName = (conversation: Conversation) => {
    if (conversation.agent) {
      return `${conversation.agent.firstName} ${conversation.agent.lastName}`.trim();
    } else if (conversation.admin) {
      return `${conversation.admin.firstName} ${conversation.admin.lastName}`.trim();
    }
    return "Support Team";
  };

  const getReceiverInitials = (conversation: Conversation) => {
    if (conversation.agent) {
      return `${conversation.agent.firstName.charAt(
        0
      )}${conversation.agent.lastName.charAt(0)}`;
    } else if (conversation.admin) {
      return `${conversation.admin.firstName.charAt(
        0
      )}${conversation.admin.lastName.charAt(0)}`;
    }
    return "ST";
  };

  const getReceiverRole = (conversation: Conversation) => {
    if (conversation.agent) {
      return "Agent";
    } else if (conversation.admin) {
      return "Admin";
    }
    return "Support";
  };

  const getUnreadCount = (conversation: Conversation) => {
    if (!conversation.messages) return 0;
    return conversation.messages.filter(
      (msg: Message) => msg.direction === "incoming" && !msg.read
    ).length;
  };

  const formatMessageTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Prepare user list data for sidebar with null check
  const users: User[] = (apiConversations || []).map((conv) => {
    const lastMessage =
      conv.messages && conv.messages.length > 0
        ? conv.messages[conv.messages.length - 1]
        : null;

    return {
      id: conv.id,
      name: getReceiverName(conv),
      initials: getReceiverInitials(conv),
      status: "online",
      unread: getUnreadCount(conv),
      conversation: conv,
      time: lastMessage
        ? formatMessageTime(
            lastMessage.timestamp || lastMessage.createdAt || ""
          )
        : "",
      lastMessage: lastMessage ? lastMessage.text : "No messages yet",
    };
  });

  // Auto-scroll to bottom of messages
  useEffect(() => {
    scrollToBottom();
  }, [activeConversation]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Handle Enter key
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Handle typing indicator
  const handleTyping = () => {
    if (activeConversationId) {
      // Clear previous timeout
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }

      // Set typing status
      setTypingStatus((prev) => ({ ...prev, [activeConversationId]: true }));

      // Clear typing status after 2 seconds
      typingTimeoutRef.current = setTimeout(() => {
        setTypingStatus((prev) => ({ ...prev, [activeConversationId]: false }));
      }, 2000);
    }
  };

  // Handle input change with typing indicator
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessageText(e.target.value);
    handleTyping();
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.messagingContainer}>
      <div className={styles.sidebar}>
        <div className={styles.header}>
          <div className={styles.profileHeader}>
            <div className={styles.profileAvatar}>U</div>
            <div className={styles.headerActions}>
              <button className={styles.headerButton} title="Status">
                <i className="fas fa-status"></i>
              </button>
              <button className={styles.headerButton} title="New Chat">
                <i className="fas fa-comment-alt"></i>
              </button>
              <button className={styles.headerButton} title="Menu">
                <i className="fas fa-ellipsis-v"></i>
              </button>
            </div>
          </div>
          <div className={styles.searchContainer}>
            <div className={styles.searchWrapper}>
              <i className={`fas fa-search ${styles.searchIcon}`}></i>
              <input
                type="text"
                placeholder="Search or start new chat"
                className={styles.searchInput}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className={styles.filterButton} title="Filter">
                <i className="fas fa-filter"></i>
              </button>
            </div>
          </div>
        </div>

        <div className={styles.userList}>
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className={`${styles.userItem} ${
                activeConversationId === user.id ? styles.active : ""
              }`}
              onClick={() => setActiveConversationId(user.id)}
            >
              <div className={styles.avatarContainer}>
                <div className={styles.avatar}>{user.initials}</div>
                <div
                  className={`${styles.statusIndicator} ${
                    user.status === "online" ? styles.online : styles.offline
                  }`}
                ></div>
              </div>

              <div className={styles.userInfo}>
                <div className={styles.nameTime}>
                  <h3 className={styles.userName}>{user.name}</h3>
                  <span className={styles.time}>{user.time}</span>
                </div>
                <div className={styles.messagePreview}>
                  <p className={styles.lastMessage}>{user.lastMessage}</p>
                  {user.unread > 0 && (
                    <span className={styles.unreadBadge}>{user.unread}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.chatArea}>
        {activeConversationId && activeConversationData ? (
          <>
            <div className={styles.chatHeader}>
              <div className={styles.chatUserInfo}>
                <div className={styles.chatAvatarContainer}>
                  <div className={styles.chatAvatar}>
                    {getReceiverInitials(activeConversationData)}
                  </div>
                  <div
                    className={`${styles.statusIndicator} ${styles.online}`}
                  ></div>
                </div>
                <div className={styles.chatUserDetails}>
                  <h3>{getReceiverName(activeConversationData)}</h3>
                  <p className={styles.userStatus}>
                    {getReceiverRole(activeConversationData)} •{" "}
                    {isSocketConnected ? "online" : "offline"}
                    {typingStatus[activeConversationId] && " • typing..."}
                  </p>
                </div>
              </div>
              <div className={styles.chatActions}>
                <button className={styles.actionButton} title="Call">
                  <i className="fas fa-phone-alt"></i>
                </button>
                <button className={styles.actionButton} title="Video Call">
                  <i className="fas fa-video"></i>
                </button>
                <button className={styles.actionButton} title="Menu">
                  <i className="fas fa-ellipsis-v"></i>
                </button>
              </div>
            </div>

            <div className={styles.messagesContainer}>
              <div className={styles.messagesWrapper}>
                {activeConversation.map((message) => (
                  <div
                    key={message.tempId || message.id}
                    className={`${styles.message} ${
                      message.sender === "me"
                        ? styles.myMessage
                        : styles.theirMessage
                    } ${!message.isSent ? styles.sending : ""}`}
                  >
                    <div className={styles.messageContent}>
                      <p>{message.text}</p>
                      <span className={styles.messageTime}>
                        {message.time}
                        {!message.isSent && " • Sending..."}
                      </span>
                    </div>
                  </div>
                ))}

                {/* Typing indicator */}
                {typingStatus[activeConversationId] && (
                  <div className={`${styles.message} ${styles.theirMessage}`}>
                    <div className={styles.messageContent}>
                      <div className={styles.typingIndicator}>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>
            </div>

            <div className={styles.messageInputContainer}>
              <div className={styles.messageInputWrapper}>
                <button className={styles.emojiButton} title="Emoji">
                  <i className="fas fa-smile"></i>
                </button>
                <button className={styles.attachButton} title="Attach File">
                  <i className="fas fa-paperclip"></i>
                </button>
                <input
                  type="text"
                  placeholder="Type a message"
                  className={styles.messageInput}
                  value={messageText}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                />
                <button
                  className={styles.sendButton}
                  onClick={handleSendMessage}
                  disabled={messageText.trim() === ""}
                  title="Send"
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className={styles.noConversationSelected}>
            <p>Select a conversation to start messaging</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageBox;
