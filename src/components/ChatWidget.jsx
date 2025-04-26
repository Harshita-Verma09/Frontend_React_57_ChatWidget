import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-end">
      {/* Chat Box */}
      {isOpen && (
        <div className="bg-white shadow-lg rounded-lg p-4 w-72 mb-3">
          <div className="flex justify-between items-center border-b pb-2">
            <h2 className="text-lg font-semibold">Chat</h2>
            <button onClick={() => setIsOpen(false)}>
              <X className="h-5 w-5 text-gray-500 hover:text-red-500" />
            </button>
          </div>
          <div className="mt-2 text-gray-600">👋 How can we help you?</div>
          <input
            type="text"
            placeholder="Type your message..."
            className="mt-2 w-full border rounded-md p-2"
          />
        </div>
      )}

      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
};

export default ChatWidget;
