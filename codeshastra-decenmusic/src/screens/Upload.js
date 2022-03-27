import { useState } from "react";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../components/base";

const Upload = () => {
  const [progress, setProgress] = useState(0);
  const [value, setValue] = useState("");
  const [artist, setArtist] = useState("");
  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    setProgress(0);
    uploadFiles(file);
  };

  const uploadFiles = (file) => {
    if (!file) return;
    const sotrageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
        });
      }
    );
  };
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-slate-100">
      <form onSubmit={formHandler} className="flex flex-col space-y-2 w-2/5">
        <input type="file" className="" />
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="border border-black focus:outline-none px-4 py-2 rounded-lg"
          placeholder="Song Name"
        />
        <input
          type="text"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          className="border border-black focus:outline-none px-4 py-2 rounded-lg"
          placeholder="Artist Name"
        />

        <button
          type="submit"
          className="bg-black px-4 py-2 text-white hover:cursor-pointer hover:bg-slate-800 rounded-lg"
        >
          Upload
        </button>
      </form>
      <hr />
      <h2>Uploading done {progress}%</h2>
    </div>
  );
};

export default Upload;
