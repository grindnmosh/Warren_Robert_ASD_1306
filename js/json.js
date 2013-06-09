/*
Robert Warren
Term 1304
Advanced Scalable Data Infrastructures (ASD)
Quality Experiences

Github: https://github.com/grindnmosh/Warren_Robert_ASD_1306.git
URL: http://grind-design.com (page for new app coming soon... will be moving 1st app to a sub domain...)
*/

var sampleQa = {
	"1": {
		"name": ["Agent Name: ", "Mike"],
		"call": ["Date and Time: ", "2013-06-08"],
		"sale": ["Sales Call Type: ", "CPU Sale"],
		"qaType": ["QA Style: ", "Coached Calibrated Call"],
		"score": ["Score: ", "75"],
		"notes": ["Notes: ", " "]
	},
	"2": {
		"name": ["Agent Name: ", "Chris"],
		"call": ["Date and Time: ", "2013-06-08"],
		"sale": ["Sales Call Type: ", "iPad Sale"],
		"qaType": ["QA Style: ", "Side By Side"],
		"score": ["Score: ", "80"],
		"notes": ["Notes: ", " "]
	},
	"3": {
		"name": ["Agent Name: ", "Ceri"],
		"call": ["Date and Time: ", "2013-06-08"],
		"sale": ["Sales Call Type: ", "CPU No Sale"],
		"qaType": ["QA Style: ", "Coached Calibrated Call"],
		"score": ["Score: ", "90"],
		"notes": ["Notes: ", " "]
	},
	"4": {
		"name": ["Agent Name: ", "Audra"],
		"call": ["Date and Time: ", "2013-06-08"],
		"sale": ["Sales Call Type: ", "CPU Sale"],
		"qaType": ["QA Style: ", "Listened(WAVE) Coached Later"],
		"score": ["Score: ", "100"],
		"notes": ["Notes: ", "Great Call"]
	},
	"5": {
		"name": ["Agent Name: ", "John"],
		"call": ["Date and Time: ", "2013-06-08"],
		"sale": ["Sales Call Type: ", "iPad No Sale"],
		"qaType": ["QA Style: ", "Negative Survey"],
		"score": ["Score: ", "82"],
		"notes": ["Notes: ", " "]
	},
	"6": {
		"name": ["Agent Name: ", "Brittney"],
		"call": ["Date and Time: ", "2013-06-08"],
		"sale": ["Sales Call Type: ", "Accessory/Software Sale"],
		"qaType": ["QA Style: ", "Side By Side"],
		"score": ["Score: ", "95"],
		"notes": ["Notes: ", " "]
	},
	"7": {
		"name": ["Agent Name: ", "Tabia"],
		"call": ["Date and Time: ", "2013-06-08"],
		"sale": ["Sales Call Type: ", "Other Sale"],
		"qaType": ["QA Style: ", "Negative Survey"],
		"score": ["Score: ", "65"],
		"notes": ["Notes: ", "You need to focus on helping your customers"]
	},
	"8": {
		"name": ["Agent Name: ", "Eric"],
		"call": ["Date and Time: ", "2013-06-08"],
		"sale": ["Sales Call Type: ", "Other No Sale"],
		"qaType": ["QA Style: ", "Other"],
		"score": ["Score: ", "92"],
		"notes": ["Notes: ", " "]
	},
	"9": {
		"name": ["Agent Name: ", "Danielle"],
		"call": ["Date and Time: ", "2013-06-08"],
		"sale": ["Sales Call Type: ", "Accessory/Software No Sale"],
		"qaType": ["QA Style: ", "Side By Side"],
		"score": ["Score: ", "62"],
		"notes": ["Notes: ", " "]
	},
	"10": {
		"name": ["Agent Name: ", "Erik"],
		"call": ["Date and Time: ", "2013-06-08"],
		"sale": ["Sales Call Type: ", "CPU Sale"],
		"qaType": ["QA Style: ", "Negative Survey"],
		"score": ["Score: ", "70"],
		"notes": ["Notes: ", " "]
	},
	"11": {
		"name": ["Agent Name: ", "Tanya"],
		"call": ["Date and Time: ", "2013-06-08"],
		"sale": ["Sales Call Type: ", "Accessory/Software Sale"],
		"qaType": ["QA Style: ", "Side By Side"],
		"score": ["Score: ", "98"],
		"notes": ["Notes: ", "so close"]
	},
	"12": {
		"name": ["Agent Name: ", "Derrik"],
		"call": ["Date and Time: ", "2013-06-08"],
		"sale": ["Sales Call Type: ", "CPU No Sale"],
		"qaType": ["QA Style: ", "Side By Side"],
		"score": ["Score: ", "55"],
		"notes": ["Notes: ", " "]
	},
	"13": {
		"name": ["Agent Name: ", "Paul"],
		"call": ["Date and Time: ", "2013-06-08"],
		"sale": ["Sales Call Type: ", "iPad Sale"],
		"qaType": ["QA Style: ", "Listened With Agent(WAVE)"],
		"score": ["Score: ", "100"],
		"notes": ["Notes: ", "Great Call"]
	},
	"14": {
		"name": ["Agent Name: ", "Donna"],
		"call": ["Date and Time: ", "2013-06-08"],
		"sale": ["Sales Call Type: ", "Other Sale"],
		"qaType": ["QA Style: ", "Side By Side"],
		"score": ["Score: ", "75"],
		"notes": ["Notes: ", " "]
	},
	"15": {
		"name": ["Agent Name: ", "Andrea"],
		"call": ["Date and Time: ", "2013-06-08"],
		"sale": ["Sales Call Type: ", "CPU Sale"],
		"qaType": ["QA Style: ", "Listened(WAVE) Coached Later"],
		"score": ["Score: ", "90"],
		"notes": ["Notes: ", " "]
	},
	"16": {
		"name": ["Agent Name: ", "Nicole"],
		"call": ["Date and Time: ", "2013-06-08"],
		"sale": ["Sales Call Type: ", "Accessory/Software No Sale"],
		"qaType": ["QA Style: ", "Side By Side"],
		"score": ["Score: ", "92"],
		"notes": ["Notes: ", " "]
	},
	"17": {
		"name": ["Agent Name: ", "Alisha"],
		"call": ["Date and Time: ", "2013-06-08"],
		"sale": ["Sales Call Type: ", "CPU NoSale"],
		"qaType": ["QA Style: ", "Listened With Agent(WAVE)"],
		"score": ["Score: ", "95"],
		"notes": ["Notes: ", "Psycho"]
	},
	"18": {
		"name": ["Agent Name: ", "Robley"],
		"call": ["Date and Time: ", "2013-06-08"],
		"sale": ["Sales Call Type: ", "iPad No Sale"],
		"qaType": ["QA Style: ", "Side By Side"],
		"score": ["Score: ", "80"],
		"notes": ["Notes: ", " "]
	},
	"19": {
		"name": ["Agent Name: ", "Joshua"],
		"call": ["Date and Time: ", "2013-06-08"],
		"sale": ["Sales Call Type: ", "CPU No Sale"],
		"qaType": ["QA Style: ", "Listened With Agent(WAVE)"],
		"score": ["Score: ", "60"],
		"notes": ["Notes: ", " "]
	},
	"20": {
		"name": ["Agent Name: ", "Ashley"],
		"call": ["Date and Time: ", "2013-06-08"],
		"sale": ["Sales Call Type: ", "Accessory/Software Sale"],
		"qaType": ["QA Style: ", "Side By Side"],
		"score": ["Score: ", "95"],
		"notes": ["Notes: ", " "]
	},
	"21": {
		"name": ["Agent Name: ", "Harold"],
		"call": ["Date and Time: ", "2013-06-08"],
		"sale": ["Sales Call Type: ", "Other Sale"],
		"qaType": ["QA Style: ", "Listened(WAVE) Coached Later"],
		"score": ["Score: ", "62"],
		"notes": ["Notes: ", " "]
	}
};	
	