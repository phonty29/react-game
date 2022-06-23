const CHARACTERS = ['бека', 'шерхан', 'рафик', 'адиар', 'азамат сагындыков', 'азамат аскаров', 'женя', 'данил', 'маха', 'нурик', 'тимур', 'вова хван', 'вова бондарев'];
const POSSIBLE_ANSWERS = ['1', '0', '?'];
const REPLIES = ['Yes', 'No', 'I don\'t know'];

const template = (name) => (
	`
	<div class="col">
		<div class="card mb-4 rounded-3 shadow-sm">
			<div class="card-header py-3">
				<h4 class="my-0 fw-normal name">${name}</h4>
			</div>
			<div class="card-body">
				<img src="images/${name}.jpg" alt="" class="img-thumbnail image">				
			</div>
			<p class="testimony" style="text-align: center; font-weight: bold;"></p>			
		</div>
	 </div>
	`  	
);