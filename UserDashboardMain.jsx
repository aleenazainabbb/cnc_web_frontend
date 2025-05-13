import React, { useState } from 'react';
import { FaPaperPlane, FaTimes, FaPause, FaPlay, FaSpinner } from 'react-icons/fa'; // Added FaSpinner for loader
import { useAPI } from '../../../../Context/ContextApi'; // Custom API context
import { toast } from 'react-toastify'; // For notifications
import { useNavigate } from 'react-router-dom';

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB file size limit

const UserDashboard = () => {
  const { AddPost } = useAPI(); // Extracting the AddPost function from the context
  const [media, setMedia] = useState(null);   // Media file (image or video)
  const [tags, setTags] = useState('');       // Tags input
  const [caption, setCaption] = useState(''); // Caption input
  const [loading, setLoading] = useState(false); // Loading state
  const [uploadProgress, setUploadProgress] = useState(0); // Upload progress
  const [paused, setPaused] = useState(false); // Pause state for progress
  const navigate = useNavigate()
   // Handle file selection
  const handleMediaChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > MAX_FILE_SIZE) {
        toast.error('File size exceeds 10MB limit!');
        return;
      }
      setMedia(file);
      setUploadProgress(0); // Reset progress when new file is selected
    }
  };

  // Remove selected media
  const handleRemoveMedia = () => {
    setMedia(null); // Deselect the uploaded media
    setUploadProgress(0); // Reset progress
  };

  // Simulate the upload process (for demo purposes)
  const simulateUpload = () => {
    setLoading(true); // Start loading
    setPaused(false);

    const interval = setInterval(() => {
      if (!paused) {
        setUploadProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(interval);
            setLoading(false);
            return 100;
          }
          return prevProgress + 10;
        });
      }
    }, 300); // Increment progress by 10 every 300ms
  };

  // Handle submission
  const handleSubmit = () => {
    if (!media || !tags || !caption) {
      toast.error('Please provide all required fields!');
      return;
    }

    // Create FormData to hold the data
    const formData = new FormData();
    formData.append('image', media);
    formData.append('captions', caption);
    formData.append('hashtags', tags);

    setLoading(true);

    // Simulate file upload process
    simulateUpload();

    AddPost(formData)
      .then((response) => {
        if (response.success) {
          toast.error(response.message || 'Failed to create');
        } else {
          toast.success(response.message || 'Created successfully!');
          navigate("/ManagePost")
        }
      })
      .catch((error) => {
        toast.error(error.response?.data.message || 'An error occurred.');
      })
      .finally(() => {
        setLoading(false);
        setTags('');
        setCaption('');
        setMedia(null);
      });
  };

  return (
    <div className="flex justify-center poppins-regular items-center w-full h-screen bg-gradient-to-r from-white via-sky-300 to-white p-4">
      <div className="w-full max-w-lg p-6 bg-opacity-0 rounded-lg  bg-white text-white">
        <h2 className="text-center text-3xl font-bold mb-4">Create and Share a Post</h2>
        <p className="text-center mb-4 text-lg">Upload an image or video, write a caption, and add some tags to share your content!</p>

        {/* Upload Container */}
        <label className="flex flex-col items-center justify-end p-4 bg-gradient-to-r from-cyan-300 to-blue-600 rounded-lg shadow-sm h-56 relative cursor-pointer">
          <input
            type="file"
            accept="image/*,video/*"
            onChange={handleMediaChange}
            className="hidden"
          />

          {/* Folder Animation */}
          {!media && (
            <div className="folder absolute top-6 transform -translate-x-1/2 animate-float transition-transform duration-350 ease">
              <div className="front-side relative z-10 transition-transform duration-350 transform-origin-bottom-center">
                <div className="tip absolute top-[-10px] left-[20px] bg-gradient-to-r from-orange-400 to-orange-600 w-20 h-5 rounded-t-lg shadow-lg z-20"></div>
                <div className="cover bg-gradient-to-r from-yellow-300 to-yellow-500 w-[120px] h-[80px] rounded-lg shadow-lg"></div>
              </div>
            </div>
          )}

          {/* Placeholder Text When No Media is Selected */}
          {!media && (
            <span className="text-gray-200 text-lg mt-4">
              Click anywhere to upload an image or video
            </span>
          )}

          {/* Display Uploaded Media */}
          {media && (
            <div className="relative w-full h-full mt-4">
              {media.type.startsWith('image/') ? (
                <img
                  src={URL.createObjectURL(media)}
                  alt="Uploaded"
                  className="object-cover w-full h-full rounded-lg"
                />
              ) : (
                <video
                  controls
                  src={URL.createObjectURL(media)}
                  className="object-cover w-full h-full rounded-lg"
                ></video>
              )}

              {/* Remove Media Button */}
              <button
                className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full"
                onClick={handleRemoveMedia}
              >
                <FaTimes />
              </button>

              {/* Upload Progress */}
              {loading && (
                <div className="absolute bottom-0 left-0 w-full bg-gray-200 bg-opacity-50">
                  <div
                    className="bg-blue-600 h-2 transition-all"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
              )}

              {/* Pause/Play Upload */}
              {loading && (
                <div className="absolute bottom-2 right-2">
                  <button
                    className="bg-gray-600 text-white p-1 rounded-full"
                    onClick={() => setPaused(!paused)}
                  >
                    {paused ? <FaPlay /> : <FaPause />}
                  </button>
                </div>
              )}
            </div>
          )}
        </label>


             {/* Caption Input */}
        <div className="mb-4 mt-3">
          <textarea
            placeholder="Write a caption..."
            className="w-full input-field-with-shadow border-none rounded-lg py-2 px-4 text-gray-900 bg-white focus:outline-none"
            rows={4}
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          ></textarea>
        </div>


        {/* Tags Input */}
        <div className="-mt-4">
          <input
            type="text"
            placeholder="Add hashtags (comma separated)"
            className="w-full input-field-with-shadow border-none rounded-lg py-2 px-4 text-gray-900 bg-white focus:outline-none"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>

     

        {/* Submit Button */}
        <button
          className={`w-full py-2 px-4 rounded-lg bg-purple-500 text-white  transition duration-200 ease-in-out hover:bg-purple-700 active:bg-purple-900 focus:outline-none flex justify-center items-center ${loading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? (
            <FaSpinner className="animate-spin mr-2" />
          ) : (
            <>
              <FaPaperPlane className="mr-2" />
              Post
            </>
          )}
        </button>

        {/* Social Icons */}
        <ul className="flex justify-center mt-5 cursor-pointer space-x-5">
          <li>
            <a className="text-gray-500 hover:text-gray-900">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                <path
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                />
              </svg>
            </a>
          </li>
          <li>
            <a className="text-gray-500 hover:text-gray-900">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                <path
                  d="M12 2.163C6.518 2.163 2.163 6.518 2.163 12c0 4.784 3.642 8.728 8.354 9.665.611.112.837-.264.837-.588v-2.057c-3.414.744-4.13-1.587-4.13-1.587-.555-1.412-1.355-1.788-1.355-1.788-1.107-.758.083-.742.083-.742 1.224.087 1.865 1.265 1.865 1.265 1.088 1.866 2.854 1.326 3.551 1.014.111-.789.425-1.327.772-1.63-2.727-.308-5.594-1.364-5.594-6.07 0-1.343.481-2.443 1.27-3.303-.127-.31-.551-1.556.12-3.244 0 0 1.029-.33 3.375 1.26a11.595 11.595 0 0 1 3.075-.413c1.043.005 2.095.141 3.075.413 2.347-1.59 3.375-1.26 3.375-1.26.67 1.688.247 2.934.12 3.244.789.86 1.27 1.96 1.27 3.303 0 4.716-2.869 5.756-5.604 6.057.438.377.827 1.12.827 2.258v3.346c0 .324.227.705.843.585 4.717-.937 8.354-4.88 8.354-9.665 0-5.482-4.355-9.837-9.837-9.837z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                />
              </svg>
            </a>
          </li>
          <li>
            <a className="text-gray-500 hover:text-gray-900">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                <path
                  d="M21.716 8.313c.015.21.015.422.015.633 0 6.453-4.913 13.883-13.883 13.883-2.758 0-5.318-.814-7.484-2.221.383.045.75.061 1.15.061 2.29 0 4.401-.768 6.081-2.058a4.873 4.873 0 0 1-4.55-3.377c.752.111 1.486.111 2.265-.09a4.862 4.862 0 0 1-3.898-4.766v-.061a4.9 4.9 0 0 0 2.197.611 4.863 4.863 0 0 1-2.17-4.052c0-.908.243-1.744.675-2.472a13.836 13.836 0 0 0 10.063 5.107 5.473 5.473 0 0 1-.122-1.112 4.86 4.86 0 0 1 4.86-4.86 4.88 4.88 0 0 1 3.523 1.524 9.71 9.71 0 0 0 3.084-1.18 4.854 4.854 0 0 1-2.136 2.681 9.765 9.765 0 0 0 2.796-.766 10.47 10.47 0 0 1-2.435 2.516z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                />
              </svg>
            </a>
          </li>
         
          <li>
            <a className="text-gray-500 hover:text-gray-900">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                <path
                  d="M16.75 2h-9.5A5.25 5.25 0 0 0 2 7.25v9.5A5.25 5.25 0 0 0 7.25 22h9.5A5.25 5.25 0 0 0 22 16.75v-9.5A5.25 5.25 0 0 0 16.75 2zm-6.27 16.92H7.24V10.1h3.24v8.82h-.5zm-1.63-9.76a1.92 1.92 0 1 1 0-3.83 1.92 1.92 0 0 1 0 3.83zm10.12 9.76h-2.6v-4.15c0-.96-.02-2.2-1.34-2.2-1.34 0-1.55 1.05-1.55 2.14v4.2h-2.59V10.1h2.48v1.21h.04c.35-.66 1.19-1.35 2.45-1.35 2.62 0 3.1 1.72 3.1 3.95v5.01z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserDashboard;
