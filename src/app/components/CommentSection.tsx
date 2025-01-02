"use client";
import React, { useState } from "react";

interface Comment {
  id: number;
  name: string;
  email: string;
  text: string;
}

const CommentSection = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [editCommentId, setEditCommentId] = useState<number | null>(null);
  const [editText, setEditText] = useState<string>("");

  const handleSubmitComment = () => {
    if (!name || !email || !text) {
      alert("Please fill in all fields.");
      return;
    }

    if (editCommentId === null) {
      const newComment: Comment = {
        id: Date.now(),
        name,
        email,
        text,
      };
      setComments((prevComments) => [...prevComments, newComment]);
    } else {
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment.id === editCommentId ? { ...comment, text: editText } : comment
        )
      );
      setEditCommentId(null);
      setEditText("");
    }

    setName("");
    setEmail("");
    setText("");
  };

  const handleEditComment = (id: number, text: string) => {
    setEditCommentId(id);
    setEditText(text);
  };

  const handleDeleteComment = (id: number) => {
    setComments((prevComments) => prevComments.filter((comment) => comment.id !== id));
  };

  return (
    <div className="comment-section mt-10 p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-lg">
      <h3 className="font-bold text-2xl text-[#2d5474] mb-4">Add a Comment</h3>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border px-4 py-2 w-full rounded-md focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border px-4 py-2 w-full rounded-md focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Your Comment"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border px-4 py-2 w-full rounded-md focus:ring-2 focus:ring-blue-500 h-28"
        ></textarea>
        <button
          onClick={handleSubmitComment}
          className="bg-[#4DA1A9] text-white px-4 py-2 rounded-lg hover:bg-[#26767e]  transition"
        >
          {editCommentId ? "Update Comment" : "Post Comment"}
        </button>
      </div>

      <div className="comments-list mt-8">
        <h4 className="font-bold text-xl text-gray-700 mb-4">Comments</h4>
        {comments.length === 0 ? (
          <p className="text-gray-500">No comments yet.</p>
        ) : (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="comment p-4 mb-4 border rounded-md bg-gray-50 hover:bg-gray-100 transition"
            >
              <div className="flex justify-between">
                <p className="font-semibold text-gray-700">{comment.name}</p>
                <p className="text-sm text-gray-500">{comment.email}</p>
              </div>
              <p className="mt-2 text-gray-600">{comment.text}</p>
              <div className="flex mt-3 gap-4">
                <button
                  onClick={() => handleEditComment(comment.id, comment.text)}
                  className="text-[#26767e]  hover:text-[#1a4a4f] "
                 
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteComment(comment.id)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CommentSection;
