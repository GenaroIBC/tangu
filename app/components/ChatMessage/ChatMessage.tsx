import type { Database } from "~/types/db";

export function ChatMessage({
  content,
  created_at,
  is_own,
}: Database["public"]["Tables"]["messages"]["Row"]) {
  const ownerShipClassName = is_own
    ? "chat_message_own"
    : "chat_message_foreign";

  return (
    <div className={`chat_message ${ownerShipClassName}`}>
      <p className="chat_message__content">{content}</p>
      <time className="chat_message__date">{created_at}</time>
    </div>
  );
}
