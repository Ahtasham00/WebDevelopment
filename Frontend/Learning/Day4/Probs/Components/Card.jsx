//We can  write probs as       funtion Card(probs)
//then call {probs.attributes} in javascript

//to set default value of attribute there are two methods
//1)within function
//{probs.attribute || "defaultvalue"}
//2)As default value in function
//function Card({name="tester"})  // here if we pass value when we call function when it will store that value in username else default value will be username

//Both method are correct BUT Second usually sencond method use as it increase readiability

///To c

function Card({ name = 'Delba', obj="" }) {
	return (
		<>
			<div class="relative h-[400px] w-[300px] rounded-md">
				<img
					src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
					alt="AirMax Pro"
					class="z-0 h-full w-full rounded-md object-cover"
				/>
				<div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
				<div class="absolute bottom-4 left-4 text-left">
					<h1 class="text-lg font-semibold text-white">{name}</h1>
					<p class="mt-2 text-sm text-gray-300">
            {obj.content || "content not available"}
					</p>
					<button class="bg-black mt-2 inline-flex cursor-pointer items-center font-semibold text-white">
						 {obj.button || "button not availabe"}
					</button>
				</div>
			</div>
		</>
	)
}

export default Card
