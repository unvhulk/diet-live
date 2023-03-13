import { Method } from "./Method";
export const Meal = ({ meal }) => {
	return (
		<div>
			<div className=''>Total calories : {meal.total_calories}</div>
			<div className=''>Total calories consumed: {meal.consumed}</div>
			<div className=''>
				{meal.diet_details?.map((meal, i) => (
					<div
						key={meal.unit_id + i}
						style={{
							backgroundColor: `${
								meal.consumption_status ? "green" : "yellow"
							}`,
							border: "1px solid black",
							margin: "10px",
						}}>
						<div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
							<div className=''>
								<img
									src={meal.co_image}
									alt=''
									style={{ heigh: "100%", width: "100%" }}
								/>
							</div>
							<div className=''>
								<div className=''>No. : {i + 1}</div>
								<div className=''>Name : {meal.name}</div>
								<div className=''>Calories : {meal.cal}</div>
								<div className=''>Carbs Calories : {meal.carbs_cal}</div>
								<div className=''>Carbs Grams : {meal.carbs_grams}</div>
								<div className=''>Fat Calories : {meal.fat_cal}</div>
								<div className=''>Fat Grams : {meal.fat_grams}</div>
								<div className=''>Protien Calories : {meal.protien_cal}</div>
								<div className=''>Protien Grams : {meal.protien_grams}</div>
								<div className=''>Total Calories : {meal.totalCal}</div>
								<div className=''>Total Grams : {meal.totalGrams}</div>
								<div className=''>
									Total Carbs Calories : {meal.total_carbs_cal}
								</div>
								<div className=''>
									Total Carbs Grams : {meal.total_carbs_grams}
								</div>
								<div className=''>
									Total Fat Calories : {meal.total_fat_cal}
								</div>
								<div className=''>Total Fat Grams : {meal.total_fat_grams}</div>
								<div className=''>
									Total Protien Calories : {meal.total_protien_cal}
								</div>
								<div className=''>
									Total Protien Grams : {meal.total_protien_grams}
								</div>
								<div className=''>Total In Calories : {meal.total_in_cal}</div>
								<div className=''>Total In Grams : {meal.total_in_grams}</div>
								<div>
									<Method method={meal.method} />
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
