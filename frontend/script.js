const fetchMessage = async () => {
    try {
        const response = await fetch("http://localhost:8000/");
        const data = await response.json();
        document.getElementById("message").textContent = `Message: ${data.message}`;
    } catch (error) {
        console.error("Error fetching message:", error);
    }
};

const fetchName = async () => {
    try {
        const response = await fetch("http://localhost:8000/eldar");
        const data = await response.json();
        document.getElementById("name").textContent = `Name: ${data.name}`;
    } catch (error) {
        console.error("Error fetching name:", error);
    }
};
