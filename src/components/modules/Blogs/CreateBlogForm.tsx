"use client";

import { create } from "@/actions/create";
import Form from "next/form";
import { useState } from "react";

export default function CreateBlogForm() {
  const [isFeatured, setIsFeatured] = useState("false");

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <Form
        action={create}
        className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8 border border-blue-100 transition-all duration-300 hover:shadow-xl"
      >
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          ✍️ Create a New Blog Post
        </h2>

        {/* Title */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Blog Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter your blog title..."
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
            required
          />
        </div>

        {/* Content */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            rows={5}
            placeholder="Write your blog content here..."
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition resize-none"
            required
          />
        </div>

        {/* Thumbnail */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Thumbnail URL
          </label>
          <input
            type="url"
            id="thumbnail"
            name="thumbnail"
            placeholder="https://example.com/image.jpg"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
          />
        </div>

        {/* Tags */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Tags (comma separated)
          </label>
          <input
            type="text"
            id="tags"
            name="tags"
            placeholder="Next.js, React, Web Development"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
          />
        </div>

        {/* Featured */}
        <div>
          <p className="block text-sm font-semibold text-gray-700 mb-2">
            Featured Post?
          </p>
          <div className="flex gap-8">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="isFeatured"
                value="true"
                checked={isFeatured === "true"}
                onChange={(e) => setIsFeatured(e.target.value)}
                className="text-blue-600 focus:ring-blue-500"
              />
              <span className="text-gray-700">Yes</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="isFeatured"
                value="false"
                checked={isFeatured === "false"}
                onChange={(e) => setIsFeatured(e.target.value)}
                className="text-blue-600 focus:ring-blue-500"
              />
              <span className="text-gray-700">No</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          🚀 Publish Blog
        </button>
      </Form>
    </div>
  );
}
