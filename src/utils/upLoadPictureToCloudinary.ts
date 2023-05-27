import axios from "axios";

export async function uploadPictureToCloudinary(fileToUpload: File): Promise<string> {
    try {
        const formData = new FormData();
        formData.append("foo", "bar");
        formData.append("file", fileToUpload);
        const endpoint = "http://localhost:4040/upload";
        const response = await axios({
            method: "post",
            url: endpoint,
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
        });
        console.log(">>>>URL FROM CLOUDINARY", response.data.secure_url);
        return response.data.secure_url;
    } catch (error) {
        console.log(">>>error uploading file>>>", error);
        alert("Picture upload failed");
        return 'Failed to upload picture'
       
    }
}