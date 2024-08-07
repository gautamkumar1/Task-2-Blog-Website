
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

export const saveDraft = async (draftData) => {
    try {
        const authToken = Cookies.get('token');
        const response = await fetch("https://task-2-blog-website-1.onrender.com/api/user/save-draft", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${authToken}`,
            },
            body: JSON.stringify(draftData),
        });
        const responseData = await response.json();

        if (!response.ok) {
            throw new Error(responseData.message || 'Failed to save draft');
        }
        toast.success("Draft saved successfully");
        console.log("Draft saved:", responseData); // Debug log
        return responseData;
    } catch (err) {
        console.error("Error saving draft:", err); // Debug log
        toast.error(err.message || 'An error occurred while saving draft');
        throw err; // Re-throw the error to handle it further if needed
    }
};
