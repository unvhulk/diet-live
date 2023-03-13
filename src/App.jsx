import { useEffect, useState } from "react";
import { Meal } from "./Meal";
import axios from "axios";
import "./App.css";

function App() {
	const [diets, setDiets] = useState({});
	const [selectedMeal, setSelectedMeal] = useState("");
	const MealsList = [
		"early_morning",
		"breakfast",
		"mmsnacks",
		"lunch",
		"snacks",
		"dinner",
		"bed_time",
	];

	const getData = async () => {
		const token =
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI0cTYwTWs3R0poeXg5IiwibmFtZSI6Ik5hcmVzaCBLdWtyZXRpIiwiaWF0IjoxNjY3ODkzNzI2LCJleHAiOjE2NzA0ODU3MjZ9.uKKg08BSmeqUUgnoeLCaJXKS45L-ebxToyQou-yxvr4";
		try {
			const response = await axios.get(
				"https://api.wtfup.me/dietcat/diet?uid=EqGCu3i5l36Me&day=monday&user_id=R7XxXsbCAZLAx&date=13-03-2023",
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			setDiets(response.data);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className='App'>
			<h1>Diet Plan APP</h1>
			<header style={{ display: "flex" }}>
				{MealsList.map((val) => (
					<div
						key={val}
						onClick={(e) => {
							setSelectedMeal(diets.data[0]?.day[`${e.target.innerText}`]);
						}}
						style={{
							border: "1px solid Black",
							padding: "1rem",
							cursor: "pointer",
							width: "100%",
						}}>
						{val}
					</div>
				))}
			</header>
			<div className=''>
				<Meal meal={selectedMeal} />
			</div>
		</div>
	);
}

export default App;
