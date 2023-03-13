import { Method } from "./Method";
export const Meal = ({ meal }) => {
	return (
		<div>
			<div className=''>Total calories : {meal.total_calories}</div>
			<div className=''>Total calories consumed: {meal.consumed}</div>
			<div className=''>
				{meal.diet_details?.map((meal, i) => (
					<div
						key={meal.unit_id}
						style={{
							backgroundColor: `${
								meal.consumption_status ? "green" : "yellow"
							}`,
						}}>
						<div className=''>No. : {i + 1}</div>
						<div className=''>Name : {meal.name}</div>
						<img
							src={meal.co_image}
							alt=''
							style={{ heigh: "100%", width: "100%" }}
						/>
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
						<div className=''>Total Carbs Grams : {meal.total_carbs_grams}</div>
						<div className=''>Total Fat Calories : {meal.total_fat_cal}</div>
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
				))}
			</div>
		</div>
	);
};
// cal: "46.2";
// carbs_cal: "16.00";
// carbs_grams: "4";
// category: "dinner";
// co_image: "https://d1e9q0asw0l2kk.cloudfront.net/diet_upload/QYQNnfXZPFNaG-1674967192437download.jpg";
// consumed_cal: 0;
// consumption_status: false;
// date_added: "1643458387";
// description: "<p>Add mixture of tomato, onion, cabbage, spinach and carrot.</p>";
// details_id: "N/A";
// fat_cal: "27.00";
// fat_grams: "3";
// id: 80;
// is_missed: 0;
// is_popular: 0;
// last_updated: "1675015041044";
// method: "<p>Add mixture of tomato, onion, cabbage, spinach and carrot.</p>";
// name: "Bowl of Salad ";
// protien_cal: "3.20";
// protien_grams: "0.8";
// quantity: 1;
// status: "active";
// thumbnail: "https://wtfupme-images-1435.s3.ap-south-1.amazonaws.com/diet_upload/QYQNnfXZPFNaG-1674804683623download.jpg";
// total_fat_cal: 27;
// total_fat_grams: 3;
// total_in_cal: 46.2;
// total_in_grams: 7.8;
// total_protien_cal: 3.2;
// total_protien_grams: 0.8;
