(function(){
	let chatList = [
		{
			name: "John Snow",
			url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTYySTBjcMZWgHdBTHX7pW5gpDd6PZ0f8N_Q&usqp=CAU",
			chat: "In Battle, Discipline beats numbers 9 times out of 10."
		},
		{
			name: "Tyrion Lannister",
			url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ8BZJaCS5lkE4ODaGU6WVqwxx-sCQk7-8kA&usqp=CAU",
			chat: "I’m guilty of a far more monstrous crime. I’m guilty of being a dwarf."
		},
		{
			name: "Daenerys Targaryen",
			url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ-TnsLTIInqIaZgf-uUhEBoH5sPAYEl2kbg&usqp=CAU",
			chat: "My reign has just begun."
		},
		{
			name: "Sansa Stark",
			url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLxtjt4kmnsgdg4275m_GcP8t4vNErlg5ExA&usqp=CAU",
			chat: "You’re going to die tomorrow Lord Bolton, Sleep well."
		},
		{
			name: "Arya Stark",
			url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKr24UfzSv85iSghcNuEIZ8e6J2JQK-KEYDg&usqp=CAU",
			chat: "A girl is Arya Stark of Winterfell & I’m going home."
		},
		{
			name: "Petyr Baelish",
			url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlz6bX9jTlb0vFoxnnMKKdWtP2hs4ci_KZvA&usqp=CAU",
			chat: "Money buys a man’s silence for a time. A bolt in the heart buys it forever."
		},
		{
			name: "Bran Stark",
			url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkHHm7-eL6A6xjVZSFDBbsaDTLng0BXCvhXQ&usqp=CAU",
			chat: "Can a man still be brave if he’s afraid?"
		},
		{
			name: "Cersei Lannister",
			url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMaJ_Kg_eodB9M8e2EGFHX4c6qLXizR7VBwQ&usqp=CAU",
			chat: "he more people you love, the weaker you are."
		},
		{
			name: "Petyr Baelish",
			url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlz6bX9jTlb0vFoxnnMKKdWtP2hs4ci_KZvA&usqp=CAU",
			chat: "Money buys a man’s silence for a time. A bolt in the heart buys it forever."
		},
		{
			name: "Bran Stark",
			url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkHHm7-eL6A6xjVZSFDBbsaDTLng0BXCvhXQ&usqp=CAU",
			chat: "Can a man still be brave if he’s afraid?"
		},
		{
			name: "Cersei Lannister",
			url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMaJ_Kg_eodB9M8e2EGFHX4c6qLXizR7VBwQ&usqp=CAU",
			chat: "he more people you love, the weaker you are."
		}
	];
	let chatListElement = document.getElementsByClassName("chats")[0];
	chatList.forEach(person =>{
		let listItem = document.createElement("li");
		let chatData = `<div class="chat-image"><img src=${person.url}></div><div class="chat-text"><p class="header">${person.name}</p><p class="content">${person.chat}</p></div>`;
		listItem.innerHTML = chatData;
		listItem.setAttribute("title", person.chat);
		chatListElement.appendChild(listItem);
	});
	let loggedInUser = document.getElementsByClassName("user")[0];
	loggedInUser.setAttribute("src", "https://media-exp1.licdn.com/dms/image/C4D03AQGAsHodfkPx4A/profile-displayphoto-shrink_200_200/0/1591706649306?e=1635984000&v=beta&t=Gg4G3fnI2NAFiYr8CoriOxZ2iHbn6WJAKePj20SgyCg");
})();

