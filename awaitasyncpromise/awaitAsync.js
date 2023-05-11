const axios = require("axios");

const fetchData = async ()=>{
	const data = await axios.get("https://cat-fact..herokuapp.com/facts")
	console.log(data)
};

fetchData();
