const registerAPI = async (formData) => {
   

    try {
      const res = await axios.post("/api/register", formData);
      console.log("Item registered:", res.data);
      alert("Item registered successfully!");
    } catch (err) {
      console.error("Error registering item:", err);
      alert("Error occurred during registration.");
    }
  };


  export {registerAPI}