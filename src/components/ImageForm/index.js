import { useState } from "react";
import API from "../../api";

const ImageForm = () => {
  const [selectedImage, setSelectedImage] = useState({ image: "" });
  const [title, setTitle] = useState({ title: "" });
  const [description, setDescription] = useState({ description: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    let res = API.uploadImage(selectedImage.image, title.title, description.description);
  };

  const handleImage = (event) => {
    setSelectedImage({ image: event.target.files[0] });
  };
  const handleTitle = (event) => {
    setTitle({ title: event.target.value });
  };
  const handleDescription = (event) => {
    setDescription({ description: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title.title} onChange={handleTitle} />
      </label>
      <label>
        Image:
        <input type="file" onChange={handleImage} />
      </label>
      <label>
        Description:
        <textarea
          type="text"
          value={description.description}
          onChange={handleDescription}
        />
      </label>
      <input type="submit" value="Upload" />
    </form>
  );
};

export default ImageForm;
