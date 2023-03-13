export const Meal = ({ meal }) => {
	console.log(meal);
	return (
		<div>
			<div className=''>Total calories : {meal.total_calories}</div>
			<div className=''>Total calories consumed: {meal.consumed}</div>
			<div className=''>
				{meal.diet_details?.map((meal, i) => (
					<div
						key={i + 10}
						style={{
							backgroundColor: `${
								meal.consumption_status ? "green" : "yellow"
							}`,
						}}>
						<div className=''>No. : {i}</div>
						<img
							src={meal.co_image}
							alt=''
							style={{ heigh: "100%", width: "100%" }}
						/>
						<div className=''>Calories : {meal.cal}</div>
						<div className=''>Carbs Calories : {meal.carbs_cal}</div>
						<div className=''>Carbs Grams : {meal.carbs_grams}</div>
						<div className=''>Date added : {meal.date_added.toString()}</div>
						{/* today.toLocaleDateString("en-US") */}
					</div>
				))}
			</div>
		</div>
	);
};
